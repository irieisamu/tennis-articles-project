// Feature.jsx — 特集ページ (TOPの「特集」カードの遷移先)
// 構成はシンプルに、特集名 → その特集に属する記事一覧。
// 記事の並びは 02 · 一覧/ニュース のサムネ行を踏襲。ただし特集は日付で追うものではないので
// 日付見出し（07 / 27 MON）は置かず、新着順のフラットな一覧にする。

function FeatureFrame() {
  // 1つの特集に属する記事。特集はカテゴリ横断（ギア/ニュース/レッスン）なので
  // 行ごとにカテゴリを出す。日付見出しは付けず、新着順のフラットな一覧にする。
  const articles = [
    { cat: 'ギア', ttl: '2026年新作ラケット30本を一気に試打 スペック早見表つき総まとめ', d: '2026.08.17' },
    { cat: 'ギア', ttl: 'ヨネックス EZONE 2026 レビュー 面の安定感はそのままに反発力が向上', d: '2026.08.17' },
    { cat: 'ギア', ttl: 'バボラ ピュアドライブ 2026 レビュー 硬さが取れて扱いやすく', d: '2026.08.17' },
    { cat: 'ニュース', ttl: 'アルカラス、シンシナティ決勝で使用した新プロトタイプが話題に', d: '2026.08.17' },
    { cat: 'ギア', ttl: 'ウイルソン ブレード 2026 レビュー 定番のしなり感を継承しつつ軽量化', d: '2026.08.14' },
    { cat: 'ギア', ttl: 'ヘッド スピード 2026 レビュー スピン量が明確に増えた', d: '2026.08.14' },
    { cat: 'レッスン', ttl: '【解説】新作ラケットに買い替えたら最初に確認したい3つのこと', d: '2026.08.14' },
    { cat: 'ギア', ttl: 'プリンス ファントム 2026 レビュー 薄ラケ好きに刺さる打感', d: '2026.08.14' },
    { cat: 'ギア', ttl: '2026年モデルはどう変わる？ 各社の新作ラケット発表まとめ', tag: 'PR', d: '2026.08.10' },
    { cat: 'ギア', ttl: 'ダンロップ CX 2026 レビュー コントロール重視の正常進化', d: '2026.08.10' },
    { cat: 'レッスン', ttl: 'ラケット選びで失敗しないための、面の大きさと重さの考え方', d: '2026.08.10' },
    { cat: 'ニュース', ttl: '主要メーカー4社、2026年モデルの国内発売日を一斉発表', d: '2026.08.10' },
  ];
  const total = articles.length;

  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="特集" />
      <Crumb items={['TOP', '特集', '2026年ラケット新製品']} />

      {/* ── 特集ヘッダー（特集名が主役） ── */}
      <div style={{padding:'14px 14px 0', background:'#fff'}}>
        <div className="wf-mono" style={{
          fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.12em', marginBottom:5,
        }}>
          FEATURE
        </div>
        <h1 style={{margin:'0 0 6px', fontSize:21, fontWeight:800, letterSpacing:'-0.01em', lineHeight:1.35}}>
          2026年ラケット新製品
        </h1>
        <div style={{fontSize:11.5, color:'var(--wf-ink-2)', lineHeight:1.7}}>
          各メーカーの2026年モデルを、試打レビュー・スペック比較・選び方の解説でまとめて追う特集。
          発売情報が出るたびに記事を追加します。
        </div>
        <div style={{
          display:'flex', alignItems:'center', gap:8, marginTop:8,
          fontSize:10, color:'var(--wf-mute)',
        }}>
          <span className="wf-num" style={{fontWeight:700, color:'var(--wf-ink)'}}>{total} 記事</span>
          <span>·</span>
          <span className="wf-num">最終更新 2026.08.17</span>
        </div>
        <div style={{marginTop:10}}>
          <ImgPh w="100%" h={150} label="特集キービジュアル / 2026年モデルのラケット" />
        </div>
      </div>

      {/* ── 記事一覧（新着順のフラットなリスト） ── */}
      <div style={{padding:'14px 14px 0'}}>
        {articles.map((n, i) => (
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

      {/* ── 他の特集（TOPの特集カードと同じUI：横スクロールのダークカード） ── */}
      <div style={{padding:'18px 0 0'}}>
        <div style={{
          display:'flex', alignItems:'flex-end', justifyContent:'space-between',
          margin:'0 14px 10px', paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
        }}>
          <span style={{fontSize:11, fontWeight:800, letterSpacing:'0.04em', color:'var(--wf-mute)'}}>
            他の特集
          </span>
          {/* 特集一覧(01a)へ */}
          <span style={{
            fontSize:11, fontWeight:600, color:'var(--wf-ink-2)',
            display:'inline-flex', alignItems:'center', gap:3, whiteSpace:'nowrap',
          }}>もっと見る<span style={{fontSize:9}}>›</span></span>
        </div>
        <div className="fe-others" style={{padding:'0 0 0 14px', display:'flex', gap:8, overflowX:'auto', alignItems:'flex-start'}}>
          {[
            { ttl: 'アルカラス使用モデル', n: 8 },
            { ttl: '全米オープン2026 特集', n: 24 },
            { ttl: '錦織圭 復帰までの軌跡', n: 15 },
          ].map((f, i, arr) => (
            <div key={f.ttl} style={{
              flex:'0 0 200px', marginRight: i === arr.length - 1 ? 14 : 0,
              background:'var(--wf-ink)', color:'#fff', overflow:'hidden',
            }}>
              <ImgPh w="100%" h={133} label="feature" dark={true} />
              <div style={{padding:'8px 10px 10px'}}>
                <div style={{fontSize:9, color:'var(--wf-court-soft)', letterSpacing:'0.08em', fontWeight:800}}>FEATURE</div>
                <div style={{fontSize:12, fontWeight:700, marginTop:3, color:'#fff', lineHeight:1.3}}>{f.ttl}</div>
                <div className="wf-num" style={{fontSize:10, color:'#c5c3bc', marginTop:4}}>{f.n} 記事</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BackToTop />

      <style>{`
        .fe-others::-webkit-scrollbar { display: none; }
        .fe-others { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { FeatureFrame });
