// ListNews.jsx — 記事一覧：ニュース (新着順)

function ListNewsFrame() {
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ニュース" />

      {/* ページヘッダ */}
      <div style={{padding:'14px 14px 10px', background:'#fff', borderBottom:'1px solid var(--wf-line)'}}>
        <div className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.08em', marginBottom:4}}>
          NEWS INDEX
        </div>
        <h1 style={{margin:0, fontSize:22, fontWeight:800, letterSpacing:'-0.01em'}}>新着ニュース</h1>
        <div style={{fontSize:11, color:'var(--wf-mute)', marginTop:4}}>
          最新のテニスニュースを新着順にお届け
        </div>
      </div>

      {/* ツールバー: 検索 + 並び替え */}
      <div style={{
        padding:'8px 14px', display:'flex', gap:8, alignItems:'center',
        background:'var(--wf-bg-2)', borderBottom:'1px solid var(--wf-line-2)',
      }}>
        <div style={{
          flex:1, display:'flex', gap:6, alignItems:'center',
          background:'#fff', border:'1px solid var(--wf-line)',
          padding:'5px 8px', fontSize:11, color:'var(--wf-mute)',
        }}>
          {Ico.search}<span>キーワード検索</span>
        </div>
        <div style={{
          display:'flex', gap:4, alignItems:'center',
          fontSize:10.5, fontWeight:700, color:'var(--wf-ink)',
          padding:'5px 8px', border:'1px solid var(--wf-line)', background:'#fff',
        }}>
          新着順 {Ico.chevD}
        </div>
      </div>

      {/* ── ピックアップ (大きめカード) ── */}
      <div style={{padding:'14px 14px 0'}}>
        <div style={{
          fontSize:10, fontWeight:800, color:'var(--wf-clay)',
          letterSpacing:'0.08em', marginBottom:6,
        }}>◆ PICK UP</div>
        <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
          <ImgPh w="100%" h={160} label="pickup / アルカラス試合中" />
          <div style={{padding:'10px 12px 12px'}}>
            <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:6}}>
              <span className="wf-cat">ATP</span>
              <span className="wf-num" style={{fontSize:10, color:'var(--wf-mute)'}}>2026.07.27 09:15</span>
            </div>
            <div style={{fontSize:14, fontWeight:800, lineHeight:1.45}}>
              アルカラス、全米OP前哨戦シンシナティで2年連続決勝進出「今の自分に自信がある」
            </div>
            <div style={{fontSize:11, color:'var(--wf-mute)', marginTop:4, lineHeight:1.5}}>
              第2セット第7ゲームでズベレフのサービスを破ると、そのまま押し切った。
            </div>
          </div>
        </div>
      </div>

      {/* ── 日付見出し + 新着リスト ── */}
      <div style={{padding:'18px 14px 0'}}>
        <div style={{
          fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:4,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          <span className="wf-num" style={{color:'var(--wf-ink)', fontSize:12, marginRight:6}}>07 / 27</span>
          <span>MON</span>
        </div>
        {[
          { cat: 'ATP', ttl: 'シナー、シンシナティ準決勝でフリッツに惜敗 全米OPへ調整', tag: '', d: '08:40' },
          { cat: 'WTA', ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」', tag: 'PR', d: '07:20' },
          { cat: '日本', ttl: '西岡良仁、シンシナティ予選突破 本戦初戦は第9シードと', tag: '', d: '06:00' },
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

      {/* ── 日付見出し 2日目 ── */}
      <div style={{padding:'12px 14px 0'}}>
        <div style={{
          fontSize:11, fontWeight:800, letterSpacing:'0.04em',
          color:'var(--wf-mute)', marginBottom:4,
          paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          <span className="wf-num" style={{color:'var(--wf-ink)', fontSize:12, marginRight:6}}>07 / 26</span>
          <span>SUN</span>
        </div>
        {[
          { cat: 'ATP', ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」記者会見詳報', d: '22:15' },
          { cat: 'ATP', ttl: 'メドベージェフ、右手首負傷で全米OP出場に黄信号', d: '15:00' },
          { cat: 'WTA', ttl: 'サバレンカ、シンシナティ準々決勝で敗退 世界1位に暗雲', d: '11:40' },
          { cat: 'コラム', ttl: '【解説】なぜアルカラスはシンシナティに強いのか', d: '10:00' },
        ].map((n, i) => (
          <div key={i} className="wf-row" style={{alignItems:'flex-start'}}>
            <ImgPh w={100} h={68} label="thumb" />
            <div style={{flex:1, fontSize:12, lineHeight:1.45, minWidth:0}}>
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

      {/* ── もっと読み込む ── */}
      <div style={{padding:'16px 14px 20px', textAlign:'center'}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%'}}>もっと読む</button>
      </div>
    </Phone>
  );
}

Object.assign(window, { ListNewsFrame });
