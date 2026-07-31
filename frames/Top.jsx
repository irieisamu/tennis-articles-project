// Top.jsx — TOPページ
// メインニュース + ツアー速報 + 最新ニュース + ギア特集 + レッスン特集
// + サービス導線 + アクセスランキング + 特集一覧

// セクション見出しの共通
function SecHead({ title, cat, more = true }) {
  return (
    <div style={{
      display:'flex', justifyContent:'space-between', alignItems:'baseline',
      padding:'0 14px', marginBottom:8,
    }}>
      <div style={{display:'flex', alignItems:'baseline', gap:8}}>
        <div style={{
          fontSize:14, fontWeight:800, letterSpacing:'-0.01em',
          borderLeft:'3px solid var(--wf-court)', paddingLeft:8,
        }}>{title}</div>
        {cat && <span className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.08em'}}>{cat}</span>}
      </div>
      {more && <span className="wf-mute" style={{fontSize:10.5, display:'inline-flex', alignItems:'center', gap:2}}>もっと見る <span style={{fontSize:9}}>›</span></span>}
    </div>
  );
}

function TopFrame() {
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="TOP" />

      {/* ── 1. メインニュース (フルブリード ヒーロー) ── */}
      <div style={{position:'relative'}}>
        <ImgPh w="100%" h={230} label="MAIN NEWS HERO / アルカラス試合中" />
        <div style={{
          position:'absolute', left:0, right:0, bottom:0,
          padding:'40px 14px 14px',
          background:'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
          color:'#fff',
        }}>
          <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:6}}>
            <span className="wf-cat wf-cat-tour" style={{display:'inline-flex', alignItems:'center', gap:4}}>
              <span style={{width:5, height:5, borderRadius:'50%', background:'#fff'}}/>
              LIVE 速報
            </span>
            <span className="wf-num" style={{fontSize:10, opacity:0.85}}>04:32 更新</span>
          </div>
          <h1 style={{
            margin:0, color:'#fff', fontSize:17, fontWeight:800, lineHeight:1.4,
            letterSpacing:'-0.01em', textShadow:'0 2px 8px rgba(0,0,0,0.4)',
          }}>
            アルカラス、シンシナティ準決勝でズベレフを下し2年連続決勝進出
          </h1>
        </div>
      </div>

      {/* ── 2. 速報帯 (横スクロール) ── */}
      <div style={{background:'var(--wf-ink)', color:'#fff', padding:'6px 0', display:'flex', alignItems:'center', gap:8, overflow:'hidden'}}>
        <div style={{
          padding:'2px 8px', background:'#b32c22', fontSize:9, fontWeight:800,
          letterSpacing:'0.08em', flex:'0 0 auto', marginLeft:10,
        }}>BREAKING</div>
        <div style={{fontSize:11, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>
          シナー、シンシナティ準決勝でフリッツに惜敗 · 大坂なおみ、モントリオール3回戦へ · ...
        </div>
      </div>

      {/* ── 3. ツアー速報 (スコアカード群) ── */}
      <div style={{padding:'18px 0 0'}}>
        <SecHead title="ツアー速報" cat="ATP · WTA" />
        <div style={{padding:'0 0 0 14px', display:'flex', gap:8, overflowX:'auto'}}>
          {[
            { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'C. アルカラス', s1: '7 6', p2: 'A. ズベレフ', s2: '6 4', w: 1, status: 'FINAL' },
            { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'T. フリッツ', s1: '6 3 6', p2: 'J. シナー', s2: '4 6 3', w: 1, status: 'FINAL' },
            { tour: 'WTA', event: 'MONTREAL · R3', p1: '大坂 なおみ', s1: '6 4', p2: 'E. ルバキナ', s2: '3 2', w: 1, status: 'LIVE' },
          ].map((m, i) => (
            <div key={i} style={{
              flex:'0 0 220px', border:'1px solid var(--wf-ink)', background:'#fff',
              marginRight: i === 2 ? 14 : 0,
            }}>
              <div style={{
                background:'var(--wf-ink)', color:'#fff',
                padding:'5px 8px', fontSize:9,
                display:'flex', justifyContent:'space-between', alignItems:'center',
                letterSpacing:'0.06em', fontWeight:700,
              }}>
                <span>{m.tour} · {m.event}</span>
                {m.status === 'LIVE' ? (
                  <span style={{color:'#ff6b5c', display:'inline-flex', alignItems:'center', gap:3}}>
                    <span style={{width:5, height:5, borderRadius:'50%', background:'#ff6b5c'}}/>
                    LIVE
                  </span>
                ) : <span style={{color:'var(--wf-mute-2)'}}>{m.status}</span>}
              </div>
              {[[m.p1, m.s1, m.w === 1], [m.p2, m.s2, m.w === 2]].map(([n, s, win], j) => (
                <div key={j} style={{
                  display:'flex', justifyContent:'space-between', alignItems:'center',
                  padding:'7px 8px',
                  background: win ? 'var(--wf-court-soft)' : '#fff',
                  borderTop: j === 1 ? '1px solid var(--wf-line-2)' : 0,
                }}>
                  <span style={{fontSize:11.5, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-ink-2)'}}>{n}</span>
                  <span className="wf-num" style={{fontSize:12.5, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-mute)'}}>{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. 最新ニュース一覧 ── */}
      <div style={{padding:'20px 0 0'}}>
        <SecHead title="最新ニュース" />
        <div style={{padding:'0 14px'}}>
          {[
            { cat: 'ATP', ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」記者会見詳報', d: '07.27 08:00' },
            { cat: 'WTA', ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」', d: '07.26 22:40' },
            { cat: '日本', ttl: '西岡良仁、シンシナティ予選突破 本戦初戦は第9シードと', d: '07.26 18:15' },
            { cat: 'ATP', ttl: 'メドベージェフ、右手首負傷で全米OP出場に黄信号', d: '07.26 15:00' },
          ].map((n, i) => (
            <div key={i} className="wf-row">
              <ImgPh w={82} h={56} label="thumb" />
              <div style={{flex:1, fontSize:12, lineHeight:1.45}}>
                <div style={{display:'flex', gap:6, alignItems:'center', fontSize:10, color:'var(--wf-mute)', marginBottom:2}}>
                  <span style={{color:'var(--wf-court)', fontWeight:700}}>{n.cat}</span>
                  <span>·</span>
                  <span className="wf-num">{n.d}</span>
                </div>
                <div style={{fontWeight:600, lineHeight:1.4}}>{n.ttl}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. 特集一覧 ── */}
      <div style={{padding:'20px 0 14px'}}>
        <SecHead title="特集" cat="FEATURES" />
        <div style={{padding:'0 0 0 14px', display:'flex', gap:8, overflowX:'auto'}}>
          {[
            { ttl: '2026年ラケット新製品', n: 12 },
            { ttl: 'アルカラス使用モデル', n: 8 },
            { ttl: '全米オープン2026 特集', n: 24 },
          ].map((f, i) => (
            <div key={i} style={{
              flex:'0 0 200px', position:'relative',
              marginRight: i === 2 ? 14 : 0,
              background:'var(--wf-ink)', color:'#fff', overflow:'hidden',
            }}>
              <ImgPh w="100%" h={100} label="feature" dark={true} />
              <div style={{padding:'8px 10px 10px'}}>
                <div style={{fontSize:9, color:'#c5c3bc', letterSpacing:'0.08em', fontWeight:700}}>FEATURE</div>
                <div style={{fontSize:12, fontWeight:700, marginTop:3, color:'#fff', lineHeight:1.3}}>{f.ttl}</div>
                <div className="wf-num" style={{fontSize:10, color:'#c5c3bc', marginTop:4}}>{f.n} 記事</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. テニス用品特集 (記事リスト = レッスンと同じ形式) ── */}
      <div style={{padding:'20px 0 0', background:'var(--wf-bg-2)', margin:'20px 0 0', paddingTop:18, paddingBottom:18}}>
        <SecHead title="テニス用品" cat="GEAR" />
        {/* サブカテゴリタブ */}
        <div style={{padding:'0 14px 10px', display:'flex', gap:6, overflowX:'auto'}}>
          {['ラケット', 'シューズ', 'ガット', 'グリップ', 'ウェア'].map((t, i) => (
            <div key={t} style={{
              flex:'0 0 auto', padding:'4px 10px', fontSize:10.5, fontWeight:700,
              background: i === 0 ? 'var(--wf-ink)' : '#fff',
              color: i === 0 ? '#fff' : 'var(--wf-ink)',
              border:'1px solid var(--wf-ink)',
            }}>{t}</div>
          ))}
        </div>
        <div style={{padding:'0 14px'}}>
          {[
            { cat: 'ラケット', ttl: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器、あなたに合うか', reviewer: '鈴木 亮太', dur: '8分' },
            { cat: 'シューズ', ttl: 'クレーコート向けシューズ比較 · グリップ力と耐久性で選ぶ5足', reviewer: '田中 誠', dur: '6分' },
          ].map((g, i) => (
            <div key={i} className="wf-row">
              <ImgPh w={100} h={66} label="gear" />
              <div style={{flex:1, fontSize:12, lineHeight:1.45}}>
                <div style={{fontSize:10, color:'#1e2a4c', fontWeight:700, marginBottom:2}}>{g.cat}</div>
                <div style={{fontWeight:600, lineHeight:1.4}}>{g.ttl}</div>
                <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:4, display:'flex', gap:6}}>
                  <span>{g.reviewer}</span>
                  <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">{g.dur}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. レッスン特集 ── */}
      <div style={{padding:'20px 0 0'}}>
        <SecHead title="レッスン" cat="LESSON" />
        <div style={{padding:'0 14px 10px', display:'flex', gap:6, overflowX:'auto'}}>
          {['初心者', 'フォーム', 'サーブ', '戦術', 'フィジカル'].map((t, i) => (
            <div key={t} style={{
              flex:'0 0 auto', padding:'4px 10px', fontSize:10.5, fontWeight:700,
              background: i === 1 ? 'var(--wf-ink)' : '#fff',
              color: i === 1 ? '#fff' : 'var(--wf-ink)',
              border:'1px solid var(--wf-ink)',
            }}>{t}</div>
          ))}
        </div>
        <div style={{padding:'0 14px'}}>
          {[
            { cat: 'フォーム', ttl: 'スピンをかけるフォアハンド · 手首の使い方 4ステップ', coach: 'コーチ 山田 潤', dur: '5分' },
            { cat: '戦術', ttl: 'シングルスで勝つための「ドロップショット」の使いどころ', coach: 'コーチ 木村 慎', dur: '7分' },
          ].map((l, i) => (
            <div key={i} className="wf-row">
              <div style={{position:'relative'}}>
                <ImgPh w={100} h={66} label="lesson" />
                <div style={{
                  position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                  width:24, height:24, borderRadius:'50%', background:'rgba(0,0,0,0.6)',
                  display:'flex', alignItems:'center', justifyContent:'center', color:'#fff',
                }}>{Ico.play}</div>
              </div>
              <div style={{flex:1, fontSize:12, lineHeight:1.45}}>
                <div style={{fontSize:10, color:'#7a5a1d', fontWeight:700, marginBottom:2}}>{l.cat}</div>
                <div style={{fontWeight:600, lineHeight:1.4}}>{l.ttl}</div>
                <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:4, display:'flex', gap:6}}>
                  <span>{l.coach}</span>
                  <span style={{display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">{l.dur}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 7. サービス導線 (5マス グリッド) ── */}
      <div style={{padding:'20px 0 0'}}>
        <SecHead title="テニスをはじめる・つづける" more={false}/>
        <div style={{padding:'0 14px', display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8}}>
          {[
            ['スクール', '検索'],
            ['大会', 'エントリー'],
            ['イベント', '参加'],
            ['サークル', '募集'],
            ['レンタル\nコート', '予約'],
            ['コーチ\n求人', '一覧'],
          ].map(([n, s], i) => (
            <div key={i} style={{
              aspectRatio:'1 / 1', border:'1px solid var(--wf-line)', background:'#fff',
              display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
              padding:8, textAlign:'center',
            }}>
              <div style={{
                width:32, height:32, background:'var(--wf-court-soft)',
                border:'1px solid var(--wf-court)',
                marginBottom:6,
              }}/>
              <div style={{fontSize:11, fontWeight:700, whiteSpace:'pre-line', lineHeight:1.3}}>{n}</div>
              <div style={{fontSize:9, color:'var(--wf-mute)', marginTop:2}}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. アクセスランキング ── */}
      <div style={{padding:'20px 0 0'}}>
        <SecHead title="アクセスランキング" cat="WEEKLY" />
        <div style={{padding:'0 14px'}}>
          {[
            'アルカラス、全米OP前哨戦シンシナティで決勝進出',
            'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器',
            'スピンをかけるフォアハンド · 手首の使い方 4ステップ',
            'ジョコビッチ「体調は万全」記者会見詳報',
            '大坂なおみ、モントリオール3回戦進出',
          ].map((t, i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'26px 1fr',
              gap:10, padding:'10px 0', alignItems:'center',
              borderBottom:'1px solid var(--wf-line-2)',
            }}>
              <div className="wf-num" style={{
                fontSize:20, fontWeight:800, color: i < 3 ? 'var(--wf-clay)' : 'var(--wf-mute-2)',
                letterSpacing:'-0.03em', textAlign:'center', lineHeight:1,
              }}>{i + 1}</div>
              <div style={{fontSize:12, fontWeight:600, lineHeight:1.4}}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="ホーム" />
    </Phone>
  );
}

Object.assign(window, { TopFrame });
