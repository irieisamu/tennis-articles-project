// PlayerSearch.jsx — ツアー / 選手検索（サジェスト表示中の状態）
// 選手一覧の「選手名で検索」に入力した瞬間のUX。
// 入力中サジェスト（日本人・上位を優先、記事数バッジ、タップで選手ページ直行）。

function PS_Suggest({ p }) {
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px',
      borderBottom: '1px solid var(--wf-line-2)', textDecoration: 'none', color: 'inherit',
    }}>
      <div style={{
        width: 30, height: 30, borderRadius: '50%', flexShrink: 0,
        background: 'var(--wf-bg-2)', color: 'var(--wf-mute)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800,
      }}>{p.name.replace(/\s/g, '')[0]}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {p.jp && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '0 3px' }}>JPN</span>}
          <span style={{ fontSize: 12.5, fontWeight: 800 }}>{p.name}</span>
        </div>
        <div className="wf-num" style={{ fontSize: 9.5, color: 'var(--wf-mute)', marginTop: 1 }}>{p.tour} 世界{p.rank}位</div>
      </div>
      <span style={{ flexShrink: 0, fontSize: 9, fontWeight: 700, color: 'var(--wf-court)', background: 'var(--wf-court-soft)', border: '1px solid #cfe0d4', padding: '1px 5px', borderRadius: 3 }}>記事 {p.articles}</span>
      <span style={{ display: 'flex', color: 'var(--wf-mute-2)', flexShrink: 0 }}>{Ico.chev}</span>
    </a>
  );
}

function PlayerSearchFrame() {
  const suggests = [
    { name: '西岡 良仁', tour: 'ATP', rank: 32, jp: true, articles: 12 },
    { name: '錦織 圭', tour: 'ATP', rank: 45, jp: true, articles: 48 },
  ];
  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', '選手', '検索']} />

      {/* 検索フィールド（フォーカス中・入力あり） */}
      <div style={{ padding: '12px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, height: 40, padding: '0 10px',
          border: '2px solid var(--wf-court)', background: '#fff',
        }}>
          <span style={{ display: 'flex', color: 'var(--wf-court)' }}>{Ico.search}</span>
          <span style={{ flex: 1, fontSize: 13, color: 'var(--wf-ink)', fontWeight: 600 }}>
            にし<span style={{ borderLeft: '1.5px solid var(--wf-court)', marginLeft: 1 }} />
          </span>
          <span style={{
            width: 18, height: 18, borderRadius: '50%', background: 'var(--wf-bg-3)', color: 'var(--wf-mute)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, flexShrink: 0,
          }}>×</span>
        </div>
        <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 6 }}>選手名（かな・漢字・アルファベット）で検索</div>
      </div>

      {/* サジェスト（候補） */}
      <div style={{ padding: '10px 14px 0' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--wf-mute)', letterSpacing: '0.06em', marginBottom: 6 }}>候補</div>
        <div style={{ border: '1px solid var(--wf-line)', background: '#fff' }}>
          {suggests.map((p, i) => <PS_Suggest key={i} p={p} />)}
          <a href="#" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '9px 10px', fontSize: 11, fontWeight: 700, color: 'var(--wf-court)', textDecoration: 'none',
          }}>
            <span>「にし」を含む選手をすべて見る（2件）</span>
            <span style={{ display: 'flex' }}>{Ico.chev}</span>
          </a>
        </div>
        <div style={{ marginTop: 8 }}>
          <Anno>入力中はサジェスト表示。日本人・上位を優先し、記事数バッジで情報量の多い選手が分かる。タップで選手ページへ直行、単一ヒットは選手ページに直行、0件は「該当なし＋ランキングから探す」。</Anno>
        </div>
      </div>

    </Phone>
  );
}

Object.assign(window, { PlayerSearchFrame });
