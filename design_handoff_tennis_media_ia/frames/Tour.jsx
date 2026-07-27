// Tour.jsx — 記事詳細：ツアー速報 (スコアボードが主役)
// 参考: https://news.tennis365.net/news/today/202607/158467.html

function TourFrame() {
  return (
    <Phone>
      <AppBar variant="detail" />
      <Crumb items={['TOP', 'ツアー', 'ATP · シンシナティ']} />

      {/* ── ヘッダ (速報バッジ) ── */}
      <div style={{padding: '14px 14px 0'}}>
        <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:8}}>
          <span className="wf-cat wf-cat-tour" style={{display:'inline-flex', alignItems:'center', gap:4}}>
            <span style={{width:6, height:6, borderRadius:'50%', background:'#fff', animation:'wfPulse 1.8s infinite'}} />
            LIVE 速報
          </span>
          <span className="wf-mute" style={{fontSize:10.5, display:'flex', alignItems:'center', gap:3}}>
            {Ico.clock}<span className="wf-num">更新 2026.07.27 04:32</span>
          </span>
        </div>
        <h1 style={{
          fontSize: 18, fontWeight: 800, lineHeight: 1.45,
          margin: '0 0 6px', letterSpacing: '-0.01em',
        }}>
          【シンシナティ・オープン準決勝】アルカラス、ズベレフをストレートで下し決勝進出
        </h1>
        <div className="wf-mute" style={{fontSize:11, lineHeight:1.5}}>
          第2セット第7ゲームでブレークに成功。試合時間1時間42分。
        </div>
      </div>

      {/* ── スコアボード (メインパーツ) ── */}
      <div style={{margin:'14px 14px 0', border:'2px solid var(--wf-ink)', background:'#fff'}}>
        {/* トップバー */}
        <div style={{
          background:'var(--wf-ink)', color:'#fff',
          padding:'6px 10px', fontSize:10,
          display:'flex', justifyContent:'space-between', alignItems:'center',
          letterSpacing:'0.04em',
        }}>
          <span style={{fontWeight:700}}>MEN'S SINGLES · SEMIFINAL</span>
          <span className="wf-num">Court: Center · Hard</span>
        </div>

        {/* テーブル */}
        <div>
          {/* ヘッダ行 */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 32px 32px 32px 40px',
            fontSize:10, color:'var(--wf-mute)',
            padding:'6px 10px', borderBottom:'1px solid var(--wf-line)',
            letterSpacing:'0.06em', fontWeight:700,
          }}>
            <span>PLAYER</span>
            <span style={{textAlign:'center'}}>S1</span>
            <span style={{textAlign:'center'}}>S2</span>
            <span style={{textAlign:'center'}}>S3</span>
            <span style={{textAlign:'center'}}>SET</span>
          </div>

          {/* Player 1 (勝者) */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 32px 32px 32px 40px',
            padding:'10px', borderBottom:'1px solid var(--wf-line)',
            background:'var(--wf-court-soft)',
            alignItems:'center',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <span style={{
                width:16, height:12, background:'#c60b1e',
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                fontSize:8, color:'#fff', fontWeight:700,
              }}>ESP</span>
              <div>
                <div style={{fontWeight:800, fontSize:12.5}}>C. アルカラス</div>
                <div className="wf-num wf-mute" style={{fontSize:9.5}}>[2] · World No.2</div>
              </div>
            </div>
            <span className="wf-num" style={{textAlign:'center', fontWeight:800, fontSize:15}}>7<sup style={{fontSize:9, fontWeight:600, color:'var(--wf-mute)'}}>7</sup></span>
            <span className="wf-num" style={{textAlign:'center', fontWeight:800, fontSize:15}}>6</span>
            <span className="wf-num" style={{textAlign:'center', color:'var(--wf-mute-2)', fontSize:15}}>–</span>
            <span className="wf-num" style={{textAlign:'center', fontWeight:800, fontSize:16, color:'var(--wf-court)'}}>2</span>
          </div>

          {/* Player 2 */}
          <div style={{
            display:'grid', gridTemplateColumns:'1fr 32px 32px 32px 40px',
            padding:'10px',
            alignItems:'center',
          }}>
            <div style={{display:'flex', alignItems:'center', gap:8}}>
              <span style={{
                width:16, height:12, background:'#000',
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                fontSize:8, color:'#fff', fontWeight:700,
              }}>GER</span>
              <div>
                <div style={{fontWeight:600, fontSize:12.5}}>A. ズベレフ</div>
                <div className="wf-num wf-mute" style={{fontSize:9.5}}>[4] · World No.4</div>
              </div>
            </div>
            <span className="wf-num" style={{textAlign:'center', fontSize:15, color:'var(--wf-ink-2)'}}>6<sup style={{fontSize:9, color:'var(--wf-mute)'}}>4</sup></span>
            <span className="wf-num" style={{textAlign:'center', fontSize:15, color:'var(--wf-ink-2)'}}>4</span>
            <span className="wf-num" style={{textAlign:'center', color:'var(--wf-mute-2)', fontSize:15}}>–</span>
            <span className="wf-num" style={{textAlign:'center', fontSize:16, color:'var(--wf-mute)'}}>0</span>
          </div>

          {/* 統計フッタ */}
          <div style={{
            padding:'8px 10px', background:'var(--wf-bg-2)',
            borderTop:'1px solid var(--wf-line)',
            display:'grid', gridTemplateColumns:'1fr 1fr 1fr',
            gap:6, fontSize:10,
          }}>
            <div>
              <div className="wf-mute" style={{fontSize:9}}>ACE</div>
              <div className="wf-num" style={{fontWeight:700}}>11 <span className="wf-mute-2">/ 8</span></div>
            </div>
            <div>
              <div className="wf-mute" style={{fontSize:9}}>1st SERVE%</div>
              <div className="wf-num" style={{fontWeight:700}}>68% <span className="wf-mute-2">/ 61%</span></div>
            </div>
            <div>
              <div className="wf-mute" style={{fontSize:9}}>BP CONV.</div>
              <div className="wf-num" style={{fontWeight:700}}>2/4 <span className="wf-mute-2">/ 0/3</span></div>
            </div>
          </div>
        </div>
      </div>

      <div style={{padding:'6px 14px 0', display:'flex', gap:8}}>
        <button className="wf-btn wf-btn-court" style={{flex:1, height:32, fontSize:11}}>試合詳細を見る</button>
        <button className="wf-btn wf-btn-out" style={{height:32, fontSize:11, padding:'0 12px'}}>ライブ中継</button>
      </div>

      {/* ── 本文 (試合レポート) ── */}
      <div style={{padding:'16px 14px 0', fontSize:13, lineHeight:1.8}}>
        <p style={{margin:'0 0 10px'}}>
          第1セットは互いにサービスをキープし合う展開。第12ゲームでアルカラスがブレークバックに成功し6-6のタイブレークへ突入。7-4で先取した。
        </p>
        <p style={{margin:'0 0 10px'}}>
          第2セットは第7ゲームでズベレフのサービスを破ると、リードを守り切り6-4で決着。
        </p>
      </div>

      {/* ── トーナメント表 (簡易) ── */}
      <div style={{padding:'18px 14px 0'}}>
        <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>
          トーナメント表 · 準決勝
        </div>
        <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
          {[
            { p1: 'C. アルカラス', s1: '7 6', p2: 'A. ズベレフ', s2: '6 4', w: 1, done: true },
            { p1: 'T. フリッツ', s1: '6 3 6', p2: 'J. シナー', s2: '4 6 3', w: 1, done: true },
          ].map((m, i) => (
            <div key={i} style={{
              padding:'8px 10px',
              borderBottom: i === 0 ? '1px solid var(--wf-line)' : 0,
              fontSize:11.5,
            }}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2px 0'}}>
                <span style={{fontWeight: m.w === 1 ? 800 : 500}}>{m.p1}</span>
                <span className="wf-num" style={{fontWeight: m.w === 1 ? 800 : 500}}>{m.s1}</span>
              </div>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'2px 0'}}>
                <span style={{fontWeight: m.w === 2 ? 800 : 500, color: m.w === 2 ? 'inherit' : 'var(--wf-mute)'}}>{m.p2}</span>
                <span className="wf-num" style={{fontWeight: m.w === 2 ? 800 : 500, color: m.w === 2 ? 'inherit' : 'var(--wf-mute)'}}>{m.s2}</span>
              </div>
            </div>
          ))}
          <div style={{
            padding:'10px', background:'var(--wf-clay-soft)',
            fontSize:11, textAlign:'center', fontWeight:700, color:'var(--wf-clay)',
          }}>
            決勝 · アルカラス vs フリッツ (07.28 03:00 JST)
          </div>
        </div>
      </div>

      {/* ── 関連 ── */}
      <div style={{padding:'18px 14px 14px'}}>
        <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>
          この大会の関連ニュース
        </div>
        {['シナー、シンシナティ準決勝で敗退 全米OPへ調整', 'フリッツ、決勝で母国優勝を狙う「準備は万端」'].map((t, i) => (
          <div key={i} className="wf-row">
            <div style={{
              width:32, height:32, background:'var(--wf-ink)', color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:9, fontWeight:700,
            }}>ATP</div>
            <div style={{flex:1, fontSize:12, lineHeight:1.4, fontWeight:600}}>{t}</div>
          </div>
        ))}
      </div>

      <TabBar active="ツアー" />

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TourFrame });
