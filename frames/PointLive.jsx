// PointLive.jsx — ツアー / 1ポイント速報（ライブ）
// タブ無し・縦スクロール。スコアボード → 試合経過(グリッド＋現ゲームのポイント経過)
//   → 応援コメント(常時) → 関連記事。
// ※スタッツ・過去戦績(H2H)は運用負荷のため今回は入れない。

function PointLiveFrame() {
  const h2 = {
    margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em',
    color: 'var(--wf-mute)', marginBottom: 4, paddingBottom: 6, borderBottom: '2px solid var(--wf-ink)',
  };

  // 選手（島袋=JPN が サーブ中）
  const players = [
    { name: '島袋 将', cc: 'JPN', seed: null, jp: true, serve: true, pts: '30', sets: [6, 3, 4], won: 1 },
    { name: 'B. シェルトン', cc: 'USA', seed: 5, jp: false, serve: false, pts: '40', sets: [4, 6, 5], won: 1 },
  ];

  // 第3セットのゲーム経過（○キープ / ◎ブレーク / ★タイブレーク、勝者の行にマーク）
  const set3 = [
    { w: 0, t: '○' }, { w: 1, t: '○' }, { w: 0, t: '○' }, { w: 1, t: '◎' }, { w: 1, t: '○' },
    { w: 0, t: '◎' }, { w: 0, t: '○' }, { w: 1, t: '○' }, { w: 1, t: '◎' }, { w: -1, t: '' },
  ];

  // 現在のゲーム（第10ゲーム・島袋サーブ）の1ポイント経過（最新が上）
  const points = [
    { score: '30-40', desc: 'シェルトンのバックハンドがライン際に決まりブレークポイント', bp: true },
    { score: '30-30', desc: '島袋のダブルフォルト' },
    { score: '30-15', desc: '島袋、サーブ&ボレーで前に詰めて決める' },
    { score: '15-15', desc: 'シェルトンのリターンエース' },
    { score: '15-0', desc: '島袋、1stサーブからフォアで押し込む' },
  ];

  const comments = [
    { u: 'テニス大好きさん', d: '08/27 09:41', t: '島袋がんばれ！ここ粘って！' },
    { u: 'テニス大好きさん', d: '08/27 09:40', t: 'ダブルフォルトもったいない…' },
    { u: 'テニス大好きさん', d: '08/27 09:38', t: 'このセット取れば流れくる' },
  ];

  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ATP', 'ウィンストン・セーラム', '島袋 vs シェルトン']} />

      {/* ── A. スコアボード ── */}
      <div style={{ padding: '12px 14px 14px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 10, fontWeight: 800,
            color: '#fff', background: 'var(--wf-clay)', padding: '2px 6px', letterSpacing: '0.06em',
          }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'wfPulse 1.6s infinite' }} />LIVE
          </span>
          <span style={{ fontSize: 11, fontWeight: 700 }}>試合中</span>
          <span style={{ fontSize: 10, color: 'var(--wf-mute)' }}>準々決勝</span>
          {/* 自動更新トグル */}
          <label style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 10, color: 'var(--wf-mute)', fontWeight: 700 }}>
            自動更新
            <span style={{ width: 30, height: 17, borderRadius: 9, background: 'var(--wf-court)', position: 'relative', flexShrink: 0 }}>
              <span style={{ position: 'absolute', top: 2, right: 2, width: 13, height: 13, borderRadius: '50%', background: '#fff' }} />
            </span>
          </label>
        </div>
        <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginBottom: 8 }}>
          ウィンストン・セーラム・オープン ・ ハード ・ 8/27(木) 9:20〜
        </div>

        {/* PTS + 各セット */}
        <div style={{ border: '1px solid var(--wf-line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', fontSize: 9, fontWeight: 700, color: 'var(--wf-mute)' }}>
            <span style={{ flex: 1 }} />
            <span style={{ width: 40, textAlign: 'center' }}>PTS</span>
            <span style={{ width: 26, textAlign: 'center' }}>1</span>
            <span style={{ width: 26, textAlign: 'center' }}>2</span>
            <span style={{ width: 26, textAlign: 'center', background: 'var(--wf-bg-3)' }}>3</span>
          </div>
          {players.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', padding: '8px 0',
              borderBottom: i === 0 ? '1px solid var(--wf-line-2)' : 0,
            }}>
              <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 8, paddingLeft: 10 }}>
                <ImgPh w={30} h={30} label="" style={{ borderRadius: '50%', flexShrink: 0, padding: 0 }} />
                <span style={{ width: 6, flexShrink: 0, color: 'var(--wf-court)', fontWeight: 900, visibility: p.serve ? 'visible' : 'hidden' }}>●</span>
                <div style={{ minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {p.jp && <span style={{ fontSize: 8, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '0 3px' }}>JPN</span>}
                    <span style={{ fontSize: 12.5, fontWeight: p.jp ? 800 : 700 }}>{p.name}</span>
                    {p.seed && <span className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)' }}>({p.seed})</span>}
                  </div>
                  <div style={{ fontSize: 8.5, color: 'var(--wf-mute-2)' }}>{p.cc}</div>
                </div>
              </div>
              <span className="wf-num" style={{ width: 40, textAlign: 'center', fontSize: 18, fontWeight: 800, color: p.pts === '40' && !p.serve ? 'var(--wf-clay)' : 'var(--wf-ink)' }}>{p.pts}</span>
              {p.sets.map((s, si) => (
                <span key={si} className="wf-num" style={{
                  width: 26, textAlign: 'center', fontSize: 14,
                  fontWeight: (si === 2) ? 800 : (s > players[1 - i].sets[si] ? 800 : 500),
                  color: (s > players[1 - i].sets[si]) ? 'var(--wf-ink)' : 'var(--wf-mute)',
                  background: si === 2 ? 'var(--wf-bg-3)' : 'transparent',
                }}>{s}</span>
              ))}
            </div>
          ))}
        </div>
        <div style={{ fontSize: 10, color: 'var(--wf-clay)', fontWeight: 700, marginTop: 6 }}>● ブレークポイント（シェルトン）</div>
      </div>

      {/* ── B. 試合経過（グリッド + 現ゲームの1ポイント経過） ── */}
      <div style={{ padding: '14px 14px 0' }}>
        <h2 style={h2}>試合経過</h2>

        {/* セット選択（局所セレクタ・タブではない） */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
          {['第1セット', '第2セット', '第3セット'].map((s, i) => {
            const on = i === 2;
            return (
              <div key={s} style={{
                fontSize: 11, fontWeight: 700, padding: '5px 8px', borderRadius: 4,
                border: '1px solid ' + (on ? 'var(--wf-court)' : 'var(--wf-line)'),
                background: on ? 'var(--wf-court)' : '#fff', color: on ? '#fff' : 'var(--wf-mute)',
              }}>{s}</div>
            );
          })}
        </div>

        {/* ゲーム別グリッド（横スクロール） */}
        <div className="pl-grid" style={{ overflowX: 'auto', border: '1px solid var(--wf-line)' }}>
          <div style={{ minWidth: 340 }}>
            <div style={{ display: 'flex', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', fontSize: 9, fontWeight: 700, color: 'var(--wf-mute)' }}>
              <span style={{ flex: '0 0 62px' }} />
              {set3.map((g, i) => <span key={i} style={{ flex: 1, textAlign: 'center', padding: '4px 0' }}>{i + 1}</span>)}
              <span style={{ flex: '0 0 30px', textAlign: 'center', borderLeft: '1px solid var(--wf-line)' }}>計</span>
            </div>
            {players.map((p, pi) => (
              <div key={pi} style={{ display: 'flex', alignItems: 'center', borderBottom: pi === 0 ? '1px solid var(--wf-line-2)' : 0 }}>
                <span style={{ flex: '0 0 62px', fontSize: 10, fontWeight: 700, paddingLeft: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
                {set3.map((g, i) => (
                  <span key={i} style={{ flex: 1, textAlign: 'center', padding: '7px 0', fontSize: 12, color: g.t === '◎' ? 'var(--wf-clay)' : 'var(--wf-ink)', fontWeight: g.t === '◎' ? 800 : 500 }}>
                    {g.w === pi ? g.t : ''}
                  </span>
                ))}
                <span className="wf-num" style={{ flex: '0 0 30px', textAlign: 'center', fontSize: 12, fontWeight: 800, borderLeft: '1px solid var(--wf-line-2)' }}>{p.sets[2]}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ fontSize: 9.5, color: 'var(--wf-mute)', marginTop: 6 }}>○ キープ ／ ◎ ブレーク ／ ★ タイブレーク獲得</div>

        {/* 現在のゲームの1ポイント経過（＝1ポイント速報の核） */}
        <div style={{ marginTop: 12, border: '1px solid var(--wf-line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)' }}>
            <span style={{ fontSize: 8, fontWeight: 800, color: '#fff', background: 'var(--wf-clay)', padding: '1px 4px' }}>LIVE</span>
            <span style={{ fontSize: 11.5, fontWeight: 800 }}>第10ゲーム</span>
            <span style={{ fontSize: 10, color: 'var(--wf-mute)' }}>島袋 サーブ</span>
            <span className="wf-num" style={{ marginLeft: 'auto', fontSize: 13, fontWeight: 800 }}>30-40</span>
          </div>
          {points.map((pt, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 10px', borderBottom: i < points.length - 1 ? '1px solid var(--wf-line-2)' : 0, background: pt.bp ? 'var(--wf-clay-soft)' : '#fff' }}>
              <span className="wf-num" style={{ flex: '0 0 40px', fontSize: 12, fontWeight: 800, color: pt.bp ? 'var(--wf-clay)' : 'var(--wf-ink)' }}>{pt.score}</span>
              <span style={{ flex: 1, fontSize: 11.5, lineHeight: 1.5, color: 'var(--wf-ink-2)' }}>{pt.desc}</span>
            </div>
          ))}
          <div style={{ padding: '8px 10px', textAlign: 'center', fontSize: 11, fontWeight: 700, color: 'var(--wf-court)' }}>
            前のゲームを見る
          </div>
        </div>
        <div style={{ marginTop: 8 }}>
          <Anno>この「1ポイントごとの実況」は入力の運用負荷が高く、初期リリースで入れるかは要検討（提供データ元 / 手動入力の体制次第）。UIとしては用意しておく。</Anno>
        </div>
      </div>

      {/* ── C. 応援コメント（tennis365の強み・常時表示） ── */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>応援コメント <span className="wf-num" style={{ color: 'var(--wf-court)' }}>51</span></h2>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, height: 38, padding: '0 12px',
          border: '1px solid var(--wf-line)', color: 'var(--wf-mute)', fontSize: 11, marginBottom: 10,
        }}>
          <span style={{ flex: 1 }}>応援コメントを書く…</span>
          <span style={{ fontSize: 11, fontWeight: 800, color: 'var(--wf-court)' }}>投稿</span>
        </div>
        {comments.map((c, i) => (
          <div key={i} style={{ padding: '8px 0', borderTop: '1px solid var(--wf-line-2)' }}>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, color: 'var(--wf-mute)', marginBottom: 2 }}>
              <span style={{ fontWeight: 700 }}>{c.u}</span>
              <span className="wf-num">{c.d}</span>
            </div>
            <div style={{ fontSize: 12, lineHeight: 1.5 }}>{c.t}</div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 10 }}>コメントをもっと見る</button>
      </div>

      {/* ── D. 関連記事・導線 ── */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>関連記事</h2>
        {[
          '【速報】島袋、シェルトン相手にフルセットの熱戦',
          'ウィンストン・セーラム・オープン 大会ページ',
          '島袋 将 選手プロフィール',
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 0', borderTop: '1px solid var(--wf-line-2)' }}>
            <span style={{ flex: 1, fontSize: 12, fontWeight: 600, color: 'var(--wf-court)' }}>{t}</span>
            <span style={{ display: 'flex', color: 'var(--wf-mute)' }}>{Ico.chev}</span>
          </div>
        ))}
      </div>

      <BackToTop />

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .pl-grid::-webkit-scrollbar { display: none; }
        .pl-grid { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { PointLiveFrame });
