// Lesson.jsx — 記事詳細：レッスン
// STEP解説 / 連続写真 / コート図 / NG例OK例 / 練習メニュー / FAQ

function LessonFrame() {
  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="レッスン" />
      <Crumb items={['TOP', 'レッスン', 'フォーム']} />

      {/* ── 見出し (05/06と位置を揃える) ── */}
      <div style={{padding:'14px 14px 0'}}>
        <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:6}}>
          <span className="wf-cat wf-cat-lesson">LESSON</span>
          <span className="wf-mute" style={{fontSize:10}}>フォーム · フォアハンド</span>
          <span className="wf-cat wf-cat-outline" style={{marginLeft:'auto'}}>中級〜</span>
        </div>
        <h1 style={{fontSize:19, fontWeight:800, lineHeight:1.45, margin:'0 0 6px', letterSpacing:'-0.01em'}}>
          スピンをかけるフォアハンド<br/>
          <span style={{fontSize:13, color:'var(--wf-mute)', fontWeight:600}}>手首とラケットヘッドの使い方 4ステップ</span>
        </h1>
        <div style={{
          display:'flex', gap:8, alignItems:'center',
          fontSize:11, color:'var(--wf-mute)',
          padding:'6px 0 10px', borderTop:'1px solid var(--wf-line-2)', borderBottom:'1px solid var(--wf-line-2)',
        }}>
          <div style={{
            width:22, height:22, borderRadius:'50%', background:'#e5e2d9',
            display:'flex', alignItems:'center', justifyContent:'center', fontSize:8,
          }}>山</div>
          <span style={{fontWeight:700, color:'var(--wf-ink)'}}>コーチ 山田 潤</span>
          <span style={{marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:2}}>{Ico.clock}<span className="wf-num">読了 5分</span></span>
        </div>
      </div>

      {/* ── ヒーロー ── */}
      <div style={{padding:'12px 14px 0'}}>
        <ImgPh w="100%" h={200} label="HERO / スイング写真" />
      </div>

      {/* ── 目次 ── */}
      <div style={{margin:'14px 14px 0', padding:'10px 12px', background:'var(--wf-bg-2)', border:'1px solid var(--wf-line)'}}>
        <div style={{fontSize:10.5, fontWeight:800, marginBottom:4, letterSpacing:'0.06em', color:'var(--wf-mute)'}}>目次</div>
        {['STEP 1  テイクバックの構え', 'STEP 2  ラケットダウンの位置', 'STEP 3  インパクトと手首', 'STEP 4  フォロースルー', 'NG例 / OK例', '練習メニュー', 'FAQ'].map((t,i) => (
          <div key={i} style={{fontSize:11.5, padding:'3px 0', display:'flex', justifyContent:'space-between'}}>
            <span>{t}</span><span className="wf-mute" style={{fontSize:10}}>›</span>
          </div>
        ))}
      </div>

      {/* ── STEP 解説 (連続写真 + 説明) ── */}
      <div style={{padding:'20px 14px 0'}}>
        {[
          { n: 1, ttl: 'テイクバックの構え', desc: 'ボールが来る前にラケットを引き始め、肩を大きく回す。左手はスロートに添えて、非利き手主導で準備。' },
          { n: 2, ttl: 'ラケットダウンの位置', desc: 'ラケットヘッドは腰よりも下に落とす。ここで力を溜めることが、スピンを生み出す最大のポイント。' },
        ].map(step => (
          <div key={step.n} style={{marginBottom:18}}>
            <div style={{display:'flex', gap:8, alignItems:'baseline', marginBottom:8}}>
              <span style={{
                fontFamily:'var(--wf-font-num)', fontSize:24, fontWeight:800,
                color:'var(--wf-court)', lineHeight:1, letterSpacing:'-0.03em',
              }}>{String(step.n).padStart(2,'0')}</span>
              <h2 style={{fontSize:15, fontWeight:800, margin:0}}>{step.ttl}</h2>
            </div>

            {/* 連続写真 (4コマ) */}
            <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:3, marginBottom:8, position:'relative'}}>
              {[1,2,3,4].map(f => (
                <div key={f} style={{position:'relative'}}>
                  <ImgPh w="100%" h={78} label="" />
                  <span style={{
                    position:'absolute', top:3, left:3,
                    background:'var(--wf-ink)', color:'#fff',
                    fontSize:8, fontWeight:700, padding:'1px 4px',
                    fontFamily:'var(--wf-font-num)',
                  }}>{f}/4</span>
                </div>
              ))}
              {step.n === 1 && (
                <div style={{gridColumn:'1 / -1', marginTop:2}}>
                  <AnnoTag>連続写真ブロック=CMSでコマ数選択</AnnoTag>
                </div>
              )}
            </div>

            <p style={{fontSize:13, lineHeight:1.8, margin:0}}>{step.desc}</p>
          </div>
        ))}
      </div>

      {/* ── コート図 (戦術的な説明時) ── */}
      <div style={{padding:'0 14px 0'}}>
        <div style={{fontSize:12, fontWeight:800, marginBottom:6, color:'var(--wf-court)'}}>ボールの軌道イメージ</div>
        <div style={{
          position:'relative', border:'1px solid var(--wf-line)',
          background:'var(--wf-court-soft)', height: 180,
        }}>
          {/* コート */}
          <svg viewBox="0 0 300 180" width="100%" height="100%" style={{display:'block'}}>
            {/* コート枠 */}
            <rect x="30" y="20" width="240" height="140" fill="#a8c5ad" stroke="#fff" strokeWidth="2"/>
            {/* センターライン */}
            <line x1="150" y1="20" x2="150" y2="160" stroke="#fff" strokeWidth="1.5"/>
            {/* サービスライン */}
            <line x1="30" y1="60" x2="270" y2="60" stroke="#fff" strokeWidth="1.5"/>
            <line x1="30" y1="120" x2="270" y2="120" stroke="#fff" strokeWidth="1.5"/>
            {/* ネット */}
            <line x1="30" y1="90" x2="270" y2="90" stroke="#333" strokeWidth="2" strokeDasharray="3 2"/>
            {/* 打点 */}
            <circle cx="80" cy="140" r="6" fill="var(--wf-clay)"/>
            <text x="90" y="145" fontSize="9" fill="var(--wf-ink)" fontWeight="700">打点</text>
            {/* 軌道 (スピン) */}
            <path d="M 80 140 Q 150 20 240 55" stroke="var(--wf-clay)" strokeWidth="2" fill="none" strokeDasharray="4 2"/>
            {/* 着地点 */}
            <circle cx="240" cy="55" r="5" fill="none" stroke="var(--wf-clay)" strokeWidth="2"/>
            <text x="200" y="45" fontSize="9" fill="var(--wf-clay)" fontWeight="700">深く弾む</text>
          </svg>
          <div style={{position:'absolute', bottom:4, right:6}}>
            <AnnoTag>コート図ブロック=SVG部品化</AnnoTag>
          </div>
        </div>
      </div>

      {/* ── NG / OK 例 ── */}
      <div style={{padding:'18px 14px 0'}}>
        <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>NG例 / OK例</div>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8}}>
          <div style={{border:'2px solid var(--wf-clay)'}}>
            <div style={{background:'var(--wf-clay)', color:'#fff', fontSize:10, fontWeight:800, padding:'3px 6px', letterSpacing:'0.06em'}}>NG × 手打ち</div>
            <ImgPh w="100%" h={90} label="" />
            <div style={{padding:6, fontSize:10.5, lineHeight:1.5}}>肘が伸びきってしまい、力が伝わらない</div>
          </div>
          <div style={{border:'2px solid var(--wf-court)'}}>
            <div style={{background:'var(--wf-court)', color:'#fff', fontSize:10, fontWeight:800, padding:'3px 6px', letterSpacing:'0.06em'}}>OK ○ 体幹主導</div>
            <ImgPh w="100%" h={90} label="" />
            <div style={{padding:6, fontSize:10.5, lineHeight:1.5}}>肘は柔らかく、腰の回転で球を運ぶ</div>
          </div>
        </div>
      </div>

      {/* ── 練習メニュー ── */}
      <div style={{padding:'18px 14px 0'}}>
        <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>おすすめ練習メニュー</div>
        <div style={{border:'1px solid var(--wf-line)'}}>
          {[
            ['ドロップフィード', '10球 × 3セット', '基本フォーム確認'],
            ['ミニラリー', '5分', 'テイクバック意識'],
            ['クロスラリー', '10分', 'スピンでコートに収める'],
          ].map(([n, v, m], i) => (
            <div key={i} style={{
              display:'grid', gridTemplateColumns:'auto 1fr auto', gap:8,
              padding:'10px', alignItems:'center',
              borderBottom: i < 2 ? '1px solid var(--wf-line-2)' : 0,
            }}>
              <div style={{
                width:26, height:26, background:'var(--wf-court)', color:'#fff',
                fontFamily:'var(--wf-font-num)', fontSize:11, fontWeight:800,
                display:'flex', alignItems:'center', justifyContent:'center',
              }}>{i+1}</div>
              <div>
                <div style={{fontSize:12, fontWeight:700}}>{n}</div>
                <div className="wf-mute" style={{fontSize:10}}>{m}</div>
              </div>
              <div className="wf-num" style={{fontSize:11, fontWeight:700}}>{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div style={{padding:'18px 14px 14px'}}>
        <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8, marginBottom:8}}>FAQ</div>
        {[
          'Q. スピンがかからないのですが、まず何を直せばいい？',
          'Q. グリップはウエスタン一択ですか？',
        ].map((q, i) => (
          <div key={i} style={{
            padding:'10px 0', borderBottom:'1px solid var(--wf-line-2)',
            display:'flex', justifyContent:'space-between', alignItems:'center', gap:8,
          }}>
            <span style={{fontSize:12, fontWeight:600, lineHeight:1.5}}>{q}</span>
            <span className="wf-mute">{Ico.chevD}</span>
          </div>
        ))}
      </div>

      <TabBar active="ホーム" />
    </Phone>
  );
}

Object.assign(window, { LessonFrame });
