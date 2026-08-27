// Ranking.jsx — ツアー / ランキング
// 「世界ランキング / レースランキング もっと見る」「全選手を探す」の遷移先。
// ツアー(ATP/WTA) × 種目(シングルス/ダブルス) × 種別(世界/レース) を切り替えて表示。
// 参考: tennis365 ランキング / Yahoo!スポーツ ATPランキング。

function RankRow({ r, jp }) {
  // r.mv: 前回比（正=上昇 / 負=下降 / 0=変わらず / null=NEW）
  const mv = r.mv;
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8, padding: '9px 10px',
      borderBottom: '1px solid var(--wf-line-2)', background: '#fff',
    }}>
      <span className="wf-num" style={{ flex: '0 0 22px', textAlign: 'center', fontSize: 15, fontWeight: 800, color: r.rank <= 3 ? 'var(--wf-court)' : 'var(--wf-ink)' }}>{r.rank}</span>
      <span style={{ flex: '0 0 30px', textAlign: 'center', fontSize: 9.5, fontWeight: 800 }}>
        {mv == null ? <span style={{ color: 'var(--wf-clay)' }}>NEW</span>
          : mv > 0 ? <span style={{ color: '#1d7a3e' }}>▲{mv}</span>
            : mv < 0 ? <span style={{ color: 'var(--wf-clay)' }}>▼{-mv}</span>
              : <span style={{ color: 'var(--wf-mute-2)' }}>–</span>}
      </span>
      <div style={{
        width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
        background: 'var(--wf-bg-2)', color: 'var(--wf-mute)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800,
      }}>{r.name.replace(/^[A-Z]\.\s*/, '')[0]}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {jp && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '0 3px' }}>JPN</span>}
          <span style={{ fontSize: 12.5, fontWeight: jp ? 800 : 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.name}</span>
        </div>
        <div style={{ fontSize: 9, color: 'var(--wf-mute-2)' }}>{r.cc}</div>
      </div>
      <span className="wf-num" style={{ flexShrink: 0, fontSize: 12.5, fontWeight: 800, textAlign: 'right' }}>{r.pts}<span style={{ fontSize: 9, color: 'var(--wf-mute)', fontWeight: 500 }}> pts</span></span>
    </div>
  );
}

function RankingFrame() {
  // 日本人選手（ピン表示：ページ外でも位置が分かる）
  const jpPins = [
    { rank: 32, mv: 1, name: '西岡 良仁', cc: 'JPN', pts: '1,780' },
    { rank: 45, mv: -2, name: '錦織 圭', cc: 'JPN', pts: '1,260' },
  ];

  // ATP世界ランキング（1ページ＝50人）
  const rows = [
    { rank: 1, mv: 0, name: 'J. シナー', cc: 'ITA', pts: '11,540' },
    { rank: 2, mv: 0, name: 'C. アルカラス', cc: 'ESP', pts: '9,720' },
    { rank: 3, mv: 0, name: 'A. ズベレフ', cc: 'GER', pts: '6,190' },
    { rank: 4, mv: 1, name: 'T. フリッツ', cc: 'USA', pts: '5,110' },
    { rank: 5, mv: 1, name: 'J. ドレイパー', cc: 'GBR', pts: '4,900' },
    { rank: 6, mv: -2, name: 'A. デミノー', cc: 'AUS', pts: '4,750' },
    { rank: 7, mv: 0, name: 'D. メドベージェフ', cc: 'RUS', pts: '4,400' },
    { rank: 8, mv: 2, name: 'B. シェルトン', cc: 'USA', pts: '3,980' },
    { rank: 9, mv: -1, name: 'L. ムゼッティ', cc: 'ITA', pts: '3,700' },
    { rank: 10, mv: 0, name: 'H. ルーネ', cc: 'DEN', pts: '3,450' },
    { rank: 11, mv: 3, name: 'F. オジェ アリアシム', cc: 'CAN', pts: '3,210' },
    { rank: 12, mv: null, name: 'L. ティエン', cc: 'USA', pts: '3,050' },
    { rank: 13, mv: -1, name: 'G. ディミトロフ', cc: 'BUL', pts: '2,960' },
    { rank: 14, mv: 1, name: 'T. ポール', cc: 'USA', pts: '2,900' },
    { rank: 15, mv: -1, name: 'A. ルブレフ', cc: 'RUS', pts: '2,850' },
    { rank: 16, mv: 2, name: 'U. フメーア', cc: 'GER', pts: '2,760' },
    { rank: 17, mv: 0, name: 'F. セルンドロ', cc: 'ARG', pts: '2,680' },
    { rank: 18, mv: -2, name: 'S. チチパス', cc: 'GRE', pts: '2,600' },
    { rank: 19, mv: 1, name: 'A. ミケルセン', cc: 'USA', pts: '2,540' },
    { rank: 20, mv: 3, name: 'J. メンシク', cc: 'CZE', pts: '2,480' },
    { rank: 21, mv: -1, name: 'A. フィス', cc: 'FRA', pts: '2,400' },
    { rank: 22, mv: -1, name: 'N. ジョコビッチ', cc: 'SRB', pts: '2,350' },
    { rank: 23, mv: 2, name: 'M. ベレッティーニ', cc: 'ITA', pts: '2,300' },
    { rank: 24, mv: 5, name: 'F. マロジャーン', cc: 'HUN', pts: '2,250' },
    { rank: 25, mv: -1, name: 'D. アルトマイアー', cc: 'GER', pts: '2,180' },
    { rank: 26, mv: 3, name: 'A. ブブリク', cc: 'KAZ', pts: '2,120' },
    { rank: 27, mv: 0, name: 'T. グリークスプール', cc: 'NED', pts: '2,070' },
    { rank: 28, mv: 1, name: 'N. ボルジェス', cc: 'POR', pts: '2,010' },
    { rank: 29, mv: -2, name: 'R. バティスタ アグート', cc: 'ESP', pts: '1,960' },
    { rank: 30, mv: 1, name: 'M. コルダ', cc: 'USA', pts: '1,900' },
    { rank: 31, mv: -1, name: 'S. バエズ', cc: 'ARG', pts: '1,850' },
    { rank: 32, mv: 1, name: '西岡 良仁', cc: 'JPN', pts: '1,780', jp: true },
    { rank: 33, mv: 2, name: 'A. タビロ', cc: 'CHI', pts: '1,740' },
    { rank: 34, mv: 4, name: 'J. フォンセカ', cc: 'BRA', pts: '1,700' },
    { rank: 35, mv: -1, name: 'M. フチョビッチ', cc: 'HUN', pts: '1,660' },
    { rank: 36, mv: 1, name: 'D. シャポバロフ', cc: 'CAN', pts: '1,620' },
    { rank: 37, mv: -2, name: 'A. モルカン', cc: 'SVK', pts: '1,580' },
    { rank: 38, mv: 0, name: 'C. ノリー', cc: 'GBR', pts: '1,540' },
    { rank: 39, mv: 1, name: 'P. マルティネス', cc: 'ESP', pts: '1,500' },
    { rank: 40, mv: -1, name: 'B. コリッチ', cc: 'CRO', pts: '1,460' },
    { rank: 41, mv: 0, name: 'D. ラヨビッチ', cc: 'SRB', pts: '1,420' },
    { rank: 42, mv: -1, name: 'J. ストルフ', cc: 'GER', pts: '1,380' },
    { rank: 43, mv: 2, name: 'L. ソネゴ', cc: 'ITA', pts: '1,340' },
    { rank: 44, mv: 1, name: 'M. ジロン', cc: 'USA', pts: '1,300' },
    { rank: 45, mv: -2, name: '錦織 圭', cc: 'JPN', pts: '1,260', jp: true },
    { rank: 46, mv: 0, name: 'J. ムナール', cc: 'ESP', pts: '1,230' },
    { rank: 47, mv: 1, name: 'T. モンテイロ', cc: 'BRA', pts: '1,200' },
    { rank: 48, mv: -1, name: 'F. コボリ', cc: 'ITA', pts: '1,170' },
    { rank: 49, mv: 3, name: 'A. ウォルトン', cc: 'AUS', pts: '1,140' },
    { rank: 50, mv: -1, name: 'B. ナカシマ', cc: 'USA', pts: '1,110' },
  ];

  const Seg = ({ items, active }) => (
    <div style={{ display: 'flex', border: '1px solid var(--wf-line)', background: 'var(--wf-bg-2)', padding: 2, flex: 1 }}>
      {items.map((t, i) => (
        <div key={t} style={{
          flex: 1, textAlign: 'center', padding: '5px 0', fontSize: 11, fontWeight: 700,
          background: i === active ? '#fff' : 'transparent',
          color: i === active ? 'var(--wf-ink)' : 'var(--wf-mute)',
          border: i === active ? '1px solid var(--wf-line)' : '1px solid transparent',
        }}>{t}</div>
      ))}
    </div>
  );

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ランキング']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          RANKING
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>ランキング</h1>
      </div>

      {/* セレクタ：ツアー / 種目 / 種別 */}
      <div style={{ background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', padding: '12px' }}>
        {/* ATP / WTA */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
          {['ATP', 'WTA'].map((c, i) => {
            const on = i === 0;
            return (
              <div key={c} style={{
                flex: 1, textAlign: 'center', fontSize: 12.5, fontWeight: 800, padding: '7px 0', borderRadius: 6,
                border: '1px solid ' + (on ? 'var(--wf-court)' : 'var(--wf-line)'),
                background: on ? 'var(--wf-court)' : '#fff', color: on ? '#fff' : 'var(--wf-ink)',
              }}>{c}</div>
            );
          })}
        </div>
        {/* 種目 / 種別 */}
        <div style={{ display: 'flex', gap: 6 }}>
          <Seg items={['シングルス', 'ダブルス']} active={0} />
          <Seg items={['世界', 'レース']} active={0} />
        </div>
      </div>

      {/* 更新日 */}
      <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', textAlign: 'right', padding: '8px 14px 0' }}>2026/08/25 更新</div>

      {/* 日本人選手（ピン） */}
      <div style={{ padding: '4px 14px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 800, borderLeft: '3px solid var(--wf-court)', paddingLeft: 8, margin: '4px 0 6px' }}>日本人選手</div>
        <div style={{ border: '1px solid var(--wf-line)' }}>
          {jpPins.map((r, i) => <RankRow key={i} r={r} jp />)}
        </div>
      </div>

      {/* ランキング表 */}
      <div style={{ padding: '14px 14px 0' }}>
        <div style={{ fontSize: 13, fontWeight: 800, borderLeft: '3px solid var(--wf-court)', paddingLeft: 8, marginBottom: 6 }}>ATP世界ランキング</div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 6 }}>
          <div className="wf-num" style={{ fontSize: 11, fontWeight: 700, color: 'var(--wf-mute)' }}>1〜50位</div>
          <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)' }}>全 500人</div>
        </div>
        <div style={{ border: '1px solid var(--wf-line)' }}>
          {/* 見出し行 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 10px', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', fontSize: 9, fontWeight: 700, color: 'var(--wf-mute)' }}>
            <span style={{ flex: '0 0 22px', textAlign: 'center' }}>順位</span>
            <span style={{ flex: '0 0 30px', textAlign: 'center' }}>前回</span>
            <span style={{ flex: 1 }}>選手</span>
            <span>ポイント</span>
          </div>
          {rows.map((r, i) => <RankRow key={i} r={r} jp={r.jp} />)}
        </div>
      </div>

      {/* ページネーション */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '14px 14px 6px' }}>
        <span style={{ fontSize: 11, color: 'var(--wf-mute-2)', padding: '0 6px' }}>前へ</span>
        {['1', '2', '3'].map((p, i) => (
          <span key={p} className="wf-num" style={{
            width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 700, borderRadius: 4,
            border: '1px solid ' + (i === 0 ? 'var(--wf-court)' : 'var(--wf-line)'),
            background: i === 0 ? 'var(--wf-court)' : '#fff', color: i === 0 ? '#fff' : 'var(--wf-ink)',
          }}>{p}</span>
        ))}
        <span style={{ fontSize: 11, color: 'var(--wf-mute)' }}>…</span>
        <span className="wf-num" style={{ width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, borderRadius: 4, border: '1px solid var(--wf-line)' }}>10</span>
        <span style={{ fontSize: 11, color: 'var(--wf-court)', fontWeight: 700, padding: '0 6px' }}>次へ</span>
      </div>

      <BackToTop />
    </Phone>
  );
}

Object.assign(window, { RankingFrame });
