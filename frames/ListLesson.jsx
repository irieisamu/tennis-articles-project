// ListLesson.jsx — 記事一覧：レッスン
// 新着 / サーブ / フォアハンド / バックハンド / ボレー / スマッシュ / フットワーク

function ListLessonFrame() {
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="レッスン" />

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

      {/* サブカテゴリタブ (ショット別) */}
      <div className="wf-gnav" style={{padding:'0 6px'}}>
        {['新着', 'サーブ', 'フォアハンド', 'バックハンド', 'ボレー', 'スマッシュ', 'フットワーク'].map((c, i) => (
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
              <span style={{
                fontWeight:700, color:'var(--wf-court)', textDecoration:'underline',
                textDecorationStyle:'dotted', textUnderlineOffset:2,
                display:'inline-flex', alignItems:'center', gap:2,
              }}>コーチ 山田 潤 {Ico.chev}</span>
              <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">5分</span></span>
              <span style={{display:'inline-flex', alignItems:'center', gap:2, marginLeft:'auto'}}>{Ico.eye}<span className="wf-num">8,240</span></span>
            </div>
          </div>
        </div>
      </div>

      {/* ── ショット別セクション (タブのカテゴリに合わせた記事分け) ── */}
      {[
        { key: 'SERVE', title: 'サーブ', lvl: '中級', ttl: 'キックサーブの基本 · トスと打点でスピンを作る', coach: '木村 慎', dur: '6分', hasSteps: true },
        { key: 'FOREHAND', title: 'フォアハンド', lvl: '初心者', ttl: 'アプローチショットで踏み込むフォアハンド', coach: '山田 潤', dur: '5分', hasSteps: false },
        { key: 'BACKHAND', title: 'バックハンド', lvl: '中級', ttl: '両手バックハンド · 体の使い方の基本', coach: '田村 玲', dur: '6分', hasSteps: false },
        { key: 'VOLLEY', title: 'ボレー', lvl: '初心者', ttl: 'ファーストボレーを安定させる面の作り方', coach: '佐藤 大河', dur: '4分', hasSteps: false },
        { key: 'SMASH', title: 'スマッシュ', lvl: '上級', ttl: '追い込まれても決めるスマッシュのステップ', coach: '木村 慎', dur: '5分', hasSteps: true },
        { key: 'FOOTWORK', title: 'フットワーク', lvl: '初心者', ttl: 'スプリットステップで一歩目を速くする', coach: '山田 潤', dur: '7分', hasSteps: false },
      ].map((sec, si) => (
        <div key={sec.key} style={{padding: si === 0 ? '22px 0 0' : '20px 0 0'}}>
          <div style={{padding:'0 14px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
            <div>
              <div className="wf-mono" style={{fontSize:9, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>{sec.key}</div>
              <div style={{fontSize:15, fontWeight:800, letterSpacing:'-0.01em'}}>{sec.title}</div>
            </div>
            <span className="wf-mute" style={{fontSize:10.5}}>すべて ›</span>
          </div>
          <div style={{padding:'0 14px'}}>
            <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
              <div style={{display:'flex', gap:10, padding:'10px'}}>
                <ImgPh w={110} h={80} label="thumb" />
                <div style={{flex:1, minWidth:0}}>
                  <div style={{display:'flex', gap:5, alignItems:'center', marginBottom:3}}>
                    <span style={{
                      fontSize:9, fontWeight:800, color:'#fff',
                      background: sec.lvl === '初心者' ? '#5aa070' : sec.lvl === '上級' ? '#b32c22' : '#7a5a1d',
                      padding:'1px 5px', letterSpacing:'0.04em',
                    }}>{sec.lvl}</span>
                    {sec.hasSteps && (
                      <span className="wf-mono" style={{
                        fontSize:9, color:'var(--wf-court)',
                        border:'1px solid var(--wf-court)', padding:'0 4px',
                      }}>STEP × 4</span>
                    )}
                  </div>
                  <div style={{fontSize:12, fontWeight:700, lineHeight:1.4}}>{sec.ttl}</div>
                  <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:5, display:'flex', gap:6, alignItems:'center'}}>
                    <span style={{
                      color:'var(--wf-court)', fontWeight:700, textDecoration:'underline',
                      textDecorationStyle:'dotted', textUnderlineOffset:2,
                      display:'inline-flex', alignItems:'center', gap:2,
                    }}>コーチ {sec.coach} {Ico.chev}</span>
                    <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">{sec.dur}</span></span>
                  </div>
                </div>
              </div>
              {sec.hasSteps && (
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
          </div>
        </div>
      ))}

      {/* ── 新着 · YouTube Shorts (複数コンテンツ横スクロール) ── */}
      <div style={{padding:'22px 0 0'}}>
        <div style={{padding:'0 14px', marginBottom:10, display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
          <div style={{display:'flex', alignItems:'center', gap:6}}>
            {Ico.youtube}
            <div style={{fontSize:14, fontWeight:800, letterSpacing:'-0.01em'}}>新着 Shorts</div>
          </div>
          <span className="wf-mute" style={{fontSize:10.5, display:'inline-flex', alignItems:'center', gap:2}}>すべて見る <span style={{fontSize:9}}>›</span></span>
        </div>
        <div style={{padding:'0 0 0 14px', display:'flex', gap:8, overflowX:'auto'}}>
          {[
            { ttl: 'トスが安定しない人へ · サーブ改善3秒Tips', ch: 'コーチ 山田 潤', views: '12.4万' },
            { ttl: '重心移動でフォアハンドが変わる', ch: 'コーチ 木村 慎', views: '8.1万' },
            { ttl: 'ダブルフォルトを減らす1つのコツ', ch: 'コーチ 田村 玲', views: '5.6万' },
            { ttl: '安定するバックハンドの握り方', ch: 'コーチ 佐藤 大河', views: '3.9万' },
          ].map((s, i, arr) => (
            <div key={i} style={{flex:'0 0 128px', marginRight: i === arr.length - 1 ? 14 : 0}}>
              <div style={{position:'relative'}}>
                <ImgPh w={128} h={228} label="Shorts" />
                <div style={{position:'absolute', top:6, left:6}}>{Ico.youtube}</div>
                <div style={{
                  position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                  width:34, height:34, borderRadius:'50%', background:'rgba(0,0,0,0.55)',
                  display:'flex', alignItems:'center', justifyContent:'center', color:'#fff',
                }}>{Ico.play}</div>
                <div style={{
                  position:'absolute', left:0, right:0, bottom:0, padding:'20px 7px 7px',
                  background:'linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))',
                }}>
                  <div style={{fontSize:10, fontWeight:700, color:'#fff', lineHeight:1.3}}>{s.ttl}</div>
                </div>
              </div>
              <div style={{fontSize:9, color:'var(--wf-mute)', marginTop:4, display:'flex', alignItems:'center', gap:3}}>
                {Ico.eye}<span className="wf-num">{s.views}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── コーチ紹介 (コーチページへの動線 · 縦積み) ── */}
      <div style={{padding:'22px 14px 20px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:10}}>
          <div style={{fontSize:14, fontWeight:800, letterSpacing:'-0.01em', borderLeft:'3px solid var(--wf-court)', paddingLeft:8}}>
            コーチ紹介
          </div>
          <span className="wf-mute" style={{fontSize:10.5, display:'inline-flex', alignItems:'center', gap:2}}>コーチ一覧 <span style={{fontSize:9}}>›</span></span>
        </div>
        <div style={{fontSize:10.5, color:'var(--wf-mute)', marginBottom:12, lineHeight:1.5}}>
          気になるコーチのページから、担当レッスンをまとめて受講できます
        </div>

        {[
          {
            n: '山田 潤', tag: 'サーブ', c: '#e5e2d9', lessons: 6, articleCount: 12,
            bio: '元プロツアー選手。引退後は指導歴10年以上、トスの安定とフォーム分析を軸にしたサーブ指導を得意とする。',
            articles: [
              { ttl: 'フラットサーブの正しい振り抜き方', dur: '4分' },
              { ttl: 'キックサーブでスピンをかけるコツ', dur: '6分' },
            ],
            sessions: [
              { ttl: 'サーブ集中レッスン(個人)', date: '8/16(日) 10:00〜11:00', place: '松濤テニスクラブ(渋谷区)' },
              { ttl: 'サーブ集中レッスン(グループ)', date: '8/23(日) 14:00〜15:30', place: 'アリーナ立川テニスコート' },
            ],
          },
          {
            n: '木村 慎', tag: 'フォアハンド', c: '#e5e2d9', lessons: 4, articleCount: 9,
            bio: '学生時代は全国大会ベスト8。現在はジュニアからシニアまで幅広く指導し、体重移動と打点作りの改善を専門とする。',
            articles: [
              { ttl: 'アプローチショットで踏み込むフォアハンド', dur: '5分' },
              { ttl: 'クロスラリーを制する深さの出し方', dur: '6分' },
            ],
            sessions: [
              { ttl: 'フォアハンド強化レッスン(個人)', date: '8/17(月) 19:00〜20:00', place: '駒沢オリンピック公園テニスコート' },
              { ttl: 'フォアハンド強化レッスン(グループ)', date: '8/24(月) 19:00〜20:30', place: '世田谷テニスクラブ' },
            ],
          },
          {
            n: '田村 玲', tag: 'バックハンド', c: '#e5e2d9', lessons: 5, articleCount: 10,
            bio: '両手・片手どちらの指導も可能。基礎から見直すレッスンに定評があり、初心者からの支持が厚い。',
            articles: [
              { ttl: '両手バックハンド · 体の使い方の基本', dur: '6分' },
              { ttl: '片手バックハンドのテイクバック', dur: '5分' },
            ],
            sessions: [
              { ttl: 'バックハンド基礎レッスン(個人)', date: '8/18(火) 10:00〜11:00', place: '光が丘公園テニスコート' },
              { ttl: 'バックハンド基礎レッスン(グループ)', date: '8/25(火) 10:00〜11:30', place: '松濤テニスクラブ(渋谷区)' },
            ],
          },
          {
            n: '佐藤 大河', tag: 'フットワーク', c: '#e5e2d9', lessons: 3, articleCount: 6,
            bio: 'フィジカルトレーナー資格を持つ元実業団選手。試合で疲れない footwork の作り方を実技中心で指導する。',
            articles: [
              { ttl: 'スプリットステップで一歩目を速くする', dur: '7分' },
              { ttl: 'サイドステップとクロスステップの使い分け', dur: '5分' },
            ],
            sessions: [
              { ttl: 'フットワーク強化レッスン(個人)', date: '8/19(水) 19:00〜20:00', place: 'アリーナ立川テニスコート' },
              { ttl: 'フットワーク強化レッスン(グループ)', date: '8/26(水) 19:00〜20:30', place: '駒沢オリンピック公園テニスコート' },
            ],
          },
        ].map((cc, i, arr) => (
          <div key={i} style={{
            border:'1px solid var(--wf-line)', background:'#fff',
            padding:14, marginBottom: i === arr.length - 1 ? 0 : 12,
          }}>
            <div style={{display:'flex', gap:12, alignItems:'flex-start'}}>
              <div style={{
                width:64, height:64, borderRadius:'50%', background:cc.c, flex:'0 0 auto',
                border:'1px solid var(--wf-line)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:20, color:'var(--wf-mute)',
              }}>{cc.n.charAt(0)}</div>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:14, fontWeight:800}}>{cc.n}</div>
                <div style={{fontSize:10, color:'var(--wf-court)', fontWeight:700, marginTop:1}}>{cc.tag}</div>
                <div style={{fontSize:10.5, color:'var(--wf-mute)', marginTop:6, lineHeight:1.6}}>{cc.bio}</div>
              </div>
            </div>

            <div style={{marginTop:12, paddingTop:10, borderTop:'1px solid var(--wf-line-2)'}}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
                <div style={{fontSize:11, fontWeight:700}}>このコーチに関連する記事</div>
                <span className="wf-mute" style={{fontSize:9.5}}>すべて ›</span>
              </div>
              {cc.articles.map((r, j) => (
                <div key={j} className="wf-row" style={{padding:'7px 0', alignItems:'center'}}>
                  <ImgPh w={56} h={40} label="" />
                  <div style={{flex:1, fontSize:11.5, fontWeight:600, lineHeight:1.4}}>{r.ttl}</div>
                  <span style={{display:'inline-flex', alignItems:'center', gap:2, fontSize:10, color:'var(--wf-mute)'}}>{Ico.clock}<span className="wf-num">{r.dur}</span></span>
                </div>
              ))}
              <div className="wf-btn wf-btn-out" style={{width:'100%', marginTop:8, height:32, fontSize:11}}>
                もっと見る (<span className="wf-num">{cc.articleCount}</span>記事) <span style={{fontSize:10}}>›</span>
              </div>
            </div>

            <div style={{marginTop:14, paddingTop:10, borderTop:'1px solid var(--wf-line-2)'}}>
              <div style={{fontSize:11, fontWeight:700, marginBottom:8}}>このコーチのレッスンを受ける</div>
              {cc.sessions.map((s, j) => (
                <div key={j} className="wf-row" style={{padding:'7px 0', alignItems:'center'}}>
                  <ImgPh w={56} h={40} label="" />
                  <div style={{flex:1, minWidth:0}}>
                    <div style={{fontSize:11.5, fontWeight:600, lineHeight:1.4}}>{s.ttl}</div>
                    <div style={{fontSize:9.5, color:'var(--wf-mute)', marginTop:3, display:'flex', flexDirection:'column', gap:2}}>
                      <span style={{display:'inline-flex', alignItems:'center', gap:3}}>{Ico.calendar}<span className="wf-num">{s.date}</span></span>
                      <span style={{display:'inline-flex', alignItems:'center', gap:3}}>{Ico.pin}{s.place}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="wf-btn wf-btn-out" style={{width:'100%', marginTop:8, height:32, fontSize:11}}>
                もっと見る (<span className="wf-num">{cc.lessons}</span>レッスン) <span style={{fontSize:10}}>›</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Phone>
  );
}

Object.assign(window, { ListLessonFrame });
