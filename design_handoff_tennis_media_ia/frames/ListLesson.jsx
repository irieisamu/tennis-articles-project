// ListLesson.jsx — 記事一覧：レッスン
// 新着 / 初心者 / フォーム / サーブ / 戦術 / フィジカル / メンタル

function ListLessonFrame() {
  return (
    <Phone>
      <AppBar variant="top" />

      {/* ページヘッダ (雑誌的) */}
      <div style={{padding:'20px 14px 16px', background:'#fff'}}>
        <div className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.08em', marginBottom:6}}>
          LESSON INDEX / SKILL UP
        </div>
        <h1 style={{margin:0, fontSize:26, fontWeight:800, letterSpacing:'-0.02em', lineHeight:1.15}}>
          レッスン
        </h1>
        <div style={{fontSize:12, color:'var(--wf-mute-2)', marginTop:6, fontFamily:'serif', fontStyle:'italic'}}>
          — Improve your game, step by step.
        </div>
      </div>

      {/* サブカテゴリタブ */}
      <div className="wf-gnav" style={{padding:'0 6px'}}>
        {['新着', '初心者', 'フォーム', 'サーブ', '戦術', 'フィジカル', 'メンタル'].map((c, i) => (
          <div key={c} className={'wf-gnav-item' + (i === 0 ? ' on' : '')}>{c}</div>
        ))}
      </div>

      {/* レベル別クイックナビ */}
      <div style={{
        padding:'10px 14px', background:'var(--wf-bg-2)',
        borderBottom:'1px solid var(--wf-line-2)',
      }}>
        <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em', marginBottom:6}}>
          レベルで絞り込む
        </div>
        <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:6}}>
          {[
            { l: '初心者', c: '#5aa070' },
            { l: '中級', c: '#7a5a1d' },
            { l: '上級', c: '#b32c22' },
            { l: 'プロ志望', c: 'var(--wf-ink)' },
          ].map(it => (
            <div key={it.l} style={{
              background:'#fff', border:'1px solid var(--wf-line)',
              padding:'8px 4px', textAlign:'center',
              fontSize:10.5, fontWeight:700,
            }}>
              <div style={{
                width:16, height:4, margin:'0 auto 4px',
                background:it.c,
              }}/>
              {it.l}
            </div>
          ))}
        </div>
      </div>

      {/* ── 今週のおすすめ (フルブリード) ── */}
      <div style={{padding:'16px 14px 0'}}>
        <div className="wf-mono" style={{fontSize:9, color:'var(--wf-court)', letterSpacing:'0.08em', fontWeight:700, marginBottom:6}}>
          ◆ THIS WEEK'S PICK
        </div>
        <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
          <div style={{position:'relative'}}>
            <ImgPh w="100%" h={170} label="hero / スイング写真" />
            <div style={{
              position:'absolute', top:8, left:8,
              background:'var(--wf-court)', color:'#fff',
              fontSize:9, fontWeight:800, padding:'3px 6px', letterSpacing:'0.06em',
            }}>フォーム · 中級〜</div>
            <div style={{
              position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              width:40, height:40, borderRadius:'50%', background:'rgba(0,0,0,0.6)',
              display:'flex', alignItems:'center', justifyContent:'center', color:'#fff',
            }}>{Ico.play}</div>
          </div>
          <div style={{padding:'12px 14px'}}>
            <h2 style={{margin:0, fontSize:15, fontWeight:800, lineHeight:1.4}}>
              スピンをかけるフォアハンド<br/>
              <span style={{fontSize:12, color:'var(--wf-mute)', fontWeight:600}}>手首とラケットヘッドの使い方 4ステップ</span>
            </h2>
            <div style={{
              fontSize:11, color:'var(--wf-mute)', marginTop:6,
              display:'flex', gap:8, alignItems:'center',
            }}>
              <span style={{fontWeight:700, color:'var(--wf-ink)'}}>コーチ 山田 潤</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">5分</span></span>
              <span style={{display:'inline-flex', alignItems:'center', gap:2, marginLeft:'auto'}}>{Ico.eye}<span className="wf-num">8,240</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── 技術別セクション: フォーム ── */}
      <div style={{padding:'22px 0 0'}}>
        <div style={{padding:'0 14px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
          <div>
            <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>FORM</div>
            <div style={{fontSize:15, fontWeight:800, letterSpacing:'-0.01em'}}>フォーム · 上達する打ち方</div>
          </div>
          <span className="wf-mute" style={{fontSize:10.5}}>すべて ›</span>
        </div>

        <div style={{padding:'0 14px'}}>
          {[
            { lvl: '中級', ttl: '両手バックハンド · 体の使い方の基本', coach: '木村 慎', dur: '6分', hasSteps: true },
            { lvl: '初心者', ttl: 'グリップの正しい握り方（イースタン/セミウエスタン）', coach: '田村 玲', dur: '4分', hasSteps: false },
          ].map((l, i) => (
            <div key={i} style={{
              border:'1px solid var(--wf-line)', background:'#fff', marginBottom:10,
            }}>
              <div style={{display:'flex', gap:10, padding:'10px'}}>
                <ImgPh w={110} h={80} label="thumb" />
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', gap:5, alignItems:'center', marginBottom:3}}>
                    <span style={{
                      fontSize:9, fontWeight:800, color:'#fff',
                      background: l.lvl === '初心者' ? '#5aa070' : '#7a5a1d',
                      padding:'1px 5px', letterSpacing:'0.04em',
                    }}>{l.lvl}</span>
                    {l.hasSteps && (
                      <span className="wf-mono" style={{
                        fontSize:9, color:'var(--wf-court)',
                        border:'1px solid var(--wf-court)', padding:'0 4px',
                      }}>STEP × 4</span>
                    )}
                  </div>
                  <div style={{fontSize:12, fontWeight:700, lineHeight:1.4}}>{l.ttl}</div>
                  <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:5, display:'flex', gap:6}}>
                    <span>コーチ {l.coach}</span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">{l.dur}</span></span>
                  </div>
                </div>
              </div>
              {l.hasSteps && (
                <div style={{
                  display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:2,
                  padding:'0 10px 10px',
                }}>
                  {[1,2,3,4].map(n => (
                    <div key={n} style={{position:'relative'}}>
                      <ImgPh w="100%" h={44} label="" />
                      <span style={{
                        position:'absolute', top:2, left:2,
                        background:'var(--wf-ink)', color:'#fff',
                        fontSize:8, fontWeight:700, padding:'0 3px',
                        fontFamily:'var(--wf-font-num)',
                      }}>{n}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ── 戦術 ── */}
      <div style={{padding:'20px 0 0'}}>
        <div style={{padding:'0 14px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
          <div>
            <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>TACTICS</div>
            <div style={{fontSize:15, fontWeight:800}}>戦術 · 試合で使える一手</div>
          </div>
          <span className="wf-mute" style={{fontSize:10.5}}>すべて ›</span>
        </div>
        <div style={{padding:'0 14px'}}>
          {[
            'シングルスで勝つための「ドロップショット」の使いどころ',
            '相手の弱点を突く「サーブ&ボレー」のリズム作り',
            'ダブルスで機能する「フォーメーション I」の基本',
          ].map((t, i) => (
            <div key={i} className="wf-row" style={{alignItems:'center'}}>
              <div style={{
                width:36, height:36, background:'var(--wf-court-soft)',
                border:'1px solid var(--wf-court)',
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>
                <svg width="20" height="14" viewBox="0 0 20 14">
                  <rect x="1" y="1" width="18" height="12" fill="#a8c5ad" stroke="#fff" strokeWidth="1"/>
                  <line x1="10" y1="1" x2="10" y2="13" stroke="#fff" strokeWidth="0.8"/>
                  <line x1="1" y1="7" x2="19" y2="7" stroke="#333" strokeWidth="0.8" strokeDasharray="1 1"/>
                </svg>
              </div>
              <div style={{flex:1, fontSize:12, fontWeight:600, lineHeight:1.4}}>{t}</div>
              <span className="wf-mute">{Ico.chev}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── コーチから探す ── */}
      <div style={{padding:'22px 14px 20px'}}>
        <div style={{fontSize:14, fontWeight:800, letterSpacing:'-0.01em', borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:10}}>
          コーチから探す
        </div>
        <div style={{padding:'0', display:'flex', gap:10, overflowX:'auto'}}>
          {[
            { n: '山田 潤', tag: 'フォーム', c: '#e5e2d9' },
            { n: '木村 慎', tag: '戦術', c: '#e5e2d9' },
            { n: '田村 玲', tag: '初心者', c: '#e5e2d9' },
            { n: '佐藤 大河', tag: 'フィジカル', c: '#e5e2d9' },
          ].map((cc, i) => (
            <div key={i} style={{
              flex:'0 0 90px', textAlign:'center',
            }}>
              <div style={{
                width:70, height:70, borderRadius:'50%', background:cc.c,
                margin:'0 auto', border:'1px solid var(--wf-line)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:20, color:'var(--wf-mute)',
              }}>{cc.n.charAt(0)}</div>
              <div style={{fontSize:11, fontWeight:700, marginTop:6}}>{cc.n}</div>
              <div style={{fontSize:9, color:'var(--wf-court)', fontWeight:700, marginTop:1}}>{cc.tag}</div>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="ホーム" />
    </Phone>
  );
}

Object.assign(window, { ListLessonFrame });
