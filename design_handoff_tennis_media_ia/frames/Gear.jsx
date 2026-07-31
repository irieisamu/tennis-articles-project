// Gear.jsx — 記事詳細：テニス用品 (ギア)
// ヒーロー / スペック表 / 縦積みカード比較(差分ハイライト) / 固定購入CTA

function GearFrame() {
  return (
    <div style={{position:'relative'}}>
      <Phone>
        <AppBar variant="detail" />
        <Crumb items={['TOP', 'テニス用品', 'ラケット']} />

        {/* ── ヒーロー画像 ── */}
        <div style={{padding:'12px 14px 0'}}>
          <div style={{position:'relative'}}>
            <ImgPh w="100%" h={210} label="HERO / ラケット物撮り" />
            <span style={{
              position:'absolute', top:8, left:8,
              background:'#fff', border:'1px solid var(--wf-ink)',
              fontSize:9, fontWeight:800, padding:'2px 6px',
              letterSpacing:'0.06em',
            }}>NEW MODEL / 2026</span>
            <AnnoTag style={{position:'absolute', top:8, right:8}}>ヒーロー画像=部品化</AnnoTag>
          </div>
        </div>

        {/* ── 商品概要 ── */}
        <div style={{padding:'14px 14px 0'}}>
          <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:6}}>
            <span className="wf-cat wf-cat-gear">GEAR</span>
            <span className="wf-mute" style={{fontSize:10}}>ラケット / レビュー</span>
          </div>
          <div style={{fontSize:10, color:'var(--wf-mute)', letterSpacing:'0.06em', fontWeight:700}}>BABOLAT</div>
          <h1 style={{fontSize:18, fontWeight:800, margin:'2px 0 8px', letterSpacing:'-0.01em'}}>
            Pure Aero 98 (2026) 徹底レビュー<br/>
            <span style={{fontSize:13, color:'var(--wf-mute)', fontWeight:600}}>アルカラスの武器、あなたに合うか</span>
          </h1>
          <div style={{
            display:'flex', gap:6, alignItems:'center',
            fontSize:11, color:'var(--wf-mute)',
            padding:'6px 0 10px', borderTop:'1px solid var(--wf-line-2)', borderBottom:'1px solid var(--wf-line-2)',
          }}>
            <span className="wf-num">2026.07.20</span>
            <span>·</span>
            <span>Reviewer: 鈴木 亮太</span>
            <span style={{marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:2}}>{Ico.eye}<span className="wf-num">12,410</span></span>
          </div>
        </div>

        {/* ── リード文 ── */}
        <div style={{padding:'14px 14px 0', fontSize:13.5, lineHeight:1.85}}>
          <p style={{margin:0}}>
            アルカラスの世界制覇を支えた名器「Pure Aero」。2026年モデルは98インチのフェイスサイズに再挑戦し、コントロール性能を大幅に向上。実際にプレーヤー4名でテストした結果をレポートする。
          </p>
        </div>

        {/* ── スペックカード (パーツ化) ── */}
        <div style={{margin:'16px 14px 0', border:'1px solid var(--wf-ink)'}}>
          <div style={{
            background:'var(--wf-ink)', color:'#fff',
            padding:'6px 10px', fontSize:10, letterSpacing:'0.06em', fontWeight:800,
            display:'flex', justifyContent:'space-between',
          }}>
            <span>SPECIFICATION</span>
            <AnnoTag style={{color:'#fff', background:'transparent', border:'1px solid #ffb190'}}>スプシ貼付→自動生成</AnnoTag>
          </div>
          <div style={{background:'#fff'}}>
            {[
              ['フェイスサイズ', '98 sq.in.'],
              ['重量', '305g (平均)'],
              ['バランス', '320mm'],
              ['フレーム厚', '23-26-23mm'],
              ['ストリングパターン', '16×20'],
              ['グリップサイズ', 'G2 / G3'],
              ['素材', 'Graphite + FSI Power'],
              ['価格 (税込)', '¥46,200'],
            ].map(([k, v], i) => (
              <div key={k} style={{
                display:'grid', gridTemplateColumns:'110px 1fr',
                padding:'7px 10px', borderBottom: i === 7 ? 0 : '1px solid var(--wf-line-2)',
                fontSize:11.5,
              }}>
                <span className="wf-mute" style={{fontSize:11}}>{k}</span>
                <span className="wf-num" style={{fontWeight:700}}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── レーダー的なプロパティ表示 ── */}
        <div style={{margin:'12px 14px 0', padding:'12px', background:'var(--wf-bg-2)', border:'1px solid var(--wf-line)'}}>
          <div style={{fontSize:11, fontWeight:800, marginBottom:8, letterSpacing:'0.04em'}}>PERFORMANCE</div>
          {[
            ['パワー', 4],
            ['スピン', 5],
            ['コントロール', 4],
            ['操作性', 3],
            ['安定性', 4],
          ].map(([k, v]) => (
            <div key={k} style={{display:'grid', gridTemplateColumns:'80px 1fr 30px', alignItems:'center', gap:8, padding:'3px 0', fontSize:11}}>
              <span className="wf-mute">{k}</span>
              <div style={{display:'flex', gap:3}}>
                {[1,2,3,4,5].map(n => (
                  <div key={n} style={{
                    flex:1, height:8,
                    background: n <= v ? 'var(--wf-court)' : 'var(--wf-line)',
                  }}/>
                ))}
              </div>
              <span className="wf-num" style={{textAlign:'right', fontWeight:700}}>{v}/5</span>
            </div>
          ))}
        </div>

        {/* ── メリット / デメリット ── */}
        <div style={{padding:'16px 14px 0', display:'grid', gap:8}}>
          <div style={{border:'1px solid var(--wf-court)', padding:'10px 12px', background:'var(--wf-court-soft)'}}>
            <div style={{fontSize:11, fontWeight:800, color:'var(--wf-court)', marginBottom:6, letterSpacing:'0.04em'}}>◎ ここが良い</div>
            <ul style={{margin:0, padding:'0 0 0 16px', fontSize:12, lineHeight:1.7}}>
              <li>厚めのフレームで振り抜きが軽く、スピン量が明らかに増える</li>
              <li>98インチとは思えないスイートスポットの広さ</li>
            </ul>
          </div>
          <div style={{border:'1px solid var(--wf-clay)', padding:'10px 12px', background:'var(--wf-clay-soft)'}}>
            <div style={{fontSize:11, fontWeight:800, color:'var(--wf-clay)', marginBottom:6, letterSpacing:'0.04em'}}>△ 気になる点</div>
            <ul style={{margin:0, padding:'0 0 0 16px', fontSize:12, lineHeight:1.7}}>
              <li>フラット系ショットはやや弾道が上がりやすい</li>
              <li>コントロール重視の上級者にはグリップの調整が必要</li>
            </ul>
          </div>
        </div>

        {/* ── 縦積みカード比較 (差分ハイライト) ── */}
        <div style={{margin:'20px 14px 0'}}>
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:6}}>
            <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8}}>類似モデルと比較</div>
            <AnnoTag>差分ハイライト</AnnoTag>
          </div>
          <div style={{fontSize:10.5, color:'var(--wf-mute)', marginBottom:8, lineHeight:1.5}}>
            3モデルの主要スペックを縦積みで比較。各項目の <b style={{color:'var(--wf-clay)'}}>最高値</b> と <b style={{color:'var(--wf-court)'}}>本モデル</b> を自動でハイライト。
          </div>

          {[
            {
              brand: 'BABOLAT', name: 'Pure Aero 98 (2026)',
              highlight: true,
              specs: [ ['重量', '305g', false], ['スピン', '5/5', true], ['パワー', '4/5', false], ['コントロール', '4/5', false] ],
            },
            {
              brand: 'WILSON', name: 'Blade 98 v9',
              highlight: false,
              specs: [ ['重量', '305g', false], ['スピン', '3/5', false], ['パワー', '3/5', false], ['コントロール', '5/5', true] ],
            },
            {
              brand: 'HEAD', name: 'Speed MP 2026',
              highlight: false,
              specs: [ ['重量', '300g', true], ['スピン', '4/5', false], ['パワー', '5/5', true], ['コントロール', '4/5', false] ],
            },
          ].map((card, i) => (
            <div key={i} style={{
              border: card.highlight ? '2px solid var(--wf-court)' : '1px solid var(--wf-line)',
              background:'#fff', marginBottom:8, position:'relative',
            }}>
              {card.highlight && (
                <div style={{
                  position:'absolute', top:-1, right:-1,
                  background:'var(--wf-court)', color:'#fff',
                  fontSize:9, fontWeight:800, padding:'2px 6px', letterSpacing:'0.04em',
                }}>本レビュー</div>
              )}
              <div style={{display:'flex', gap:10, padding:'10px 10px 8px'}}>
                <ImgPh w={60} h={60} label="racket" />
                <div style={{flex:1, minWidth:0}}>
                  <div style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.06em', fontWeight:700}}>{card.brand}</div>
                  <div style={{fontSize:12, fontWeight:800, lineHeight:1.3}}>{card.name}</div>
                </div>
              </div>
              <div style={{
                display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
                borderTop:'1px solid var(--wf-line-2)',
              }}>
                {card.specs.map(([k, v, best], j) => (
                  <div key={j} style={{
                    padding:'6px 4px',
                    borderRight: j < 3 ? '1px solid var(--wf-line-2)' : 0,
                    background: best ? 'var(--wf-clay-soft)' : 'transparent',
                    textAlign:'center',
                  }}>
                    <div className="wf-mute" style={{fontSize:9.5}}>{k}</div>
                    <div className="wf-num" style={{
                      fontSize:12, fontWeight:800,
                      color: best ? 'var(--wf-clay)' : 'inherit',
                    }}>{v}{best && <span style={{fontSize:8, marginLeft:2}}>★</span>}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── おすすめユーザー ── */}
        <div style={{padding:'18px 14px 0'}}>
          <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>こんな人におすすめ</div>
          <div style={{fontSize:12, lineHeight:1.8, padding:'0 0 0 10px'}}>
            ✓ トップスピンで攻めるベースライナー<br/>
            ✓ 中〜上級者、スイングスピードに自信がある方<br/>
            ✓ 現行Pure Aero 100からのステップアップを検討中の方
          </div>
        </div>

        <div style={{height: 90}} /> {/* CTA分の余白 */}
        <TabBar active="ホーム" />
      </Phone>

      {/* ── 固定購入CTA (画面下部固定) ── */}
      <div style={{
        position:'absolute', left:8, right:8, bottom: 68,
        background:'var(--wf-ink)', color:'#fff',
        border:'1px solid var(--wf-ink)',
        padding:'8px 10px',
        display:'flex', gap:10, alignItems:'center',
        boxShadow:'0 -8px 20px rgba(0,0,0,0.15)',
      }}>
        <div style={{flex:1}}>
          <div style={{fontSize:9, color:'var(--wf-mute-2)', letterSpacing:'0.06em', fontWeight:700}}>¥46,200 · 税込 / 在庫あり</div>
          <div style={{fontSize:11, fontWeight:700}}>Pure Aero 98 (2026)</div>
        </div>
        <button style={{
          background:'var(--wf-clay)', color:'#fff', border:0,
          fontSize:11, fontWeight:800, padding:'8px 14px', display:'inline-flex', alignItems:'center', gap:5,
        }}>{Ico.cart}<span>今すぐEC で購入</span></button>
      </div>
      <div style={{
        position:'absolute', left:20, bottom: 132,
      }}>
        <AnnoTag>スクロール追従・CMSでON/OFF</AnnoTag>
      </div>
    </div>
  );
}

Object.assign(window, { GearFrame });
