// PlayerList.jsx — ツアー / 選手一覧
// 「選手情報 > もっと見る」の遷移先。ハイブリッド:
//   探す導線 + 日本人選手(ピックアップ) + 注目選手(世界トップ) + 「ランキングで全選手を見る」。

function PL_Card({ p }) {
  return (
    <a href="#" style={{
      width: 'calc(50% - 4px)', border: '1px solid var(--wf-line)', background: '#fff',
      padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center',
      textDecoration: 'none', color: 'inherit',
    }}>
      <div style={{
        width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
        background: 'var(--wf-bg-2)', color: 'var(--wf-mute)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800,
      }}>{p.name[0]}</div>
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {p.jp && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '0 3px' }}>JPN</span>}
          <span style={{ fontSize: 12, fontWeight: 800, lineHeight: 1.3, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
        </div>
        <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 2 }}>
          {p.tour} 世界{p.rank}位{p.cc ? ' ・ ' + p.cc : ''}
        </div>
      </div>
    </a>
  );
}

function PlayerListFrame() {
  const h2 = {
    margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em',
    color: 'var(--wf-mute)', marginBottom: 8, paddingBottom: 6, borderBottom: '2px solid var(--wf-ink)',
  };

  const jp = [
    { name: '西岡 良仁', tour: 'ATP', rank: 32, jp: true },
    { name: '錦織 圭', tour: 'ATP', rank: 45, jp: true },
    { name: '大坂 なおみ', tour: 'WTA', rank: 15, jp: true },
    { name: '望月 慎太郎', tour: 'ATP', rank: 98, jp: true },
    { name: '日比野 菜緒', tour: 'WTA', rank: 68, jp: true },
    { name: 'ダニエル 太郎', tour: 'ATP', rank: 132, jp: true },
    { name: '内島 萌夏', tour: 'WTA', rank: 74, jp: true },
    { name: '綿貫 陽介', tour: 'ATP', rank: 105, jp: true },
  ];

  const atp = [
    { name: 'J. シナー', tour: 'ATP', rank: 1, cc: 'ITA' },
    { name: 'C. アルカラス', tour: 'ATP', rank: 2, cc: 'ESP' },
    { name: 'A. ズベレフ', tour: 'ATP', rank: 3, cc: 'GER' },
    { name: 'T. フリッツ', tour: 'ATP', rank: 4, cc: 'USA' },
  ];
  const wta = [
    { name: 'A. サバレンカ', tour: 'WTA', rank: 1, cc: 'BLR' },
    { name: 'I. シフィオンテク', tour: 'WTA', rank: 2, cc: 'POL' },
    { name: 'C. ガウフ', tour: 'WTA', rank: 3, cc: 'USA' },
    { name: 'J. ペグラ', tour: 'WTA', rank: 4, cc: 'USA' },
  ];

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', '選手']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          PLAYERS
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>選手</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          日本人選手と世界の注目選手をピックアップ。名前・ツアーから探せます。全選手はランキングから。
        </div>
      </div>

      {/* 探す導線 */}
      <div style={{ background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', padding: '12px' }}>
        {/* キーワード */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, height: 40, padding: '0 12px',
          border: '1px solid var(--wf-line)', background: '#fff', fontSize: 12, color: 'var(--wf-mute)',
        }}>
          <span style={{ display: 'flex', color: 'var(--wf-mute-2)' }}>{Ico.search}</span>選手名で検索
        </div>
      </div>

      {/* ① 日本人選手（ピックアップ） */}
      <div style={{ padding: '14px 14px 0' }}>
        <h2 style={h2}>日本人選手</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {jp.map((p, i) => <PL_Card key={i} p={p} />)}
        </div>
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 10 }}>日本人選手をすべて見る</button>
      </div>

      {/* ② 注目選手（世界トップ） */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>注目選手（世界トップ）</h2>
        <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--wf-court)', marginBottom: 6 }}>ATP</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {atp.map((p, i) => <PL_Card key={i} p={p} />)}
        </div>
        <div style={{ fontSize: 10, fontWeight: 800, color: 'var(--wf-court)', margin: '12px 0 6px' }}>WTA</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {wta.map((p, i) => <PL_Card key={i} p={p} />)}
        </div>
      </div>

      {/* ③ 全選手はランキングから */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>全選手を探す</h2>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', lineHeight: 1.6, marginBottom: 8 }}>
          掲載外の選手は、世界ランキングから探せます。
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['ATP世界ランキング', 'WTA世界ランキング'].map(r => (
            <div key={r} style={{
              flex: 1, border: '1px solid var(--wf-line)', background: '#fff',
              padding: '10px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              fontSize: 11, fontWeight: 700, color: 'var(--wf-court)',
            }}>
              <span>{r}</span>
              <span style={{ display: 'flex' }}>{Ico.chev}</span>
            </div>
          ))}
        </div>
      </div>

      <BackToTop />
    </Phone>
  );
}

Object.assign(window, { PlayerListFrame });
