// TVSchedule.jsx — ツアー / TV放送・配信予定（全大会横断）
// 大会ページの「TV放送予定一覧」ボタンの遷移先。
// 大会ごとのブロック（開閉可）→ 媒体別（地上波/BS/配信）→ 局・サービス → 日時行（LIVE/録画）。
// 参考: 放送予定ページ（大会ごとに媒体別で列挙する形式）。運用は各行テキスト入力を想定。

function TVScheduleFrame() {
  const events = [
    {
      period: '2026-08-24 〜 2026-09-07',
      grade: 'グランドスラム',
      name: '全米オープン',
      groups: [
        {
          media: 'BS・CS', outlets: [
            {
              name: 'WOWOWライブ', slots: [
                { d: '8月28日（木）', t: '23:00〜翌7:00', tag: 'LIVE' },
                { d: '8月29日（金）', t: '23:00〜翌7:00', tag: 'LIVE' },
                { d: '8月30日（土）', t: '22:00〜翌8:00', tag: 'LIVE' },
              ],
            },
          ],
        },
        {
          media: 'インターネット配信', outlets: [
            {
              name: 'WOWOWオンデマンド', slots: [
                { d: '8月24日（月）〜9月7日（日）', t: '全コートLIVE', tag: 'LIVE' },
              ],
            },
            {
              name: 'DAZN', slots: [
                { d: '8月28日（木）', t: '24:00〜', tag: 'LIVE' },
                { d: '8月29日（金）', t: '24:00〜', tag: 'LIVE' },
              ],
            },
          ],
        },
      ],
    },
    {
      period: '2026-09-12 〜 2026-09-14',
      grade: '国別・団体戦',
      name: 'デビスカップ 予選ラウンド',
      groups: [
        {
          media: 'インターネット配信', outlets: [
            {
              name: 'DAZN', slots: [
                { d: '9月12日（金）', t: '18:00〜', tag: 'LIVE' },
                { d: '9月13日（土）', t: '18:00〜', tag: 'LIVE' },
                { d: '9月14日（日）', t: '18:00〜', tag: 'LIVE' },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'TV放送・配信']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          TV / STREAMING
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>TV放送・配信予定</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          テレビ放送・ネット配信の予定を大会ごとにまとめてチェック。
        </div>
      </div>

      {/* 大会ごとのブロック（開閉可） */}
      <div style={{ padding: '12px 14px 0' }}>
        {events.map((e, ei) => (
          <details key={ei} className="tv-acc" open style={{ border: '1px solid var(--wf-line)', background: '#fff', marginBottom: 12 }}>
            <summary style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '10px 12px', cursor: 'pointer' }}>
              <div style={{ minWidth: 0 }}>
                <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginBottom: 3 }}>{e.period}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ fontSize: 8.5, fontWeight: 800, color: '#fff', background: 'var(--wf-court)', padding: '1px 5px', letterSpacing: '0.04em' }}>{e.grade}</span>
                  <span style={{ fontSize: 14, fontWeight: 800 }}>{e.name}</span>
                </div>
              </div>
              <span className="tv-chev" style={{ display: 'flex', color: 'var(--wf-mute)', flexShrink: 0 }}>{Ico.chevD}</span>
            </summary>

            <div style={{ borderTop: '1px solid var(--wf-line)', padding: '12px' }}>
              {e.groups.map((g, gi) => (
                <div key={gi} style={{ marginBottom: gi < e.groups.length - 1 ? 14 : 6 }}>
                  <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontSize: 9, color: 'var(--wf-mute)' }}>▼</span>{g.media}
                  </div>
                  {g.outlets.map((o, oi) => (
                    <div key={oi} style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--wf-ink-2)', paddingBottom: 4, borderBottom: '1px solid var(--wf-line-2)', marginBottom: 4 }}>{o.name}</div>
                      {o.slots.map((sl, si) => (
                        <div key={si} style={{ display: 'flex', gap: 8, alignItems: 'center', fontSize: 11.5, lineHeight: 1.9, color: 'var(--wf-ink-2)' }}>
                          <span className="wf-num" style={{ flex: '0 0 130px' }}>{sl.d}</span>
                          <span className="wf-num" style={{ flex: 1, minWidth: 0 }}>{sl.t}</span>
                          <span style={{
                            flexShrink: 0, fontSize: 8.5, fontWeight: 700, letterSpacing: '0.04em',
                            color: sl.tag === 'LIVE' ? '#fff' : 'var(--wf-mute)',
                            background: sl.tag === 'LIVE' ? 'var(--wf-clay)' : 'var(--wf-bg-3)',
                            border: sl.tag === 'LIVE' ? 'none' : '1px solid var(--wf-line)',
                            padding: '1px 5px',
                          }}>{sl.tag === 'LIVE' ? 'LIVE' : '録画'}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              <div style={{ fontSize: 10, color: 'var(--wf-mute)', margin: '6px 0 10px' }}>※放送・配信予定は変更になる場合があります。</div>
              <a href="#" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '10px 12px', border: '1px solid var(--wf-line)',
                fontSize: 12, fontWeight: 700, color: 'var(--wf-court)', textDecoration: 'none',
              }}>
                <span>大会の情報を見る</span>
                <span style={{ display: 'flex', color: 'var(--wf-mute)' }}>{Ico.chev}</span>
              </a>
            </div>
          </details>
        ))}
      </div>

      <BackToTop />

      <style>{`
        .tv-acc > summary { list-style: none; }
        .tv-acc > summary::-webkit-details-marker { display: none; }
        .tv-acc[open] .tv-chev { transform: rotate(180deg); }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TVScheduleFrame });
