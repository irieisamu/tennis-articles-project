// EntryList.jsx — ツアー / 出場選手一覧（大会エントリー）
// 大会ページの「出場選手をすべて見る（96名）」の遷移先。
// 種目セレクタ + シード/ランク/選手 の表。参考: Yahoo!スポーツ 大会別出場選手。

function EL_Row({ p }) {
  return (
    <a href="#" style={{
      display: 'flex', alignItems: 'center',
      borderBottom: '1px solid var(--wf-line-2)', textDecoration: 'none', color: 'inherit', background: '#fff',
    }}>
      <span className="wf-num" style={{ flex: '0 0 40px', textAlign: 'center', fontSize: 11, fontWeight: 700, color: 'var(--wf-mute)' }}>
        {p.seed ? '(' + p.seed + ')' : ''}
      </span>
      <span className="wf-num" style={{ flex: '0 0 40px', textAlign: 'center', fontSize: 12.5, fontWeight: 800, borderLeft: '1px solid var(--wf-line-2)' }}>{p.rank}</span>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', borderLeft: '1px solid var(--wf-line-2)' }}>
        <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: 'var(--wf-bg-2)', color: 'var(--wf-mute)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800 }}>{p.name.replace(/^[A-Z]\.\s*/, '').replace(/\s/g, '')[0]}</div>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {p.jp && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '0 3px' }}>JPN</span>}
            <span style={{ fontSize: 12.5, fontWeight: p.jp ? 800 : 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
            {p.note && <span style={{ fontSize: 8, fontWeight: 700, color: 'var(--wf-court)', border: '1px solid var(--wf-court)', padding: '0 3px', borderRadius: 2 }}>{p.note}</span>}
          </div>
          <div style={{ fontSize: 9, color: 'var(--wf-mute-2)' }}>{p.cc}</div>
        </div>
      </div>
    </a>
  );
}

function EntryListFrame() {
  const players = [
    { seed: 1, rank: 1, name: 'J. シナー', cc: 'ITA' },
    { seed: 2, rank: 2, name: 'C. アルカラス', cc: 'ESP' },
    { seed: 3, rank: 3, name: 'A. ズベレフ', cc: 'GER' },
    { seed: 4, rank: 4, name: 'T. フリッツ', cc: 'USA' },
    { seed: 5, rank: 5, name: 'J. ドレイパー', cc: 'GBR' },
    { seed: 6, rank: 6, name: 'A. デミノー', cc: 'AUS' },
    { seed: 7, rank: 7, name: 'D. メドベージェフ', cc: 'RUS' },
    { seed: 8, rank: 8, name: 'B. シェルトン', cc: 'USA' },
    { seed: 9, rank: 9, name: 'L. ムゼッティ', cc: 'ITA' },
    { seed: 10, rank: 10, name: 'H. ルーネ', cc: 'DEN' },
    { seed: 11, rank: 11, name: 'F. オジェ アリアシム', cc: 'CAN' },
    { seed: 12, rank: 13, name: 'G. ディミトロフ', cc: 'BUL' },
    { seed: 13, rank: 14, name: 'T. ポール', cc: 'USA' },
    { seed: 14, rank: 15, name: 'A. ルブレフ', cc: 'RUS' },
    { seed: 15, rank: 16, name: 'U. フメーア', cc: 'GER' },
    { seed: 16, rank: 18, name: 'S. チチパス', cc: 'GRE' },
    { seed: null, rank: 22, name: 'N. ジョコビッチ', cc: 'SRB' },
    { seed: 24, rank: 24, name: 'F. マロジャーン', cc: 'HUN' },
    { seed: 28, rank: 32, name: '西岡 良仁', cc: 'JPN', jp: true },
    { seed: null, rank: 34, name: 'J. フォンセカ', cc: 'BRA', note: 'Q' },
    { seed: null, rank: 45, name: '錦織 圭', cc: 'JPN', jp: true, note: 'WC' },
    { seed: null, rank: 38, name: 'C. ノリー', cc: 'GBR' },
    { seed: null, rank: 40, name: 'B. コリッチ', cc: 'CRO' },
    { seed: null, rank: 105, name: '綿貫 陽介', cc: 'JPN', jp: true, note: 'Q' },
  ];

  const jpPins = players.filter(p => p.jp);
  const h2 = { margin: 0, fontSize: 13, fontWeight: 800, borderLeft: '3px solid var(--wf-court)', paddingLeft: 8, marginBottom: 6 };

  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ATP', 'シンシナティ・オープン', '出場選手']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          ENTRY LIST
        </div>
        <h1 style={{ margin: 0, fontSize: 21, fontWeight: 800, letterSpacing: '-0.01em', lineHeight: 1.35 }}>シンシナティ・オープン 出場選手</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          ATP1000 ／ 本戦シングルス 96名
        </div>
      </div>

      {/* 種目セレクタ */}
      <div className="wf-gnav" style={{ borderBottom: '1px solid var(--wf-line)', padding: '0 6px' }}>
        {['男子シングルス', '男子ダブルス', '女子シングルス', '女子ダブルス'].map((it, i) => (
          <div key={it} className={'wf-gnav-item' + (i === 0 ? ' on' : '')}>{it}</div>
        ))}
      </div>

      {/* 更新日 */}
      <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', textAlign: 'right', padding: '8px 14px 0' }}>2026/08/10 更新</div>

      {/* 日本人選手（ピン・ランキングと同じ扱い） */}
      <div style={{ padding: '6px 14px 0' }}>
        <div style={h2}>日本人選手</div>
        <div style={{ border: '1px solid var(--wf-line)' }}>
          {jpPins.map((p, i) => <EL_Row key={i} p={p} />)}
        </div>
      </div>

      {/* 出場選手表 */}
      <div style={{ padding: '14px 14px 0' }}>
        <div style={h2}>本戦ドロー</div>
        <div style={{ border: '1px solid var(--wf-line)' }}>
          {/* 見出し行 */}
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', fontSize: 9, fontWeight: 700, color: 'var(--wf-mute)' }}>
            <span style={{ flex: '0 0 40px', textAlign: 'center', padding: '6px 0' }}>シード</span>
            <span style={{ flex: '0 0 40px', textAlign: 'center', padding: '6px 0', borderLeft: '1px solid var(--wf-line)' }}>ランク</span>
            <span style={{ flex: 1, padding: '6px 10px', borderLeft: '1px solid var(--wf-line)' }}>選手</span>
          </div>
          {players.map((p, i) => <EL_Row key={i} p={p} />)}
        </div>
        <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 8, lineHeight: 1.6 }}>
          （ ）内はシード順。<span className="wf-num">Q</span>＝予選勝ち上がり、<span className="wf-num">WC</span>＝ワイルドカード。本戦96名のうち主な選手を表示。
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
        <span style={{ fontSize: 11, color: 'var(--wf-court)', fontWeight: 700, padding: '0 6px' }}>次へ</span>
      </div>

      <BackToTop />
    </Phone>
  );
}

Object.assign(window, { EntryListFrame });
