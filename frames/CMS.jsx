// CMS.jsx — 記事作成画面 (ブロックエディタ)
// 特集紐付け / 比較表エディタ / カスタムCSS / 固定CTA / Googleフォーム / タイアップ

// ── 汎用ブロックの外殻 ──
function Block({ type, title, children, warn = false, style = {} }) {
  return (
    <div style={{
      background:'#fff',
      border:'1px solid ' + (warn ? 'var(--wf-clay)' : 'var(--wf-line)'),
      marginBottom: 8,
      ...style,
    }}>
      <div style={{
        display:'flex', alignItems:'center', gap:6,
        padding:'6px 8px', borderBottom:'1px solid var(--wf-line-2)',
        background: warn ? 'var(--wf-clay-soft)' : 'var(--wf-bg-2)',
        fontSize:10,
      }}>
        <span style={{color:'var(--wf-mute)'}}>{Ico.drag}</span>
        <span style={{
          fontFamily:'var(--wf-font-mono)', fontWeight:700,
          color: warn ? 'var(--wf-clay)' : 'var(--wf-court)',
          letterSpacing:'0.04em',
        }}>[{type}]</span>
        <span style={{fontSize:10, color:'var(--wf-mute)', flex:1, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>{title}</span>
        <span style={{color:'var(--wf-mute)', fontSize:10}}>···</span>
      </div>
      <div style={{padding:'8px 10px'}}>{children}</div>
    </div>
  );
}

function Field({ label, value, hint, right }) {
  return (
    <div style={{marginBottom:8}}>
      <div style={{display:'flex', alignItems:'center', gap:4, marginBottom:3}}>
        <span style={{fontSize:10, fontWeight:700, color:'var(--wf-mute)', letterSpacing:'0.04em'}}>{label}</span>
        {right}
      </div>
      <div style={{
        border:'1px solid var(--wf-line)', padding:'6px 8px',
        fontSize:12, background:'#fff', minHeight:26,
      }}>{value}</div>
      {hint && <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:3}}>{hint}</div>}
    </div>
  );
}

function Toggle({ on, label, warn }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:8,
      padding:'8px 10px', border:'1px solid ' + (warn ? 'var(--wf-clay)' : 'var(--wf-line)'),
      background: on && warn ? 'var(--wf-clay-soft)' : (on ? 'var(--wf-court-soft)' : '#fff'),
      marginBottom:6,
    }}>
      <div style={{
        width:28, height:16, borderRadius:8,
        background: on ? (warn ? 'var(--wf-clay)' : 'var(--wf-court)') : 'var(--wf-line)',
        position:'relative', flex:'0 0 auto',
      }}>
        <div style={{
          position:'absolute', top:2, left: on ? 14 : 2,
          width:12, height:12, borderRadius:'50%', background:'#fff',
        }}/>
      </div>
      <span style={{fontSize:11.5, fontWeight:700, flex:1}}>{label}</span>
    </div>
  );
}

// PCブラウザ枠 (簡易)
function BrowserChrome({ url }) {
  return (
    <div style={{
      height:32, background:'#e2e0d8', borderBottom:'1px solid #cfcbc1',
      display:'flex', alignItems:'center', gap:8, padding:'0 12px',
    }}>
      <div style={{display:'flex', gap:6}}>
        {['#ec6a5e','#f4bf4f','#61c454'].map((c,i)=><span key={i} style={{width:10, height:10, borderRadius:'50%', background:c}}/>)}
      </div>
      <div style={{
        flex:1, maxWidth:420, margin:'0 auto', background:'#fff', border:'1px solid var(--wf-line)',
        borderRadius:12, padding:'3px 10px', fontSize:10.5, color:'var(--wf-mute)',
        fontFamily:'var(--wf-font-mono)', textAlign:'center',
      }}>{url}</div>
    </div>
  );
}

function CMSFrame() {
  return (
    <div style={{
      width:1200, background:'#fff', border:'1px solid #cfcbc1',
      boxShadow:'0 2px 6px rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.08)',
      overflow:'hidden',
    }}>
      <BrowserChrome url="cms.tennis365.example/articles/new" />
      <AppBar variant="cms" />

      {/* ── モードバー ── */}
      <div style={{
        display:'flex', background:'#25251f', borderBottom:'1px solid #3a3a33',
        padding:'0 16px',
      }}>
        {[['編集', true], ['プレビュー', false], ['SP', false]].map(([t, on], i) => (
          <div key={i} style={{
            padding:'8px 14px', fontSize:11, fontWeight:700,
            color: on ? '#fff' : '#8a8a80',
            borderBottom: '2px solid ' + (on ? 'var(--wf-court-2)' : 'transparent'),
          }}>{t}</div>
        ))}
        <div style={{marginLeft:'auto', display:'flex', alignItems:'center', gap:6, color:'#8a8a80', fontSize:10}}>
          <span style={{width:6, height:6, borderRadius:'50%', background:'#5aa070'}}/>
          <span>自動保存 · 30秒前</span>
        </div>
      </div>

      {/* ── 2カラム: 本文エディタ(左) + 基本情報サイドバー(右・追従) ── */}
      <div style={{background:'#e8e6df', padding:16, display:'flex', gap:16, alignItems:'flex-start'}}>

        {/* ── 左: 本文ブロック ── */}
        <div style={{flex:'1 1 auto', minWidth:0}}>

          {/* ブロック追加ツールバー */}
          <div style={{
            background:'#fff', border:'1px solid var(--wf-line)',
            padding:'6px', marginBottom:10,
            display:'flex', gap:4, overflow:'auto',
          }}>
            {['+ 見出し','+ 本文','+ 画像','+ スペック表','+ 比較表','+ CTA','+ フォーム','+ HTML'].map((t,i) => (
              <div key={i} style={{
                flex:'0 0 auto', padding:'6px 10px', fontSize:10.5, fontWeight:700,
                background: t.includes('スペック') || t.includes('比較') || t.includes('CTA') ? 'var(--wf-court-soft)' : 'var(--wf-bg-2)',
                color: t.includes('スペック') || t.includes('比較') || t.includes('CTA') ? 'var(--wf-court)' : 'var(--wf-ink)',
                border:'1px solid ' + (t.includes('スペック') || t.includes('比較') || t.includes('CTA') ? 'var(--wf-court)' : 'var(--wf-line)'),
                whiteSpace:'nowrap',
              }}>{t}</div>
            ))}
          </div>

          {/* 本文ブロック群 */}
          <div style={{fontSize:11, fontWeight:800, color:'var(--wf-mute)', letterSpacing:'0.06em', marginBottom:6, padding:'0 2px'}}>
            BLOCKS · 12
          </div>

          <Block type="HERO" title="ヒーロー画像">
          <ImgPh w="100%" h={80} label="Pure Aero 98 物撮り" />
          <div style={{display:'flex', gap:6, marginTop:6, fontSize:10}}>
            <input placeholder="キャプション" style={{flex:1, border:'1px solid var(--wf-line)', padding:'4px 6px', fontSize:10}} readOnly value="© BABOLAT" />
          </div>
        </Block>

        <Block type="H1" title="見出し">
          <div style={{fontSize:14, fontWeight:800}}>Pure Aero 98 (2026) 徹底レビュー</div>
        </Block>

        <Block type="P" title="本文">
          <div style={{fontSize:12, lineHeight:1.7, color:'var(--wf-ink-2)'}}>
            アルカラスの世界制覇を支えた名器「Pure Aero」。2026年モデルは98インチのフェイスサイズに...
          </div>
        </Block>

        {/* ── スペック表ブロック (スプシ貼付) ── */}
        <Block type="SPEC-TABLE" title="スペック表 (スプレッドシート連携)">
          <div style={{
            border:'1px dashed var(--wf-court)', background:'var(--wf-court-soft)',
            padding:'10px', marginBottom:8, position:'relative',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:6}}>
              <span style={{fontSize:10, fontWeight:800, color:'var(--wf-court)', letterSpacing:'0.06em'}}>◤ PASTE ZONE</span>
              <AnnoTag>スプシから直接コピペ</AnnoTag>
            </div>
            <div style={{
              fontFamily:'var(--wf-font-mono)', fontSize:10, color:'var(--wf-ink-2)',
              background:'#fff', padding:6, border:'1px solid var(--wf-line)',
              lineHeight:1.5,
            }}>
              フェイスサイズ	98 sq.in.<br/>
              重量	305g<br/>
              バランス	320mm<br/>
              <span style={{color:'var(--wf-mute-2)'}}>│ Cmd+V で貼り付け →</span>
            </div>
          </div>
          <div style={{fontSize:10, color:'var(--wf-court)', marginBottom:6, fontWeight:700, display:'flex', alignItems:'center', gap:3}}>
            {Ico.check}<span>タブ区切りを検出 · 8項目を自動でテーブル化しました</span>
          </div>
          {/* 生成された表プレビュー */}
          <div style={{border:'1px solid var(--wf-line)'}}>
            {[['フェイスサイズ','98 sq.in.'],['重量','305g'],['バランス','320mm']].map(([k,v],i)=>(
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'1fr 1fr',
                fontSize:10.5, borderBottom: i<2 ? '1px solid var(--wf-line-2)':0,
              }}>
                <span style={{padding:'4px 8px', background:'var(--wf-bg-2)', color:'var(--wf-mute)'}}>{k}</span>
                <span style={{padding:'4px 8px', fontWeight:700, fontFamily:'var(--wf-font-num)'}}>{v}</span>
              </div>
            ))}
            <div style={{padding:'4px 8px', fontSize:10, color:'var(--wf-mute)', textAlign:'center', background:'var(--wf-bg-2)'}}>
              ... 他 5項目
            </div>
          </div>
        </Block>

        {/* ── 比較表ブロック ── */}
        <Block type="COMPARE" title="比較表 · 縦積みカード">
          <div style={{fontSize:10, color:'var(--wf-mute)', marginBottom:6, lineHeight:1.5}}>
            比較する商品を選択 (最大3件)
          </div>
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:4, marginBottom:8}}>
            {['Pure Aero 98','Blade 98 v9','Speed MP'].map((n,i)=>(
              <div key={i} style={{
                border:'1px solid ' + (i===0 ? 'var(--wf-court)':'var(--wf-line)'),
                background: i===0 ? 'var(--wf-court-soft)':'#fff',
                padding:6, textAlign:'center',
              }}>
                <ImgPh w="100%" h={30} label="" />
                <div style={{fontSize:9, fontWeight:700, marginTop:3, lineHeight:1.2}}>{n}</div>
              </div>
            ))}
          </div>
          <div style={{display:'flex', gap:6, alignItems:'center', padding:'6px 8px', background:'var(--wf-bg-2)', border:'1px solid var(--wf-line-2)'}}>
            <span style={{fontSize:10, fontWeight:700, color:'var(--wf-mute)'}}>ハイライト設定:</span>
            <span style={{fontSize:10, fontWeight:700, background:'var(--wf-clay)', color:'#fff', padding:'1px 6px'}}>最高値★</span>
            <span style={{fontSize:10, fontWeight:700, background:'var(--wf-court)', color:'#fff', padding:'1px 6px'}}>本モデル</span>
          </div>
        </Block>

        {/* ── 固定CTAブロック ── */}
        <Block type="STICKY-CTA" title="固定購入CTA (画面下部追従)">
          <div style={{
            background:'var(--wf-ink)', color:'#fff', padding:'6px 8px',
            display:'flex', alignItems:'center', gap:8, marginBottom:8,
          }}>
            <div style={{flex:1}}>
              <div style={{fontSize:9, color:'#c5c3bc'}}>¥46,200 · 税込</div>
              <div style={{fontSize:10, fontWeight:700}}>Pure Aero 98 (2026)</div>
            </div>
            <div style={{background:'var(--wf-clay)', color:'#fff', fontSize:9, padding:'4px 8px', fontWeight:800}}>今すぐ購入</div>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, fontSize:10}}>
            <div>
              <div style={{color:'var(--wf-mute)', fontSize:9, marginBottom:2}}>リンク先URL</div>
              <div style={{border:'1px solid var(--wf-line)', padding:'4px 6px', fontFamily:'var(--wf-font-mono)', fontSize:9, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap'}}>https://ec.example/p/pure-aero-98</div>
            </div>
            <div>
              <div style={{color:'var(--wf-mute)', fontSize:9, marginBottom:2}}>ボタン色</div>
              <div style={{display:'flex', gap:3}}>
                {['var(--wf-clay)', 'var(--wf-court)', 'var(--wf-ink)'].map((c,i)=>(
                  <div key={i} style={{
                    width:22, height:22, background:c,
                    border: i===0 ? '2px solid #000' : '1px solid var(--wf-line)',
                  }}/>
                ))}
              </div>
            </div>
          </div>
        </Block>

        {/* ── Googleフォーム埋め込み ── */}
        <Block type="EMBED-FORM" title="Googleフォーム埋め込み">
          <div style={{
            border:'1px dashed var(--wf-line)',
            padding:10, textAlign:'center', background:'var(--wf-bg-2)',
          }}>
            <div style={{fontSize:10, fontWeight:700, color:'var(--wf-mute)', marginBottom:4}}>安全な埋め込みドメイン</div>
            <div style={{fontFamily:'var(--wf-font-mono)', fontSize:10, color:'var(--wf-ink)'}}>docs.google.com/forms/...</div>
            <div style={{fontSize:9, color:'var(--wf-court)', marginTop:6, display:'flex', alignItems:'center', gap:3, justifyContent:'center'}}>
              {Ico.check}<span>ホワイトリスト検証 OK / iframe埋め込み承認済み</span>
            </div>
          </div>
        </Block>

        {/* ── カスタムCSS ── */}
        <Block type="CUSTOM-CSS" title="この記事限定のカスタムCSS" warn={false}>
          <div style={{
            background:'#1a1a18', color:'#c5c3bc',
            fontFamily:'var(--wf-font-mono)', fontSize:10,
            padding:'8px 10px', lineHeight:1.6,
          }}>
            <div><span style={{color:'#6a9eff'}}>.article-body</span> {'{'}</div>
            <div>&nbsp;&nbsp;<span style={{color:'#ffb190'}}>--accent</span>: <span style={{color:'#a5e0a5'}}>#c60b1e</span>;</div>
            <div>{'}'}</div>
            <div style={{color:'#7a7a70'}}>/* ES 応援カラーに上書き */</div>
          </div>
          <div style={{fontSize:9.5, color:'var(--wf-mute)', marginTop:6, lineHeight:1.5}}>
            サンドボックス化されたスコープ内でのみ適用。<code style={{background:'var(--wf-bg-2)', padding:'0 3px'}}>&lt;script&gt;</code> は自動でサニタイズされます。
          </div>
        </Block>

        {/* ── 追加ボタン ── */}
        <div style={{
          border:'1px dashed var(--wf-mute-2)',
          padding:'10px', textAlign:'center',
          background:'transparent', color:'var(--wf-mute)',
          fontSize:11, fontWeight:700,
          display:'flex', alignItems:'center', justifyContent:'center', gap:4,
        }}>
          {Ico.plus}<span>ブロックを追加</span>
        </div>

        {/* ── 底 · プレビューへ ── */}
        <div style={{
          marginTop:14, padding:'10px',
          background:'#fff', border:'1px solid var(--wf-line)',
          display:'flex', gap:6,
        }}>
          <button style={{flex:1, background:'var(--wf-bg-2)', border:'1px solid var(--wf-line)', padding:'8px', fontSize:11, fontWeight:700, display:'inline-flex', alignItems:'center', justifyContent:'center', gap:4}}>
            {Ico.eye}<span>プレビュー</span>
          </button>
          <button style={{flex:1, background:'var(--wf-court)', color:'#fff', border:0, padding:'8px', fontSize:11, fontWeight:800}}>公開する</button>
          </div>
        </div>

        {/* ── 右: 基本情報サイドバー (追従) ── */}
        <div style={{flex:'0 0 340px', position:'sticky', top:16}}>
          <div style={{background:'#fff', padding:'14px 16px', border:'1px solid var(--wf-line)'}}>
            <div style={{fontSize:11, fontWeight:800, marginBottom:8, letterSpacing:'0.04em', color:'var(--wf-court)'}}>基本情報</div>

            <div style={{marginBottom:8}}>
              <div style={{fontSize:10, fontWeight:700, color:'var(--wf-mute)', marginBottom:3}}>タイトル</div>
              <div style={{
                border:'1px solid var(--wf-line)', padding:'8px 10px',
                fontSize:14, fontWeight:700, background:'#fff',
              }}>Pure Aero 98 (2026) 徹底レビュー<span style={{opacity:0.4}}>|</span></div>
            </div>

            <Field label="カテゴリ" value="エクウィップメント / ラケット" right={<span className="wf-mute" style={{fontSize:9, marginLeft:'auto'}}>{Ico.chevD}</span>}/>
            <Field label="公開日時" value="2026.07.20 09:00" />

            {/* 特集自動紐付け */}
            <div style={{marginBottom:8}}>
              <div style={{display:'flex', alignItems:'center', gap:4, marginBottom:3}}>
                <span style={{fontSize:10, fontWeight:700, color:'var(--wf-mute)'}}>特集への紐付け</span>
                <AnnoTag>選択 or 新規作成</AnnoTag>
              </div>
              <div style={{border:'1px solid var(--wf-line)', padding:'6px', background:'#fff'}}>
                <div style={{display:'flex', flexWrap:'wrap', gap:4}}>
                  <span style={{background:'var(--wf-court)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 8px', display:'inline-flex', alignItems:'center', gap:4}}>
                    #2026年ラケット新製品 <span style={{opacity:0.6}}>×</span>
                  </span>
                  <span style={{background:'var(--wf-court)', color:'#fff', fontSize:10, fontWeight:700, padding:'3px 8px', display:'inline-flex', alignItems:'center', gap:4}}>
                    #アルカラス使用モデル <span style={{opacity:0.6}}>×</span>
                  </span>
                  <span style={{
                    background:'transparent', color:'var(--wf-court)',
                    border:'1px dashed var(--wf-court)',
                    fontSize:10, fontWeight:700, padding:'2px 8px',
                  }}>+ 特集を追加</span>
                </div>
              </div>
              <div style={{fontSize:10, color:'var(--wf-court)', marginTop:4, display:'flex', alignItems:'center', gap:3}}>
                {Ico.check}<span>公開時に特集ページへ自動追加されます</span>
              </div>
            </div>

            {/* タイアップフラグ (警告色) */}
            <Toggle on={true} warn={true} label="タイアップ記事 (広告非表示)" />
            <div style={{fontSize:10, color:'var(--wf-clay)', lineHeight:1.5, padding:'0 2px'}}>
              ⚠ ONの間、この記事内のアドセンス・他社バナーは<b>完全非表示</b>。ページ上部に「PR」ラベルを自動表示します。
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { CMSFrame });
