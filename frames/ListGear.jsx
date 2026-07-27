// ListGear.jsx — 記事一覧：エクウィップメント
// 新着 / ラケット / シューズ / ガット / グリップ / ウェア / アクセスランキング

function ListGearFrame() {
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="エクウィップメント" />

      {/* ページヘッダ (雑誌的な余白) */}
      <div style={{padding:'20px 14px 16px', background:'#fff'}}>
        <div className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.08em', marginBottom:6}}>
          GEAR INDEX / EQUIPMENT
        </div>
        <h1 style={{margin:0, fontSize:26, fontWeight:800, letterSpacing:'-0.02em', lineHeight:1.15}}>
          エクウィップメント
        </h1>
        <div style={{fontSize:12, color:'var(--wf-mute-2)', marginTop:6, fontFamily:'serif', fontStyle:'italic'}}>
          — Rackets, Strings, Shoes and more.
        </div>
      </div>

      {/* サブカテゴリタブ */}
      <div className="wf-gnav" style={{padding:'0 6px'}}>
        {['新着', 'ラケット', 'シューズ', 'ガット', 'グリップ', 'ウェア', 'アクセ'].map((c, i) => (
          <div key={c} className={'wf-gnav-item' + (i === 0 ? ' on' : '')}>{c}</div>
        ))}
      </div>

      {/* 並び替え + ブランドフィルタ */}
      <div style={{
        padding:'8px 14px', display:'flex', gap:8, alignItems:'center',
        background:'var(--wf-bg-2)', borderBottom:'1px solid var(--wf-line-2)',
        fontSize:10.5,
      }}>
        <div style={{
          display:'flex', gap:4, alignItems:'center', fontWeight:700,
          padding:'5px 8px', border:'1px solid var(--wf-line)', background:'#fff',
        }}>ブランド {Ico.chevD}</div>
        <div style={{
          display:'flex', gap:4, alignItems:'center', fontWeight:700,
          padding:'5px 8px', border:'1px solid var(--wf-line)', background:'#fff',
        }}>価格帯 {Ico.chevD}</div>
        <div style={{marginLeft:'auto', display:'flex', gap:4, alignItems:'center', fontWeight:700}}>
          新着順 {Ico.chevD}
        </div>
      </div>

      {/* ── 特集バナー (雑誌風) ── */}
      <div style={{padding:'14px 14px 0'}}>
        <div style={{position:'relative', background:'var(--wf-ink)', color:'#fff', overflow:'hidden'}}>
          <ImgPh w="100%" h={120} label="feature banner" dark={true} />
          <div style={{
            position:'absolute', inset:0, padding:'16px 14px',
            display:'flex', flexDirection:'column', justifyContent:'flex-end',
            background:'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2))',
          }}>
            <div className="wf-mono" style={{fontSize:9, color:'#c5c3bc', letterSpacing:'0.1em'}}>FEATURE / 2026</div>
            <div style={{fontSize:15, fontWeight:800, marginTop:2, color:'#fff', lineHeight:1.3, textShadow:'0 2px 6px rgba(0,0,0,0.5)'}}>
              2026年 ラケット新製品まとめ<br/>
              <span style={{fontSize:11, fontWeight:600, opacity:0.85}}>全12モデルを徹底比較</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── ラケット新着 (2カラムグリッド、雑誌的) ── */}
      <div style={{padding:'20px 14px 0'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10}}>
          <div>
            <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>NEW ARRIVAL</div>
            <div style={{fontSize:15, fontWeight:800, letterSpacing:'-0.01em'}}>ラケット · 新着</div>
          </div>
          <span className="wf-mute" style={{fontSize:10.5}}>すべて見る ›</span>
        </div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:10}}>
          {[
            { cat: 'ラケット', ttl: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器', d: '07.20', tag: 'NEW' },
            { cat: 'ラケット', ttl: 'Blade 98 v9 · 打感とコントロールを検証', d: '07.18', tag: '' },
            { cat: 'ラケット', ttl: 'Speed MP 2026 · スピン性能を徹底比較', d: '07.15', tag: 'NEW' },
            { cat: 'ラケット', ttl: 'EZONE 100 (2026) · 初中級者向けの使用感', d: '07.12', tag: '' },
          ].map((c, i) => (
            <div key={i} style={{background:'#fff', border:'1px solid var(--wf-line)'}}>
              <div style={{position:'relative'}}>
                <ImgPh w="100%" h={110} label="racket" />
                {c.tag && (
                  <span style={{
                    position:'absolute', top:6, left:6,
                    background:'var(--wf-ink)', color:'#fff',
                    fontSize:8, fontWeight:800, padding:'2px 5px', letterSpacing:'0.06em',
                  }}>{c.tag}</span>
                )}
              </div>
              <div style={{padding:'7px 8px 9px'}}>
                <div style={{fontSize:9, color:'var(--wf-court)', letterSpacing:'0.06em', fontWeight:700}}>{c.cat}</div>
                <div style={{fontSize:11.5, fontWeight:700, lineHeight:1.35, marginTop:2}}>{c.ttl}</div>
                <div className="wf-num" style={{fontSize:10, color:'var(--wf-mute)', marginTop:5}}>{c.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── シューズ (横スクロール) ── */}
      <div style={{padding:'22px 0 0'}}>
        <div style={{padding:'0 14px', display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10}}>
          <div>
            <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>SHOES</div>
            <div style={{fontSize:15, fontWeight:800}}>シューズ · 注目モデル</div>
          </div>
          <span className="wf-mute" style={{fontSize:10.5}}>すべて ›</span>
        </div>
        <div style={{padding:'0 0 0 14px', display:'flex', gap:10, overflowX:'auto'}}>
          {[
            { cat: 'シューズ', ttl: 'Zoom Vapor Cage 4 · ハードコートで真価を検証' },
            { cat: 'シューズ', ttl: 'Court FF 3 · 軽量モデルの履き心地レビュー' },
            { cat: 'シューズ', ttl: 'Barricade 13 · 耐久性とグリップ力を検証' },
          ].map((c, i) => (
            <div key={i} style={{
              flex:'0 0 140px', background:'#fff', border:'1px solid var(--wf-line)',
              marginRight: i === 2 ? 14 : 0,
            }}>
              <ImgPh w="100%" h={100} label="shoe" />
              <div style={{padding:'7px 8px 9px'}}>
                <div style={{fontSize:9, color:'var(--wf-court)', fontWeight:700, letterSpacing:'0.06em'}}>{c.cat}</div>
                <div style={{fontSize:11, fontWeight:700, lineHeight:1.3, marginTop:2}}>{c.ttl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── アクセスランキング ── */}
      <div style={{padding:'22px 0 0', background:'var(--wf-bg-2)', margin:'22px 0 0', paddingTop:18, paddingBottom:18}}>
        <div style={{padding:'0 14px', marginBottom:10}}>
          <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>ACCESS RANKING · WEEKLY</div>
          <div style={{fontSize:15, fontWeight:800}}>週間アクセスランキング</div>
        </div>
        <div style={{padding:'0 14px'}}>
          {[
            { r: 1, brand: 'BABOLAT', name: 'Pure Aero 98 (2026) 徹底レビュー' },
            { r: 2, brand: 'WILSON', name: 'Blade 98 v9 · 打感を検証' },
            { r: 3, brand: 'NIKE', name: 'Zoom Vapor Cage 4 · ハードコートで真価' },
            { r: 4, brand: 'BABOLAT', name: 'RPM Blast 選び方ガイド' },
            { r: 5, brand: 'YONEX', name: 'EZONE 100 (2026) 打感インプレ' },
          ].map(it => (
            <div key={it.r} style={{
              display:'grid', gridTemplateColumns:'30px 60px 1fr',
              gap:10, padding:'10px 0', alignItems:'center',
              borderBottom:'1px solid var(--wf-line-2)',
            }}>
              <div className="wf-num" style={{
                fontSize:22, fontWeight:800, color: it.r <= 3 ? 'var(--wf-clay)' : 'var(--wf-mute-2)',
                letterSpacing:'-0.03em', lineHeight:1, textAlign:'center',
              }}>{it.r}</div>
              <ImgPh w={60} h={50} label="" />
              <div style={{fontSize:11.5, lineHeight:1.4, minWidth:0}}>
                <div style={{fontSize:9, color:'var(--wf-mute)', fontWeight:700, letterSpacing:'0.06em'}}>{it.brand}</div>
                <div style={{fontWeight:700, marginTop:2}}>{it.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── ブランドから探す ── */}
      <div style={{padding:'22px 14px 20px'}}>
        <div style={{fontSize:14, fontWeight:800, letterSpacing:'-0.01em', borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:10}}>
          ブランドから探す
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:6}}>
          {['BABOLAT', 'WILSON', 'HEAD', 'YONEX', 'PRINCE', 'DUNLOP', 'NIKE', 'ASICS', 'ADIDAS'].map(b => (
            <div key={b} style={{
              border:'1px solid var(--wf-line)', background:'#fff',
              padding:'12px 6px', textAlign:'center',
              fontSize:10.5, fontWeight:800, letterSpacing:'0.04em',
            }}>{b}</div>
          ))}
        </div>
      </div>

      <TabBar active="ホーム" />
    </Phone>
  );
}

Object.assign(window, { ListGearFrame });
