// News.jsx — 記事詳細：テニスニュース
// 参考: https://news.tennis365.net/news/today/202607/158471.html
// キーポイント: 関連ギア/レッスンの自動レコメンド

function NewsFrame() {
  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="ニュース" />
      <Crumb items={['TOP', 'ニュース', 'ATPツアー']} />

      {/* ── ヒーロー ── */}
      <div style={{padding: '14px 14px 0'}}>
        <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:8}}>
          <span className="wf-cat">ニュース</span>
          <span className="wf-mute" style={{fontSize:10.5, display:'flex', alignItems:'center', gap:3}}>
            {Ico.clock}<span className="wf-num">2026.07.27 09:15</span>
          </span>
        </div>
        <h1 style={{
          fontSize: 19, fontWeight: 800, lineHeight: 1.45,
          margin: '0 0 10px', letterSpacing: '-0.01em',
        }}>
          アルカラス、全米OP前哨戦シンシナティで2年連続決勝進出「今の自分に自信がある」
        </h1>
        <div style={{
          display:'flex', gap:8, alignItems:'center',
          padding: '8px 0', borderTop: '1px solid var(--wf-line-2)',
          borderBottom: '1px solid var(--wf-line-2)',
          fontSize: 11,
        }}>
          <div style={{
            width:26, height:26, borderRadius:'50%',
            background:'#e5e2d9', display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:9, color:'var(--wf-mute)',
          }}>編</div>
          <div style={{flex:1}}>
            <div style={{fontWeight:700}}>編集部 / 田村 直樹</div>
            <div className="wf-mute" style={{fontSize:10}}>tennis365</div>
          </div>
          <span className="wf-appbar-ico">{Ico.bookmark}</span>
          <span className="wf-appbar-ico">{Ico.share}</span>
        </div>
      </div>

      {/* ── アイキャッチ ── */}
      <div style={{padding: '12px 14px 0'}}>
        <ImgPh w="100%" h={200} label="HERO / アルカラス試合中" />
        <div className="wf-mute" style={{fontSize:10, marginTop:4}}>
          © Getty Images / 提供
        </div>
      </div>

      {/* ── 本文 ── */}
      <div style={{padding: '14px 14px 0', fontSize: 13.5, lineHeight: 1.85}}>
        <p style={{margin:'0 0 12px'}}>
          カルロス・<u style={{textDecoration:'underline dotted', textDecorationColor:'var(--wf-court)'}}>アルカラス</u>（スペイン）は26日、シンシナティ・オープン（米国／ハードコート）男子シングルス準決勝で第4シードのアレクサンダー・<u style={{textDecoration:'underline dotted', textDecorationColor:'var(--wf-court)'}}>ズベレフ</u>（ドイツ）を7-6(4), 6-4のストレートで下し、2年連続の決勝進出を決めた。
        </p>
        <p style={{margin:'0 0 12px'}}>
          第1セットはブレークの取り合いとなったが、タイブレークで集中力を発揮。第2セットは第7ゲームでズベレフのサービスを破ると、そのまま押し切った。
        </p>
        <p style={{margin:'0 0 12px'}}>
          決勝の相手は、もう一つの準決勝で第1シードのヤニック・シナー（イタリア）を破ったテイラー・フリッツ（米国）に決まる予定。
        </p>
      </div>

      {/* ── 動画: 決着の瞬間 ── */}
      <div style={{margin:'18px 14px 0'}}>
        <div style={{position:'relative'}}>
          <ImgPh w="100%" h={180} label="VIDEO / マッチポイントの瞬間" />
          <div style={{
            position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <div style={{
              width:48, height:48, borderRadius:'50%', background:'rgba(0,0,0,0.6)',
              display:'flex', alignItems:'center', justifyContent:'center', color:'#fff',
            }}>{Ico.play}</div>
          </div>
          <span style={{
            position:'absolute', bottom:8, right:8, background:'rgba(0,0,0,0.75)', color:'#fff',
            fontSize:10, fontWeight:700, padding:'2px 6px',
          }}>0:48</span>
        </div>
        <div style={{fontSize:12.5, fontWeight:700, marginTop:6, lineHeight:1.4}}>
          決着の瞬間 · マッチポイントを動画で見る
        </div>
        <AnnoTag>動画への導線=記事本文からの自動挿入</AnnoTag>
      </div>

      {/* ── 選手データ: 世界ランキングへの導線 ── */}
      <a href="#" style={{
        display:'flex', alignItems:'center', gap:10, margin:'14px 14px 0', padding:'10px 12px',
        border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)', textDecoration:'none', color:'inherit',
      }}>
        <div style={{
          width:32, height:32, borderRadius:'50%', background:'#e5e2d9',
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:11, color:'var(--wf-mute)',
        }}>C</div>
        <div style={{flex:1}}>
          <div style={{fontSize:12, fontWeight:700}}>C. アルカラス</div>
          <div className="wf-mute" style={{fontSize:10}}>ATP世界ランキング 2位 · 選手プロフィールを見る</div>
        </div>
        <span className="wf-mute">{Ico.chev}</span>
      </a>

      {/* ── トーナメント表 (06 ツアー速報 と共通コンポーネント) ── */}
      <div style={{padding:'18px 14px 0'}}>
        <TournamentTable
          matches={[
            { p1: 'C. アルカラス', s1: '7 6', p2: 'A. ズベレフ', s2: '6 4', w: 1 },
            { p1: 'T. フリッツ', s1: '6 3 6', p2: 'J. シナー', s2: '4 6 3', w: 1 },
          ]}
          final="決勝 · アルカラス vs フリッツ (07.28 03:00 JST)"
        />
      </div>

      {/* ── 日本人選手の1ポイント速報への導線 ── */}
      <a href="#" style={{
        display:'block', margin:'14px 14px 0', padding:'12px', textDecoration:'none', color:'inherit',
        border:'1px solid var(--wf-ink)', background:'#fff',
      }}>
        <div style={{display:'flex', alignItems:'center', gap:6, marginBottom:8}}>
          <span className="wf-cat wf-cat-tour" style={{display:'inline-flex', alignItems:'center', gap:4}}>
            <span style={{width:5, height:5, borderRadius:'50%', background:'#fff'}}/>LIVE
          </span>
          <span style={{fontSize:11, fontWeight:700, color:'var(--wf-mute)'}}>1ポイント速報</span>
          <span style={{marginLeft:'auto'}} className="wf-mute">{Ico.chev}</span>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12.5}}>
          <span style={{fontWeight:800}}>錦織 圭</span>
          <span className="wf-num" style={{fontWeight:800}}>40</span>
        </div>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:12.5, marginTop:4}}>
          <span style={{fontWeight:600, color:'var(--wf-mute)'}}>Y. シャン</span>
          <span className="wf-num" style={{fontWeight:600, color:'var(--wf-mute)'}}>30</span>
        </div>
        <div className="wf-mute" style={{fontSize:10, marginTop:8}}>第2セット · 4-3 · 錦織のサーブ</div>
      </a>

      {/* ── レコメンド1: 関連ギア (自動) ── */}
      <div style={{margin:'20px 0 0', padding:'14px', background:'var(--wf-court-soft)', borderTop:'2px solid var(--wf-court)'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
          <div>
            <div style={{fontSize:10, fontWeight:700, color:'var(--wf-court)', letterSpacing:'0.08em'}}>RECOMMEND</div>
            <div style={{fontSize:13, fontWeight:700, marginTop:2}}>アルカラスが使用するギア</div>
          </div>
          <AnnoTag>自動レコメンド</AnnoTag>
        </div>
        <div style={{display:'flex', gap:8}}>
          <div style={{flex:1, background:'#fff', border:'1px solid var(--wf-line)', padding:8}}>
            <ImgPh w="100%" h={64} label="ラケット" />
            <div style={{fontSize:10, marginTop:6, color:'var(--wf-mute)'}}>BABOLAT</div>
            <div style={{fontSize:11, fontWeight:700, lineHeight:1.3}}>Pure Aero 98</div>
          </div>
          <div style={{flex:1, background:'#fff', border:'1px solid var(--wf-line)', padding:8}}>
            <ImgPh w="100%" h={64} label="シューズ" />
            <div style={{fontSize:10, marginTop:6, color:'var(--wf-mute)'}}>NIKE</div>
            <div style={{fontSize:11, fontWeight:700, lineHeight:1.3}}>Zoom Vapor Cage 4</div>
          </div>
          <div style={{flex:1, background:'#fff', border:'1px solid var(--wf-line)', padding:8}}>
            <ImgPh w="100%" h={64} label="ガット" />
            <div style={{fontSize:10, marginTop:6, color:'var(--wf-mute)'}}>BABOLAT</div>
            <div style={{fontSize:11, fontWeight:700, lineHeight:1.3}}>RPM Blast</div>
          </div>
        </div>
        <Anno style={{marginTop:10}}>選手タグ「アルカラス」から装備DBを紐付けし、自動で3点を出し分け。CMS側での手動選択は不要。</Anno>
      </div>

      {/* ── レコメンド2: 関連レッスン (自動) ── */}
      <div style={{margin:'12px 0 0', padding:'14px', background:'#fbf7f0', borderTop:'2px solid #b8894b'}}>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
          <div>
            <div style={{fontSize:10, fontWeight:700, color:'#8a6428', letterSpacing:'0.08em'}}>LESSON</div>
            <div style={{fontSize:13, fontWeight:700, marginTop:2}}>アルカラス直伝、フォアドライブの秘密</div>
          </div>
          <AnnoTag>自動レコメンド</AnnoTag>
        </div>
        <div style={{display:'flex', gap:10}}>
          <ImgPh w={100} h={70} label="Lesson" />
          <div style={{flex:1, fontSize:11.5, lineHeight:1.5}}>
            <div className="wf-mute" style={{fontSize:10}}>フォーム / フォアハンド</div>
            <div style={{fontWeight:700, lineHeight:1.4}}>スピンをかけるための手首の使い方</div>
            <div className="wf-mute" style={{fontSize:10, marginTop:3}}>コーチ 山田 潤</div>
          </div>
        </div>
      </div>

      {/* ── 関連ニュース ── */}
      <div style={{padding:'20px 14px 14px'}}>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom:8}}>
          <div style={{fontSize:13, fontWeight:800, borderLeft:'3px solid var(--wf-court)', paddingLeft:8}}>関連ニュース</div>
          <span className="wf-mute" style={{fontSize:10}}>もっと見る ›</span>
        </div>
        {[
          { cat: 'ATP', ttl: 'シナー、シンシナティ準決勝でフリッツに惜敗 全米OPへ調整', d: '07.27' },
          { cat: 'WTA', ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」', d: '07.26' },
          { cat: 'ATP', ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」記者会見詳報', d: '07.26' },
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

      <TabBar active="ニュース" />
    </Phone>
  );
}

Object.assign(window, { NewsFrame });
