// TourSchedule.jsx — ツアー / 大会日程ページ
// 「今後の大会日程を見る」の遷移先。
// 開催中の大会 → 年月セレクタ(初期＝現在の月) → ツアー別の選択 → 大会一覧。

function TourScheduleFrame() {
  const tours = ['全ツアー', 'グランドスラム', 'ATP', 'チャレンジャー', 'WTA', '125', '国別・団体戦', 'ITF男子', 'ITF女子', 'その他'];

  // 開催中（今日 2026/08/27 時点でLIVEな大会）
  const live = [
    { grade: 'グランドスラム', name: '全米オープン', period: '08.24 – 09.07', country: 'アメリカ', surface: 'ハード（屋外）', jpn: '西岡良仁・大坂なおみ ほか' },
  ];

  // 選択中の年月（2026年8月）の大会一覧
  const month = [
    { grade: 'ATP1000 / WTA1000', name: 'シンシナティ・オープン', period: '08.10 – 08.17', country: 'アメリカ', surface: 'ハード', draw: 96, status: '終了', winner: '男 J.シナー ／ 女 A.サバレンカ' },
    { grade: 'ATP250', name: 'ウィンストン・セーラム・オープン', period: '08.17 – 08.23', country: 'アメリカ', surface: 'ハード', draw: 28, status: '終了', winner: 'F.オジェ アリアシム' },
    { grade: 'WTA250', name: 'クリーブランド・オープン', period: '08.17 – 08.23', country: 'アメリカ', surface: 'ハード', draw: 28, status: '終了', winner: 'J.ペグラ' },
    { grade: 'グランドスラム', name: '全米オープン', period: '08.24 – 09.07', country: 'アメリカ', surface: 'ハード', draw: 128, status: '開催中' },
  ];

  const h2 = {
    margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em',
    color: 'var(--wf-mute)', marginBottom: 4,
    paddingBottom: 6, borderBottom: '2px solid var(--wf-ink)',
  };

  const StatusBadge = ({ s }) => {
    if (s === '開催中') return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 9, fontWeight: 700, color: '#fff', background: 'var(--wf-clay)', padding: '1px 5px', letterSpacing: '0.04em' }}>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff', animation: 'wfPulse 1.8s infinite' }} />開催中
      </span>
    );
    if (s === '開催予定') return (
      <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--wf-mute)', background: 'var(--wf-bg-3)', border: '1px solid var(--wf-line)', padding: '1px 5px', letterSpacing: '0.04em' }}>開催予定</span>
    );
    return (
      <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--wf-mute-2)', border: '1px solid var(--wf-line)', padding: '1px 5px', letterSpacing: '0.04em' }}>終了</span>
    );
  };

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', '大会日程']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          TOUR SCHEDULE
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>大会日程</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          開催中の大会と、年月・ツアー別の大会日程をまとめてチェック。
        </div>
      </div>

      {/* ① 開催中の大会 */}
      <div style={{ padding: '14px 14px 0' }}>
        <h2 style={h2}>開催中の大会</h2>
        {live.map((t, i) => (
          <div key={i} className="wf-row" style={{ alignItems: 'flex-start' }}>
            <ImgPh w={100} h={68} label="thumb" />
            <div style={{ flex: 1, fontSize: 12, lineHeight: 1.45, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, color: 'var(--wf-mute)', marginBottom: 2 }}>
                <span style={{ color: 'var(--wf-court)', fontWeight: 700 }}>{t.grade}</span>
                <span>·</span>
                <span className="wf-num">{t.period}</span>
                <span style={{ marginLeft: 'auto' }}><StatusBadge s="開催中" /></span>
              </div>
              <div style={{ fontWeight: 700, lineHeight: 1.4 }}>{t.name}</div>
              <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 2 }}>{t.country}・{t.surface}</div>
              <div style={{ fontSize: 10, color: 'var(--wf-ink-2)', marginTop: 3, display: 'flex', gap: 4, alignItems: 'center' }}>
                <span style={{ fontSize: 8.5, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '1px 4px' }}>JPN</span>
                <span>{t.jpn}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ② 年月セレクタ（初期＝現在の月） + ③ ツアー別の選択 */}
      <div style={{ background: 'var(--wf-bg-2)', borderTop: '1px solid var(--wf-line)', borderBottom: '1px solid var(--wf-line)', padding: '12px', marginTop: 16 }}>
        {/* 年月ページャ */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          border: '1px solid var(--wf-line)', background: '#fff', padding: '8px 8px',
        }}>
          <span style={{ display: 'flex', color: 'var(--wf-ink)', padding: '0 4px' }}>{Ico.back}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 800 }}>
            2026年 8月
            <span style={{ display: 'flex', color: 'var(--wf-mute)' }}>{Ico.chevD}</span>
          </span>
          <span style={{ display: 'flex', color: 'var(--wf-ink)', padding: '0 4px', transform: 'scaleX(-1)' }}>{Ico.back}</span>
        </div>

        {/* ツアー別の選択（横スクロール） */}
        <div className="sched-tours" style={{ display: 'flex', gap: 6, overflowX: 'auto', marginTop: 10 }}>
          {tours.map((c, i) => {
            const on = i === 0;
            return (
              <div key={c} style={{
                flex: '0 0 auto', fontSize: 11.5, fontWeight: 700, whiteSpace: 'nowrap',
                padding: '6px 11px', borderRadius: 6,
                border: '1px solid ' + (on ? 'var(--wf-court)' : 'var(--wf-line)'),
                background: on ? 'var(--wf-court)' : '#fff',
                color: on ? '#fff' : 'var(--wf-ink)',
              }}>{c}</div>
            );
          })}
        </div>
      </div>

      {/* ④ 大会一覧（選択中の年月・ツアー） */}
      <div style={{ padding: '14px 14px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
          <h2 style={{ ...h2, marginBottom: 0, borderBottom: 0, paddingBottom: 0 }}>2026年8月の大会</h2>
          <span className="wf-num" style={{ fontSize: 11, color: 'var(--wf-mute)', fontWeight: 700 }}>{month.length}大会</span>
        </div>
        <div style={{ borderTop: '2px solid var(--wf-ink)' }}>
          {month.map((t, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, alignItems: 'flex-start',
              padding: '11px 0', borderBottom: '1px solid var(--wf-line)',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, color: 'var(--wf-mute)', marginBottom: 2 }}>
                  <span style={{ color: 'var(--wf-court)', fontWeight: 700 }}>{t.grade}</span>
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 700, lineHeight: 1.4 }}>{t.name}</div>
                <div className="wf-num" style={{ fontSize: 11, color: 'var(--wf-ink-2)', marginTop: 2 }}>{t.period}</div>
                <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 2 }}>{t.country}・{t.surface}{t.draw ? '・' + t.draw + 'ドロー' : ''}</div>
                {t.status === '終了' && t.winner && (
                  <div style={{ display: 'flex', gap: 5, alignItems: 'center', marginTop: 4, fontSize: 10.5 }}>
                    <span style={{ fontSize: 8.5, fontWeight: 800, color: '#fff', background: '#9a7b1f', padding: '1px 4px' }}>優勝</span>
                    <span style={{ fontWeight: 700 }}>{t.winner}</span>
                  </div>
                )}
              </div>
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <StatusBadge s={t.status} />
                <span style={{ display: 'flex', color: 'var(--wf-mute)' }}>{Ico.chev}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 下部＝年間・大会について（開いたまま・参考ページの編集要素） ── */}
      <div style={{ background: 'var(--wf-bg-2)', borderTop: '1px solid var(--wf-line)', marginTop: 8, padding: '16px 14px 14px' }}>
        <p style={{ margin: '0 0 12px', fontSize: 12, lineHeight: 1.8, color: 'var(--wf-ink-2)' }}>
          1月の全豪オープンから11月のツアーファイナルまで、世界を転戦する男子(ATP)・女子(WTA)の主要大会を集約。開催時期・会場・サーフェス・出場人数・優勝者までまとめてチェックできます。
        </p>
        {/* 年間スタッツタイル */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          {[['4', 'グランドスラム'], ['55', 'ATP（GS除く）'], ['50', 'WTA（GS除く）']].map(([n, l]) => (
            <div key={l} style={{ flex: 1, background: '#fff', border: '1px solid var(--wf-line)', borderRadius: 6, padding: '10px 4px', textAlign: 'center' }}>
              <div className="wf-num" style={{ fontSize: 22, fontWeight: 800, color: 'var(--wf-court)' }}>{n}</div>
              <div style={{ fontSize: 9, color: 'var(--wf-mute)', marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* グレード・コート早見表 */}
      <div style={{ padding: '16px 14px 0' }}>
        <h2 style={h2}>グレード・コート早見表</h2>
        <div className="wf-mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--wf-mute)', letterSpacing: '0.06em', marginBottom: 6 }}>大会グレード</div>
        <div style={{ border: '1px solid var(--wf-line)', background: '#fff' }}>
          {[
            ['GRAND SLAM', '四大大会。男女とも128ドロー'],
            ['ATP1000 / WTA1000', 'マスターズ級。96ドロー中心'],
            ['ATP500 / WTA500', '準主要大会。28〜32ドロー'],
            ['ATP250 / WTA250', 'レギュラー大会。28ドロー中心'],
            ['FINALS', '年間上位者のみのシーズン最終戦'],
            ['国別・団体戦', 'デビスカップ / BJKカップ / ユナイテッドカップ 等'],
          ].map(([g, d], i, arr) => (
            <div key={g} style={{ display: 'flex', gap: 8, padding: '8px 10px', borderBottom: i < arr.length - 1 ? '1px solid var(--wf-line-2)' : 0, alignItems: 'baseline' }}>
              <span style={{ flex: '0 0 110px', fontSize: 10, fontWeight: 800, color: 'var(--wf-court)' }}>{g}</span>
              <span style={{ flex: 1, fontSize: 10.5, color: 'var(--wf-ink-2)' }}>{d}</span>
            </div>
          ))}
        </div>
        <div className="wf-mono" style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--wf-mute)', letterSpacing: '0.06em', margin: '12px 0 6px' }}>コート（サーフェス）</div>
        <div style={{ border: '1px solid var(--wf-line)', background: '#fff' }}>
          {[
            ['ハード', '球足は中〜速め。バウンドが安定し実力が出やすい。全豪・全米など。'],
            ['クレー', '土のコート。球足が遅くバウンドが高い。長いラリー向き。全仏など。'],
            ['芝（グラス）', '球足が速くバウンドが低い。サーブが有利。ウィンブルドンなど。'],
          ].map(([n, d], i, arr) => (
            <div key={n} style={{ display: 'flex', gap: 8, padding: '8px 10px', borderBottom: i < arr.length - 1 ? '1px solid var(--wf-line-2)' : 0, alignItems: 'baseline' }}>
              <span style={{ flex: '0 0 110px', fontSize: 10, fontWeight: 800, color: 'var(--wf-court)' }}>{n}</span>
              <span style={{ flex: 1, fontSize: 10.5, color: 'var(--wf-ink-2)' }}>{d}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 大会シーズンについて */}
      <div style={{ padding: '16px 14px 4px' }}>
        <h2 style={h2}>大会シーズンについて</h2>
        {[
          ['グランドスラム', '全豪・全仏・ウィンブルドン・全米の四大大会。男女とも128ドローで、シーズンの主軸となります。'],
          ['ワールドツアー', 'ATP/WTAの1000・500・250など、世界を転戦する通常大会。サーフェスはハード・クレー・芝と多彩です。'],
          ['国別対抗戦', 'デビスカップ(男子)・BJKカップ(女子)・ユナイテッドカップ・レーバーカップなど、国や地域を背負う団体戦。'],
          ['ツアーファイナル', '年間ランキング上位者のみが出場するATP/WTAファイナルズ。長いシーズンの締めくくりを迎えます。'],
        ].map(([t, d]) => (
          <div key={t} style={{ padding: '10px 0', borderTop: '1px solid var(--wf-line-2)' }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, color: 'var(--wf-court)' }}>{t}</div>
            <div style={{ fontSize: 10.5, color: 'var(--wf-ink-2)', lineHeight: 1.6, marginTop: 2 }}>{d}</div>
          </div>
        ))}
      </div>

      <BackToTop />

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .sched-tours::-webkit-scrollbar { display: none; }
        .sched-tours { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TourScheduleFrame });
