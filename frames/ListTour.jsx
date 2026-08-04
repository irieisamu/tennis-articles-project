// ListTour.jsx — 記事一覧：ツアー (種目別タブ + 開催中の大会 + 新着ツアーニュース)

function ListTourFrame() {
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />

      {/* ページヘッダ */}
      <div style={{padding:'14px 14px 10px', background:'#fff', borderBottom:'1px solid var(--wf-line)'}}>
        <div className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.08em', marginBottom:4}}>
          TOUR INDEX
        </div>
        <h1 style={{margin:0, fontSize:22, fontWeight:800, letterSpacing:'-0.01em'}}>ツアー</h1>
        <div style={{fontSize:11, color:'var(--wf-mute)', marginTop:4}}>
          開催中の大会と最新のツアーニュースをカテゴリ別にお届け
        </div>
      </div>

      {/* カテゴリタブ (横スクロール) */}
      <div className="wf-gnav" style={{padding:'0 6px'}}>
        {['全ツアー', 'グランドスラム', 'ATP', 'チャレンジャー', 'WTA', '125', '国別・団体戦', 'ITF男子', 'ITF女子', '学生', 'ジュニア', 'その他', '選手情報', '世界ランキング', 'レースランキング'].map((c, i) => (
          <div key={c} className={'wf-gnav-item' + (i === 0 ? ' on' : '')}>{c}</div>
        ))}
      </div>

      {/* ── 開催中の大会 ── */}
      <div style={{padding:'14px 14px 0'}}>
        <div style={{
          fontSize:10, fontWeight:800, color:'var(--wf-clay)',
          letterSpacing:'0.08em', marginBottom:6,
        }}>◆ 開催中の大会</div>
        <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
          {[
            { type: 'ATP1000', name: 'シンシナティ・オープン', period: '07.24 – 08.02', jpn: '西岡良仁・錦織圭' },
            { type: 'WTA1000', name: 'シンシナティ・オープン', period: '07.24 – 08.02', jpn: '日比野菜緒' },
          ].map((t, i, arr) => (
            <div key={i} style={{
              display:'flex', alignItems:'center', gap:10,
              padding:'10px 12px',
              borderBottom: i < arr.length - 1 ? '1px solid var(--wf-line)' : 0,
            }}>
              <span className="wf-cat wf-cat-tour" style={{
                display:'inline-flex', alignItems:'center', gap:4, flexShrink:0,
              }}>
                <span style={{width:5, height:5, borderRadius:'50%', background:'#fff', animation:'wfPulse 1.8s infinite'}} />
                {t.type}
              </span>
              <div style={{flex:1, minWidth:0}}>
                <div style={{fontSize:12.5, fontWeight:700, lineHeight:1.4}}>{t.name}</div>
                <div className="wf-num" style={{fontSize:10, color:'var(--wf-mute)', marginTop:2}}>{t.period}</div>
                <div style={{fontSize:10, color:'var(--wf-ink-2)', marginTop:3, display:'flex', gap:4, alignItems:'center'}}>
                  <span style={{fontSize:8.5, fontWeight:700, color:'#fff', background:'var(--wf-court)', padding:'1px 4px'}}>JPN</span>
                  <span>{t.jpn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 新着ツアーニュース ── */}
      <div style={{padding:'18px 14px 0'}}>
        <h2 style={{
          margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:4,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          新着ツアーニュース
        </h2>
        {[
          { cat: 'ATP', ttl: 'アルカラス、全米OP前哨戦シンシナティで2年連続決勝進出「今の自分に自信がある」', d: '09:15' },
          { cat: 'ATP', ttl: 'シナー、シンシナティ準決勝でフリッツに惜敗 全米OPへ調整', d: '08:40' },
          { cat: 'WTA', ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」', tag: 'PR', d: '07:20' },
          { cat: '日本', ttl: '西岡良仁、シンシナティ予選突破 本戦初戦は第9シードと', d: '06:00' },
          { cat: 'ATP', ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」記者会見詳報', d: '22:15' },
        ].map((n, i) => (
          <div key={i} className="wf-row" style={{alignItems:'flex-start'}}>
            <ImgPh w={100} h={68} label="thumb" />
            <div style={{flex:1, fontSize:12, lineHeight:1.45, minWidth:0}}>
              <div style={{display:'flex', gap:6, alignItems:'center', fontSize:10, color:'var(--wf-mute)', marginBottom:2}}>
                <span style={{color:'var(--wf-court)', fontWeight:700}}>{n.cat}</span>
                <span>·</span>
                <span className="wf-num">{n.d}</span>
                {n.tag && (
                  <span style={{
                    marginLeft:'auto', fontSize:9, background:'var(--wf-mute-2)', color:'#fff',
                    padding:'0 4px', fontWeight:700, letterSpacing:'0.06em',
                  }}>{n.tag}</span>
                )}
              </div>
              <div style={{fontWeight:600, lineHeight:1.4}}>{n.ttl}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── もっと読み込む ── */}
      <div style={{padding:'16px 14px 20px', textAlign:'center'}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%'}}>もっと読む</button>
      </div>

      {/* ── 選手情報 (ピックアップ日本人選手) ── */}
      <div style={{padding:'0 14px 18px'}}>
        <h2 style={{
          margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:8,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          選手情報
        </h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:8}}>
          {[
            { name: '西岡良仁', tour: 'ATP', rank: 32 },
            { name: '錦織圭', tour: 'ATP', rank: 45 },
            { name: '大坂なおみ', tour: 'WTA', rank: 15 },
            { name: '日比野菜緒', tour: 'WTA', rank: 68 },
          ].map((p, i) => (
            <div key={i} style={{
              width:'calc(50% - 4px)', border:'1px solid var(--wf-line)', background:'#fff',
              padding:'8px 10px', display:'flex', gap:8, alignItems:'center',
            }}>
              <div style={{
                width:36, height:36, borderRadius:'50%', flexShrink:0,
                background:'var(--wf-bg-2)', color:'var(--wf-mute)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:13, fontWeight:800,
              }}>{p.name[0]}</div>
              <div style={{minWidth:0}}>
                <div style={{fontSize:12, fontWeight:800, lineHeight:1.3}}>{p.name}</div>
                <div className="wf-num" style={{fontSize:10, color:'var(--wf-mute)', marginTop:2}}>{p.tour} 世界{p.rank}位</div>
              </div>
            </div>
          ))}
        </div>
        <button className="wf-btn wf-btn-out" style={{width:'100%', marginTop:8}}>もっと見る</button>
      </div>

      {/* ── 世界ランキング ── */}
      <div style={{padding:'0 14px 18px'}}>
        <h2 style={{
          margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:8,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          世界ランキング
        </h2>
        {[
          { tour: '男子世界', rows: [
            { name: 'J. シナー', code: 'ITA', pts: '11,540' },
            { name: 'C. アルカラス', code: 'ESP', pts: '9,720' },
            { name: 'A. ズベレフ', code: 'GER', pts: '6,190' },
          ]},
          { tour: '女子世界', rows: [
            { name: 'A. サバレンカ', code: 'BLR', pts: '9,706' },
            { name: 'I. シフィオンテク', code: 'POL', pts: '8,400' },
            { name: 'C. ガウフ', code: 'USA', pts: '7,150' },
          ]},
        ].map((g, gi) => (
          <div key={gi} style={{marginTop: gi > 0 ? 10 : 0}}>
            <div style={{fontSize:10, fontWeight:800, color:'var(--wf-court)', marginBottom:4}}>{g.tour}</div>
            <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
              {g.rows.map((r, i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:8, padding:'7px 10px',
                  borderBottom: i < g.rows.length - 1 ? '1px solid var(--wf-line)' : 0,
                }}>
                  <span className="wf-num" style={{width:16, fontWeight:800, fontSize:12.5, color:'var(--wf-mute)'}}>{i + 1}</span>
                  <div style={{flex:1, fontSize:12, fontWeight:700, minWidth:0}}>{r.name} <span className="wf-mute" style={{fontWeight:500, fontSize:10}}>{r.code}</span></div>
                  <span className="wf-num" style={{fontSize:10, color:'var(--wf-mute)'}}>{r.pts} pts</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{width:'100%', marginTop:8}}>もっと見る</button>
      </div>

      {/* ── レースランキング ── */}
      <div style={{padding:'0 14px 20px'}}>
        <h2 style={{
          margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:8,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          レースランキング
        </h2>
        {[
          { tour: '男子レース', rows: [
            { name: 'J. シナー', code: 'ITA', pts: '8,910' },
            { name: 'C. アルカラス', code: 'ESP', pts: '7,455' },
            { name: 'T. フリッツ', code: 'USA', pts: '5,120' },
          ]},
          { tour: '女子レース', rows: [
            { name: 'A. サバレンカ', code: 'BLR', pts: '7,840' },
            { name: 'C. ガウフ', code: 'USA', pts: '6,205' },
            { name: 'I. シフィオンテク', code: 'POL', pts: '5,890' },
          ]},
        ].map((g, gi) => (
          <div key={gi} style={{marginTop: gi > 0 ? 10 : 0}}>
            <div style={{fontSize:10, fontWeight:800, color:'var(--wf-court)', marginBottom:4}}>{g.tour}</div>
            <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
              {g.rows.map((r, i) => (
                <div key={i} style={{
                  display:'flex', alignItems:'center', gap:8, padding:'7px 10px',
                  borderBottom: i < g.rows.length - 1 ? '1px solid var(--wf-line)' : 0,
                }}>
                  <span className="wf-num" style={{width:16, fontWeight:800, fontSize:12.5, color:'var(--wf-mute)'}}>{i + 1}</span>
                  <div style={{flex:1, fontSize:12, fontWeight:700, minWidth:0}}>{r.name} <span className="wf-mute" style={{fontWeight:500, fontSize:10}}>{r.code}</span></div>
                  <span className="wf-num" style={{fontSize:10, color:'var(--wf-mute)'}}>{r.pts} pts</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{width:'100%', marginTop:8}}>もっと見る</button>
      </div>

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { ListTourFrame });
