// LP.jsx — 特集LP：選手サポートページ (スマホ専用)
// 参考: https://news.tennis365.net/news/feature/players/test202607/
// TOPの「特集」カードや選手名タップから遷移する、単発の没入型キャンペーンLP。
// 通常のGNav/TabBarから離脱し、ダーク基調+アクセント(クレー)の専用トンマナで
// 選手のストーリー・サポート企業を伝える構成。AppBar(戻る)のみ共通。

function LPSection({ label, title, children, pad = '28px 20px' }) {
  return (
    <div style={{padding: pad}}>
      {label && (
        <div className="wf-mono" style={{fontSize:10, color:'var(--wf-clay)', letterSpacing:'0.12em', fontWeight:700, marginBottom:8}}>
          {label}
        </div>
      )}
      {title && (
        <h2 style={{margin:'0 0 12px', color:'#fff', fontSize:19, fontWeight:800, lineHeight:1.5, letterSpacing:'-0.01em'}}>
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

function LPFrame() {
  return (
    <Phone>
      <AppBar variant="detail" />
      <div style={{padding:'6px 14px', background:'var(--wf-bg-2)', borderBottom:'1px solid var(--wf-line-2)'}}>
        <AnnoTag>特集LP・GNav/TabBarなし・独自トンマナ(ダーク+クレー)で没入表示</AnnoTag>
      </div>

      <div style={{background:'var(--wf-ink)'}}>

        {/* ── 1. ヒーロー ── */}
        <div style={{position:'relative'}}>
          <ImgPh w="100%" h={380} label="MAIN VISUAL / 選手プレー写真" dark />
          <div style={{
            position:'absolute', left:0, right:0, bottom:0, top:0,
            background:'linear-gradient(to top, rgba(15,15,15,0.95), rgba(15,15,15,0.15) 55%, rgba(15,15,15,0.5))',
          }} />
          <div style={{position:'absolute', left:0, right:0, bottom:0, padding:'0 20px 22px'}}>
            <div className="wf-mono" style={{fontSize:10, color:'var(--wf-clay)', letterSpacing:'0.14em', fontWeight:700, marginBottom:10}}>
              ◆ SPECIAL FEATURE PAGE
            </div>
            <h1 style={{margin:0, color:'#fff', fontSize:42, fontWeight:800, lineHeight:0.95, letterSpacing:'-0.02em'}}>
              TOKITO<br/>ODA
            </h1>
            <div style={{fontSize:15, color:'#e5e2d9', fontWeight:700, marginTop:10, letterSpacing:'0.04em'}}>
              小田 凱人
            </div>
            <div style={{fontSize:12, color:'#c5c3bc', marginTop:12, lineHeight:1.7}}>
              車いすテニスで世界の頂点をつかんだ、史上最年少王者の
              挑戦と、その夢を支える人々の物語。
            </div>
          </div>
        </div>

        {/* ── 2. スタッツ帯 ── */}
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', borderTop:'1px solid #3a3a38', borderBottom:'1px solid #3a3a38'}}>
          {[
            { n: '1', u: '位', d: '車いすテニス世界ランキング※' },
            { n: '17', u: '歳', d: '史上最年少 世界1位到達※' },
            { n: '15', u: '社', d: '夢を支えるスポンサー' },
          ].map((s, i) => (
            <div key={i} style={{
              textAlign:'center', padding:'20px 8px',
              borderLeft: i > 0 ? '1px solid #3a3a38' : 0,
            }}>
              <div style={{color:'var(--wf-clay)', fontWeight:800}}>
                <span className="wf-num" style={{fontSize:26}}>{s.n}</span>
                <span style={{fontSize:12, marginLeft:2}}>{s.u}</span>
              </div>
              <div style={{fontSize:10, color:'#c5c3bc', marginTop:6, lineHeight:1.4}}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* ── 3. 中間フルブリード写真 ── */}
        <ImgPh w="100%" h={140} label="コート写真 (区切り)" dark />

        {/* ── 4. メッセージ ── */}
        <LPSection label="MESSAGE">
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:22, fontWeight:800, color:'#fff', letterSpacing:'0.08em', marginBottom:14}}>
              まだ、道半ば。
            </div>
            <div style={{fontSize:12, color:'#c5c3bc', lineHeight:1.9}}>
              誰もその名を知らなかった頃から、彼の「頂点に立つ」という<br/>
              夢を信じ続けた人たちがいます。応援してくれる全ての<br/>
              人へ、感謝を込めて。
            </div>
          </div>
        </LPSection>

        {/* ── 5. 最新ニュース ── */}
        <LPSection label="NEWS" title="最新ニュース">
          <div style={{display:'flex', flexDirection:'column', gap:12}}>
            {[
              { d: '2026.08.03', ttl: '【ダミー】小田凱人、○○オープンで大会3連覇を達成' },
              { d: '2026.07.20', ttl: '【ダミー】新スポンサーとの契約を発表 ─ 支援の輪がさらに拡大' },
              { d: '2026.07.02', ttl: '【ダミー】専属コーチが語る、車いすテニス特有のトレーニング' },
            ].map((n, i) => (
              <div key={i} style={{display:'flex', gap:10, alignItems:'center'}}>
                <ImgPh w={92} h={64} label="news" dark />
                <div style={{flex:1, minWidth:0}}>
                  <div className="wf-num" style={{fontSize:10, color:'var(--wf-clay)'}}>{n.d}</div>
                  <div style={{fontSize:12, fontWeight:700, color:'#fff', lineHeight:1.5, marginTop:3}}>{n.ttl}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{
            marginTop:16, border:'1px solid var(--wf-clay)', color:'var(--wf-clay)',
            textAlign:'center', padding:'12px', fontSize:12, fontWeight:700, letterSpacing:'0.04em',
          }}>
            tennis365で全ての記事を見る
          </div>
        </LPSection>

        {/* ── 6. つなぎ (ハッチ背景の区切り文) ── */}
        <div style={{
          padding:'40px 20px', textAlign:'center',
          background: 'repeating-linear-gradient(135deg, #1a1a18 0 8px, #171715 8px 16px)',
        }}>
          <div style={{fontSize:16, fontWeight:800, color:'#e5e2d9', letterSpacing:'0.04em'}}>
            応援してくれる、すべての人へ。
          </div>
          <div style={{width:32, height:2, background:'var(--wf-clay)', margin:'14px auto 0'}}/>
        </div>

        {/* ── 7. 経歴年表 ── */}
        <LPSection label="PROFILE / HISTORY">
          <div style={{display:'flex', flexDirection:'column'}}>
            {[
              { y: '2019', t: '13歳、ジュニア世界大会を制する', d: 'まだその名を知る人も少なかった頃、若くして頭角を現す。' },
              { y: '2023', t: '17歳、史上最年少で世界ランキング1位に', d: '四大大会を制覇し、車いすテニス界の頂点に立つ。' },
              { y: '2024', t: 'パリ・パラリンピック 金メダル', d: 'シングルスで金メダルを獲得し、名実ともに世界一に。' },
              { y: '2026', t: '年間グランドスラムに挑戦', d: '' },
            ].map((h, i, arr) => (
              <div key={i} style={{
                display:'grid', gridTemplateColumns:'64px 1fr', gap:14,
                padding:'16px 0', borderTop: i > 0 ? '1px solid #3a3a38' : 0,
              }}>
                <div className="wf-num" style={{fontSize:22, fontWeight:800, color:'var(--wf-clay)'}}>{h.y}</div>
                <div>
                  <div style={{fontSize:13, fontWeight:800, color:'#fff', lineHeight:1.4}}>{h.t}</div>
                  {h.d && <div style={{fontSize:11, color:'#c5c3bc', marginTop:6, lineHeight:1.6}}>{h.d}</div>}
                </div>
              </div>
            ))}
          </div>
          <div style={{fontSize:9.5, color:'var(--wf-mute-2)', marginTop:14, textAlign:'center', lineHeight:1.6}}>
            ※年表の内容・記録は公開前にファクトチェックのうえ確定します。
          </div>
        </LPSection>

        {/* ── 8. 中間フルブリード写真 + コピー ── */}
        <div style={{position:'relative'}}>
          <ImgPh w="100%" h={130} label="コート写真 (区切り)" dark />
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center',
            padding:'0 20px', background:'linear-gradient(to right, rgba(15,15,15,0.75), rgba(15,15,15,0.1))',
          }}>
            <div style={{fontSize:15, fontWeight:800, color:'#fff'}}>まだ、頂点は通過点。</div>
          </div>
        </div>

        {/* ── 9. スポンサーストーリー ── */}
        <LPSection label="SPONSOR STORY" title={<>なぜ、私たちは<br/>小田凱人を支えるのか</>}>
          <div style={{fontSize:11.5, color:'#c5c3bc', lineHeight:1.8, marginBottom:16}}>
            誰もその名を知らなかった頃から、彼の「頂点に立つ」という夢を
            信じた企業がありました。支援の裏側にある物語を、
            tennis365編集部が取材します。
          </div>

          {[
            { vol: 'VOL.01 / 所属先', ttl: '【ダミー】「彼の車いすを作り続ける」職人たちの矜持', done: true },
            { vol: 'VOL.02 / COMING SOON', ttl: '【ダミー】車いすテニスの環境そのものを支える ─ 知られざるコートへの投資', done: false },
          ].map((s, i) => (
            <div key={i} style={{border:'1px solid #3a3a38', marginBottom:12}}>
              {s.done ? (
                <div style={{background:'#fff', height:90, display:'flex', alignItems:'center', justifyContent:'center'}}>
                  <span className="wf-mono" style={{fontSize:11, color:'var(--wf-mute)'}}>SPONSOR LOGO</span>
                </div>
              ) : (
                <ImgPh w="100%" h={90} label="MAIN VISUAL" dark />
              )}
              <div style={{padding:14}}>
                <span style={{
                  display:'inline-block', fontSize:9, fontWeight:700, color:'var(--wf-clay)',
                  border:'1px solid var(--wf-clay)', padding:'2px 6px', letterSpacing:'0.04em', marginBottom:8,
                }}>{s.vol}</span>
                <div style={{fontSize:12.5, fontWeight:700, color:'#fff', lineHeight:1.5}}>{s.ttl}</div>
              </div>
            </div>
          ))}

          <div style={{
            border:'1px solid var(--wf-clay)', color:'var(--wf-clay)',
            textAlign:'center', padding:'12px', fontSize:12, fontWeight:700,
          }}>
            VOL.01 のストーリーを読む ›
          </div>
        </LPSection>

        {/* ── 10. スポンサーロゴ一覧 ── */}
        <LPSection label="SPONSORS">
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', border:'1px solid #3a3a38'}}>
            {Array.from({length: 12}, (_, i) => (
              <div key={i} style={{
                height:64, display:'flex', alignItems:'center', justifyContent:'center',
                borderRight: (i % 3 !== 2) ? '1px solid #3a3a38' : 0,
                borderBottom: i < 9 ? '1px solid #3a3a38' : 0,
              }}>
                <span className="wf-mono" style={{fontSize:10, color:'#7a7873'}}>LOGO {String(i+1).padStart(2,'0')}</span>
              </div>
            ))}
          </div>
          <div style={{fontSize:9.5, color:'var(--wf-mute-2)', marginTop:10, textAlign:'center'}}>
            ※ロゴ・掲載順・リンク先は各社確認のうえ確定します。
          </div>
        </LPSection>

        {/* ── 11. メッセージ動画 ── */}
        <LPSection label="MOVIE" title="メッセージ動画">
          <div style={{position:'relative'}}>
            <ImgPh w="100%" h={200} label="動画サムネイル" dark />
            <div style={{
              position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
              width:52, height:52, borderRadius:'50%', border:'2px solid var(--wf-clay)',
              display:'flex', alignItems:'center', justifyContent:'center', color:'var(--wf-clay)',
              background:'rgba(15,15,15,0.5)',
            }}>{Ico.play}</div>
          </div>
          <div style={{fontSize:11, color:'#c5c3bc', marginTop:10, textAlign:'center'}}>
            選手・スポンサー対談 / メッセージ動画を掲載予定
          </div>
        </LPSection>

        {/* ── 12. クロージング ── */}
        <div style={{padding:'32px 20px 28px', textAlign:'center'}}>
          <div style={{fontSize:12, color:'#c5c3bc', lineHeight:1.9}}>
            彼の挑戦を、いちばん近くで伝え続ける。そして、その夢を<br/>
            支えるすべての人へ、感謝を込めて。
          </div>
          <div style={{width:32, height:2, background:'var(--wf-clay)', margin:'20px auto'}}/>
          <div style={{fontSize:26, fontWeight:800, color:'#fff', letterSpacing:'-0.01em'}}>
            ROAD TO THE <span style={{color:'var(--wf-clay)'}}>TOP.</span>
          </div>
          <div style={{fontSize:13, color:'var(--wf-clay)', fontWeight:700, marginTop:10}}>
            #がんばれ小田凱人
          </div>
          <div style={{
            marginTop:20, border:'1px solid #fff', color:'#fff',
            padding:'12px', fontSize:12, fontWeight:700,
          }}>
            tennis365 トップページへ
          </div>
        </div>

        {/* ── フッタ注記 ── */}
        <div style={{padding:'16px 20px 28px', borderTop:'1px solid #3a3a38', textAlign:'center'}}>
          <div style={{fontSize:9.5, color:'var(--wf-mute-2)', lineHeight:1.7}}>
            Presented by tennis365.net ｜ 本ページは制作中のイメージです。<br/>
            記録・記事・画像はすべて確定前の仮素材を含みます。
          </div>
        </div>
      </div>
    </Phone>
  );
}

Object.assign(window, { LPFrame });
