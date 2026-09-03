// FeatureList.jsx — 特集一覧 (TOPの「特集 > もっと見る」の遷移先)
// 個別の特集ページ(01b)ではなく、特集そのものが並ぶページ。
// 特集はキービジュアルと名前で選ぶものなので、画像主体の2カラムグリッドで並べる。

function FeatureListFrame() {
  // 最終更新の新しい順で20件。更新が続いているものは「更新中」バッジを付ける。
  const features = [
    { ttl: '2026年ラケット新製品', n: 12, on: true },
    { ttl: '全米オープン2026 特集', n: 24, on: true },
    { ttl: 'アルカラス使用モデル', n: 8, on: true },
    { ttl: '錦織圭 復帰までの軌跡', n: 15, on: true },
    { ttl: '大坂なおみ 2026シーズン', n: 18, on: true },
    { ttl: '日本人選手 全米OPへの道', n: 11, on: true },
    { ttl: 'サーブが変わる10のドリル', n: 10 },
    { ttl: 'ウィンブルドン2026 特集', n: 31 },
    { ttl: '2026年ストリング徹底比較', n: 14 },
    { ttl: '初心者のためのラケット選び', n: 9 },
    { ttl: 'シューズはサーフェスで選ぶ', n: 7 },
    { ttl: '全仏オープン2026 特集', n: 28 },
    { ttl: 'クレーコートの戦い方', n: 12 },
    { ttl: 'ジュニア育成のいま', n: 16 },
    { ttl: '全豪オープン2026 特集', n: 26 },
    { ttl: 'シナー 世界1位までの2年', n: 13 },
    { ttl: 'ダブルスの基本セオリー', n: 20 },
    { ttl: '2025-26 オフシーズンの過ごし方', n: 6 },
    { ttl: 'デビスカップ2025 特集', n: 19 },
    { ttl: 'テニス肘を防ぐ体づくり', n: 8 },
  ];

  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="特集" />
      <Crumb items={['TOP', '特集']} />

      {/* ── ページヘッダ ── */}
      <div style={{padding:'14px 14px 10px', background:'#fff', borderBottom:'1px solid var(--wf-line)'}}>
        <div className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.12em', marginBottom:4}}>
          FEATURES
        </div>
        <h1 style={{margin:0, fontSize:22, fontWeight:800, letterSpacing:'-0.01em'}}>特集</h1>
        <div style={{fontSize:11, color:'var(--wf-mute)', marginTop:4, lineHeight:1.6}}>
          テーマごとに記事をまとめた特集の一覧。大会・ギア・レッスン・選手をまたいで追えます。
        </div>
      </div>

      {/* ── 特集グリッド（2カラム） ── */}
      <div style={{padding:'14px 14px 0', display:'flex', flexWrap:'wrap', gap:10}}>
        {features.map((f, i) => (
          <div key={i} style={{width:'calc(50% - 5px)'}}>
            <div style={{position:'relative'}}>
              <ImgPh w="100%" h={92} label="feature" />
              {f.on && (
                <span style={{
                  position:'absolute', left:0, top:0,
                  fontSize:9, fontWeight:800, letterSpacing:'0.04em',
                  color:'#fff', background:'var(--wf-court)', padding:'2px 6px',
                }}>更新中</span>
              )}
            </div>
            <div style={{fontSize:12, fontWeight:700, lineHeight:1.4, marginTop:5}}>{f.ttl}</div>
            <div className="wf-num" style={{fontSize:9.5, color:'var(--wf-mute)', marginTop:3}}>{f.n} 記事</div>
          </div>
        ))}
      </div>

      {/* ── もっと読み込む ── */}
      <div style={{padding:'16px 14px 0'}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%'}}>もっと見る</button>
      </div>

      <BackToTop />
    </Phone>
  );
}

Object.assign(window, { FeatureListFrame });
