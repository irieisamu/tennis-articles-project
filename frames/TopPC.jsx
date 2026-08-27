// TopPC.jsx — TOPページ（PC / デスクトップレイアウト）
// スマホ版 Top.jsx の構成・要素・テキストをそのまま踏襲し、PC向けに再レイアウト。
//  - ヘッダー：ロゴ + 横並びグローバルナビ + 検索ボックス（全項目を1行表示）
//  - ヒーロー：リード1本(大) + 見出し2本(右に縦積み)
//  - ツアー速報：全幅3カード
//  - 本文2カラム：メイン(特集/ギア/レッスン) + サイドバー(ランキング/サービス/登録)
//  - 全幅フッター(4カラム)
// 装飾トンマナは design-sample 準拠（ブランド緑 #6c9e1d / アイブロウ+黒アクセントバー / LIVE赤）。

const TBP = { brand: '#6c9e1d', brand2: '#587f18', soft: '#e2ecc9', xsoft: '#f4f7ee', live: '#d94040' };

// プロトタイプ用の画像（本番は自社/契約素材へ差替）。動作確認済みのURLのみ使用。
const IMGP = {
  nao: 'https://news.tennis365.net/news/photo/20260827nao546.jpg',
  kei: 'https://news.tennis365.net/news/photo/20260827_kei_546.jpg',
  g:   'https://news.tennis365.net/news/photo/20260827g546.jpg',
  k:   'https://news.tennis365.net/news/photo/20260827k.546.jpg',
  saka:'https://news.tennis365.net/news/photo/20260827_sakatsume_546.jpg',
  racketW: 'https://live.staticflickr.com/2799/4370537412_ffcd72ac87.jpg',
  racketB: 'https://live.staticflickr.com/3597/3473492107_87ffd93fe7_b.jpg',
  racketC: 'https://live.staticflickr.com/2720/4369788825_ba79626890.jpg',
};

// セクション見出し（アイブロウ + 太字タイトル + 黒アクセントバー + 全幅ベースライン）
function SecHeadPC({ title, cat, more = true }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      margin: '0 0 18px', padding: '0 0 10px', borderBottom: '1px solid var(--wf-line)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, minWidth: 0 }}>
        {cat && <div style={{ fontFamily: 'var(--wf-font-num)', fontWeight: 800, fontSize: 11, color: TBP.brand2, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{cat}</div>}
        <div style={{ position: 'relative', fontSize: 22, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--wf-ink)', lineHeight: 1.2, paddingBottom: 11, marginBottom: -11 }}>
          {title}
          <span style={{ position: 'absolute', left: 0, bottom: -1, width: 48, height: 3, background: 'var(--wf-ink)' }} />
        </div>
      </div>
      {more && <span style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--wf-ink-2)', display: 'inline-flex', alignItems: 'center', gap: 4, paddingBottom: 2, whiteSpace: 'nowrap', cursor: 'pointer' }}>もっと見る<span style={{ fontSize: 10 }}>›</span></span>}
  </div>
  );
}

function TopPCFrame() {
  const navItems = ['TOP', 'ニュース', 'ツアー', 'テニス用品', 'レッスン', 'スクール', 'サークル', '大会', 'イベント', 'レンタルコート', 'コーチ求人'];

  // ── メインニュース（スマホ版と同一テキスト） ──
  const hero = [
    { cat: 'ATP', tour: false, time: '2026/08/27 04:32', img: IMGP.g,
      ttl: 'アルカラス、シンシナティ準決勝でズベレフを下し2年連続決勝進出', label: 'MAIN NEWS 1 / アルカラス試合中' },
    { cat: 'WTA', tour: false, time: '2026/07/26 22:40', img: IMGP.nao,
      ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」', label: 'MAIN NEWS 2 / 大坂なおみ試合中' },
    { cat: 'ATP', tour: false, time: '2026/07/26 15:00', img: IMGP.k,
      ttl: 'メドベージェフ、右手首負傷で全米OP出場に黄信号', label: 'MAIN NEWS 3 / メドベージェフ会見' },
  ];

  const scores = [
    { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'C. アルカラス', s1: '7 6', p2: 'A. ズベレフ', s2: '6 4', w: 1, status: 'FINAL' },
    { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'T. フリッツ', s1: '6 3 6', p2: 'J. シナー', s2: '4 6 3', w: 1, status: 'FINAL' },
    { tour: 'WTA', event: 'MONTREAL · R3', p1: '大坂 なおみ', s1: '6 4', p2: 'E. ルバキナ', s2: '3 2', w: 1, status: 'LIVE' },
  ];

  const features = [
    { ttl: '2026年ラケット新製品', n: 12, img: IMGP.racketW },
    { ttl: 'アルカラス使用モデル', n: 8, img: IMGP.racketB },
    { ttl: '全米オープン2026 特集', n: 24, img: IMGP.g },
  ];

  const gear = [
    { cat: 'ラケット', ttl: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器、あなたに合うか', reviewer: '鈴木 亮太', dur: '8分', img: IMGP.racketC },
    { cat: 'ラケット', ttl: 'Wilson Blade 98 v9 徹底レビュー · コントロール派の新定番', reviewer: '田中 誠', dur: '6分', img: IMGP.racketW },
  ];

  const lessons = [
    { cat: 'サーブ', ttl: 'サーブの基本 · トスと打点で威力を上げる 5ステップ', coach: 'コーチ 山田 潤', dur: '6分', img: IMGP.saka },
    { cat: 'サーブ', ttl: 'キックサーブの打ち方 · 回転量を増やすコツ', coach: 'コーチ 木村 慎', dur: '7分', img: IMGP.k },
  ];

  const ranking = [
    { t: 'アルカラス、全米OP前哨戦シンシナティで決勝進出', img: IMGP.g },
    { t: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器', img: IMGP.racketB },
    { t: 'スピンをかけるフォアハンド · 手首の使い方 4ステップ', img: IMGP.saka },
    { t: 'ジョコビッチ「体調は万全」記者会見詳報', img: IMGP.k },
    { t: '大坂なおみ、モントリオール3回戦進出', img: IMGP.nao },
  ];

  const services = [
    ['スクール', '検索'], ['大会', 'エントリー'], ['イベント', '参加'],
    ['サークル', '募集'], ['レンタルコート', '予約'], ['コーチ求人', '一覧'],
  ];

  const outBtn = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
    width: '100%', boxSizing: 'border-box', padding: '11px 0', fontSize: 13, fontWeight: 700,
    color: TBP.brand2, background: '#fff', border: '1px solid ' + TBP.brand, cursor: 'pointer',
  };

  return (
    <div style={{ background: '#fff', color: 'var(--wf-ink)', fontFamily: 'var(--wf-font-jp)' }}>
      {/* ══ ヘッダー ══ */}
      <header style={{ borderBottom: '1px solid var(--wf-line)', background: '#fff' }}>
        {/* 上段：ロゴ + 検索 */}
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
          <img src="logo-sp.png" alt="tennis365" style={{ height: 30, display: 'block' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flex: '0 0 auto' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8, width: 260, padding: '8px 12px',
              border: '1px solid var(--wf-line)', background: 'var(--wf-bg-2)', color: 'var(--wf-mute)', fontSize: 13,
            }}>
              <span style={{ display: 'flex', color: 'var(--wf-mute)' }}>{Ico.search}</span>
              <span>選手・大会・ニュースを検索</span>
            </div>
            <span style={{ display: 'flex', color: 'var(--wf-ink)', cursor: 'pointer' }}>{Ico.user}</span>
          </div>
        </div>
        {/* 下段：グローバルナビ（全項目1行 / TOPにブランド緑の下線） */}
        <nav style={{ borderTop: '1px solid var(--wf-line-2)' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'stretch', gap: 2 }}>
            {navItems.map(it => {
              const on = it === 'TOP';
              return (
                <div key={it} style={{
                  padding: '13px 14px', fontSize: 13.5, fontWeight: on ? 700 : 600,
                  color: on ? 'var(--wf-ink)' : 'var(--wf-ink-2)',
                  borderBottom: on ? '3px solid ' + TBP.brand : '3px solid transparent',
                  whiteSpace: 'nowrap', cursor: 'pointer',
                }}>{it}</div>
              );
            })}
          </div>
        </nav>
      </header>

      {/* ══ ヒーロー：リード + 見出し2本 ══ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16 }}>
          {/* リード（大） */}
          <HeroCard a={hero[0]} big />
          {/* 右：見出し2本 縦積み */}
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
            <HeroCard a={hero[1]} />
            <HeroCard a={hero[2]} />
          </div>
        </div>
        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
          <div style={{ ...outBtn, width: 320 }}>ニュース一覧を見る <span style={{ fontSize: 11 }}>›</span></div>
        </div>
      </div>

      {/* ══ ツアー速報（全幅3カード） ══ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px' }}>
        <SecHeadPC title="ツアー速報" cat="Tour · Live & Results" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {scores.map((m, i) => (
            <div key={i} style={{ border: '1px solid var(--wf-ink)', background: '#fff' }}>
              <div style={{
                background: 'var(--wf-ink)', color: '#fff', padding: '7px 10px', fontSize: 10.5,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', letterSpacing: '0.06em', fontWeight: 700,
              }}>
                <span>{m.tour} · {m.event}</span>
                {m.status === 'LIVE' ? (
                  <span style={{ color: TBP.live, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: TBP.live, animation: 'tPulse 1.6s infinite' }} />LIVE
                  </span>
                ) : <span style={{ color: 'var(--wf-mute-2)' }}>{m.status}</span>}
              </div>
              {[[m.p1, m.s1, m.w === 1], [m.p2, m.s2, m.w === 2]].map(([n, s, win], j) => (
                <div key={j} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 12px',
                  background: win ? TBP.soft : '#fff', borderTop: j === 1 ? '1px solid var(--wf-line-2)' : 0,
                }}>
                  <span style={{ fontSize: 13, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-ink-2)' }}>{n}</span>
                  <span className="wf-num" style={{ fontSize: 14, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-mute)' }}>{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══ 本文 2カラム ══ */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 24px 8px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 40, alignItems: 'start' }}>
        {/* ── メインカラム ── */}
        <main style={{ minWidth: 0 }}>
          {/* 特集 */}
          <section style={{ marginBottom: 40 }}>
            <SecHeadPC title="特集" cat="Features" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} style={{ background: 'var(--wf-ink)', color: '#fff', overflow: 'hidden' }}>
                  <ImgPh w="100%" h={140} label="feature" dark={true} src={f.img} />
                  <div style={{ padding: '10px 12px 12px' }}>
                    <div style={{ fontSize: 9.5, color: TBP.soft, letterSpacing: '0.08em', fontWeight: 800 }}>FEATURE</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginTop: 4, color: '#fff', lineHeight: 1.35 }}>{f.ttl}</div>
                    <div className="wf-num" style={{ fontSize: 10.5, color: '#c5c3bc', marginTop: 5 }}>{f.n} 記事</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* テニス用品 GEAR（薄緑パネル） */}
          <section style={{ marginBottom: 40, background: TBP.xsoft, padding: 20 }}>
            <SecHeadPC title="テニス用品" cat="Gear" more={false} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              {['ラケット', 'シューズ', 'ガット', 'グリップ', 'ウェア'].map((t, i) => (
                <div key={t} style={{
                  padding: '5px 12px', fontSize: 11.5, fontWeight: 700,
                  background: i === 0 ? TBP.brand : '#fff', color: i === 0 ? '#fff' : 'var(--wf-ink)',
                  border: '1px solid ' + (i === 0 ? TBP.brand : 'var(--wf-line)'), cursor: 'pointer',
                }}>{t}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {gear.map((g, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, background: '#fff', border: '1px solid var(--wf-line)', padding: 12 }}>
                  <ImgPh w={120} h={80} label="gear" src={g.img} style={{ flex: '0 0 120px' }} />
                  <div style={{ flex: 1, minWidth: 0, fontSize: 13, lineHeight: 1.45 }}>
                    <div style={{ fontSize: 10.5, color: TBP.brand2, fontWeight: 800, marginBottom: 3 }}>{g.cat}</div>
                    <div style={{ fontWeight: 600, lineHeight: 1.4 }}>{g.ttl}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--wf-mute)', marginTop: 6, display: 'flex', gap: 8 }}>
                      <span>{g.reviewer}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{Ico.clock}<span className="wf-num">{g.dur}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}><div style={outBtn}>もっと見る <span style={{ fontSize: 11 }}>›</span></div></div>
          </section>

          {/* レッスン LESSON */}
          <section style={{ marginBottom: 8 }}>
            <SecHeadPC title="レッスン" cat="Lesson" more={false} />
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
              {['サーブ', 'フォアハンド', 'バックハンド', 'ボレー', 'スマッシュ', 'フットワーク'].map((t, i) => (
                <div key={t} style={{
                  padding: '5px 12px', fontSize: 11.5, fontWeight: 700,
                  background: i === 0 ? TBP.brand : '#fff', color: i === 0 ? '#fff' : 'var(--wf-ink)',
                  border: '1px solid ' + (i === 0 ? TBP.brand : 'var(--wf-line)'), cursor: 'pointer',
                }}>{t}</div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {lessons.map((l, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, border: '1px solid var(--wf-line)', padding: 12 }}>
                  <div style={{ position: 'relative', flex: '0 0 120px' }}>
                    <ImgPh w={120} h={80} label="lesson" src={l.img} />
                    <div style={{
                      position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                      width: 28, height: 28, borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                    }}>{Ico.play}</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 0, fontSize: 13, lineHeight: 1.45 }}>
                    <div style={{ fontSize: 10.5, color: TBP.brand2, fontWeight: 800, marginBottom: 3 }}>{l.cat}</div>
                    <div style={{ fontWeight: 600, lineHeight: 1.4 }}>{l.ttl}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--wf-mute)', marginTop: 6, display: 'flex', gap: 8 }}>
                      <span>{l.coach}</span>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{Ico.clock}<span className="wf-num">{l.dur}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16 }}><div style={outBtn}>もっと見る <span style={{ fontSize: 11 }}>›</span></div></div>
          </section>
        </main>

        {/* ── サイドバー ── */}
        <aside style={{ minWidth: 0 }}>
          {/* アクセスランキング */}
          <section style={{ marginBottom: 32 }}>
            <SecHeadPC title="アクセスランキング" cat="Weekly Ranking" more={false} />
            <div>
              {ranking.map((r, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '24px 64px 1fr', gap: 10, padding: '11px 0',
                  alignItems: 'center', borderBottom: '1px solid var(--wf-line-2)',
                }}>
                  <div className="wf-num" style={{ fontSize: 20, fontWeight: 800, color: i < 3 ? TBP.brand : 'var(--wf-mute-2)', letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1 }}>{i + 1}</div>
                  <ImgPh w={64} h={46} label="" src={r.img} />
                  <div style={{ fontSize: 12.5, fontWeight: 600, lineHeight: 1.4 }}>{r.t}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14 }}><div style={outBtn}>もっと見る <span style={{ fontSize: 11 }}>›</span></div></div>
          </section>

          {/* テニスをプレーする（サービス導線） */}
          <section style={{ marginBottom: 32 }}>
            <SecHeadPC title="テニスをプレーする" cat="Play Tennis" more={false} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {services.map(([n, s], i) => (
                <div key={i} style={{
                  border: '1px solid var(--wf-line)', background: '#fff', padding: '14px 10px',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', cursor: 'pointer',
                }}>
                  <div style={{ width: 34, height: 34, background: TBP.soft, border: '1px solid ' + TBP.brand, borderRadius: '50%', marginBottom: 8 }} />
                  <div style={{ fontSize: 12, fontWeight: 700, lineHeight: 1.3 }}>{n}</div>
                  <div style={{ fontSize: 9.5, color: 'var(--wf-mute)', marginTop: 2 }}>{s}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ニュースレター登録（サイドバー版） */}
          <section style={{ background: TBP.xsoft, border: '1px solid ' + TBP.soft, padding: 18 }}>
            <div style={{ fontSize: 14, fontWeight: 800, color: TBP.brand2 }}>最新のテニス情報を毎日お届け</div>
            <div style={{ marginTop: 6, fontSize: 11.5, color: 'var(--wf-mute)', lineHeight: 1.6 }}>
              メールマガジンに登録すると、注目試合の速報とギア新製品情報が届きます。
            </div>
            <div style={{ marginTop: 12, background: '#fff', border: '1px solid var(--wf-line)', color: 'var(--wf-mute)', fontSize: 12, padding: '10px 12px' }}>メールアドレス</div>
            <div style={{ marginTop: 8, background: TBP.brand, color: '#fff', fontSize: 12.5, fontWeight: 800, letterSpacing: '0.06em', textAlign: 'center', padding: '11px 0', cursor: 'pointer' }}>登録</div>
          </section>
        </aside>
      </div>

      {/* ══ フッター（全幅・4カラム） ══ */}
      <footer style={{ marginTop: 32, background: '#1f2020', color: '#fff' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 24px 28px', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
          {/* ニュースレター */}
          <div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>最新のテニス情報を毎日お届け</div>
            <div style={{ marginTop: 6, fontSize: 12, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              メールマガジンに登録すると、注目試合の速報とギア新製品情報が届きます。
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8, maxWidth: 380 }}>
              <div style={{ flex: 1, padding: '11px 12px', background: '#f4f7ee', color: 'var(--wf-mute)', fontSize: 12.5 }}>メールアドレス</div>
              <div style={{ padding: '0 22px', background: TBP.brand, color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '0.06em', display: 'flex', alignItems: 'center' }}>登録</div>
            </div>
          </div>
          {/* CONTENT */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 2.2 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>CONTENT</div>
            {['ニュース', 'ツアー速報', 'テニス用品', 'レッスン'].map(t => <div key={t} style={{ cursor: 'pointer' }}>{t}</div>)}
          </div>
          {/* SERVICE */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', lineHeight: 2.2 }}>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 12, letterSpacing: '0.06em', marginBottom: 8 }}>SERVICE</div>
            {['スクール検索', '大会エントリー', 'レンタルコート', 'コーチ求人'].map(t => <div key={t} style={{ cursor: 'pointer' }}>{t}</div>)}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="wf-num" style={{ maxWidth: 1200, margin: '0 auto', padding: '16px 24px', fontSize: 10.5, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
            © 2026 tennis365. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`@keyframes tPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </div>
  );
}

// ヒーローカード（画像 + 下グラデ + カテゴリチップ + 見出し）
function HeroCard({ a, big = false }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <ImgPh w="100%" h={big ? 416 : 200} label={a.label} src={a.img} />
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        padding: big ? '52px 22px 20px' : '32px 16px 14px',
        background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))', color: '#fff',
      }}>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 7 }}>
          <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', background: TBP.brand, padding: '3px 7px' }}>{a.cat}</span>
          <span className="wf-num" style={{ fontSize: 11, opacity: 0.85, color: '#fff' }}>{a.time}</span>
        </div>
        <div style={{
          margin: 0, color: '#fff', fontSize: big ? 24 : 15, fontWeight: 800, lineHeight: 1.4,
          letterSpacing: '-0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.4)',
        }}>{a.ttl}</div>
      </div>
    </div>
  );
}

Object.assign(window, { TopPCFrame });
