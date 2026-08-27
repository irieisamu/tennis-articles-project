// Top.jsx — TOPページ
// メインニュース(3本) + ニュース一覧導線 + ツアー速報 + ギア特集 + レッスン特集
// + サービス導線 + アクセスランキング + 特集一覧
// ※構成・要素・テキストは現状維持。装飾は design-sample（実tennis365 hi-fi）を踏襲：
//   ブランド緑 #6c9e1d / 見出し=アイブロウ+太字+黒アクセントバー / LIVE赤 / ロゴ画像。

// ブランドパレット（design-sample tennis365.css より）
const TB = { brand: '#6c9e1d', brand2: '#587f18', soft: '#e2ecc9', live: '#d94040' };

// 画像は tennis365.net から差し込み（プロトタイプ用の暫定。本番は自社/契約素材に差替）
const IMG = {
  nao: 'https://news.tennis365.net/news/photo/20260827nao546.jpg',
  kei: 'https://news.tennis365.net/news/photo/20260827_kei_546.jpg',
  g:   'https://news.tennis365.net/news/photo/20260827g546.jpg',
  k:   'https://news.tennis365.net/news/photo/20260827k.546.jpg',
  saka:'https://news.tennis365.net/news/photo/20260827_sakatsume_546.jpg',
  newera:  'https://tennis365.net/user_data/img/202304_newera480-01.png',
  diadora: 'https://tennis365.net/user_data/img/banner/202403_diadora_SP_400-1.png',
  // 特集・GEAR用のラケット画像（横長・CC。プロトタイプ用。本番は自社/契約素材に差替）
  racketW: 'https://live.staticflickr.com/2799/4370537412_ffcd72ac87.jpg',
  racketB: 'https://live.staticflickr.com/3597/3473492107_87ffd93fe7_b.jpg',
  racketC: 'https://live.staticflickr.com/2720/4369788825_ba79626890.jpg',
  stadium: 'design-sample/assets/stadium-usopen.jpg',
};

// セクション見出し（アイブロウ + 太字タイトル + 黒アクセントバー + 全幅ベースライン）
function SecHead({ title, cat, more = true }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      margin: '0 14px 14px', padding: '0 0 8px', borderBottom: '1px solid var(--wf-line)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 3, minWidth: 0 }}>
        {cat && <div style={{ fontFamily: 'var(--wf-font-num)', fontWeight: 800, fontSize: 10, color: TB.brand2, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{cat}</div>}
        <div style={{ position: 'relative', fontSize: 18, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--wf-ink)', lineHeight: 1.2, paddingBottom: 9, marginBottom: -9 }}>
          {title}
          <span style={{ position: 'absolute', left: 0, bottom: -1, width: 40, height: 3, background: 'var(--wf-ink)' }} />
        </div>
      </div>
      {more && <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--wf-ink-2)', display: 'inline-flex', alignItems: 'center', gap: 3, paddingBottom: 1, whiteSpace: 'nowrap' }}>もっと見る<span style={{ fontSize: 9 }}>›</span></span>}
    </div>
  );
}

function TopFrame() {
  const navItems = ['TOP', 'ニュース', 'ツアー', 'テニス用品', 'レッスン', 'スクール', 'サークル', '大会', 'イベント', 'レンタルコート', 'コーチ求人'];

  return (
    <Phone>
      {/* ── ヘッダー（ロゴ画像 + 検索/メニュー） ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <img src="logo-sp.png" alt="tennis365" style={{ height: 22, display: 'block' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--wf-ink)' }}>
          <span style={{ display: 'flex' }}>{Ico.search}</span>
          <span style={{ display: 'flex' }}>{Ico.menu}</span>
        </div>
      </div>

      {/* ── グローバルナビ（ブランド緑の下線） ── */}
      <div className="top-gnav" style={{ display: 'flex', overflowX: 'auto', background: '#fff', borderBottom: '1px solid var(--wf-line)', padding: '0 6px' }}>
        {navItems.map(it => {
          const on = it === 'TOP';
          return (
            <div key={it} style={{
              flex: '0 0 auto', padding: '10px 10px', fontSize: 12, fontWeight: on ? 700 : 600,
              color: on ? 'var(--wf-ink)' : 'var(--wf-mute)',
              borderBottom: on ? '3px solid ' + TB.brand : '3px solid transparent', whiteSpace: 'nowrap',
            }}>{it}</div>
          );
        })}
      </div>

      {/* ── 1. メインニュース (3本連続 · フルブリード) ── */}
      <div>
        {[
          {
            cat: 'ATP', tour: false, time: '2026/08/27 04:32', h: 210, img: IMG.g,
            ttl: 'アルカラス、シンシナティ準決勝でズベレフを下し2年連続決勝進出',
            label: 'MAIN NEWS 1 / アルカラス試合中',
          },
          {
            cat: 'WTA', tour: false, time: '2026/07/26 22:40', h: 210, img: IMG.nao,
            ttl: '大坂なおみ、モントリオール3回戦進出「サーブが戻ってきた」',
            label: 'MAIN NEWS 2 / 大坂なおみ試合中',
          },
          {
            cat: 'ATP', tour: false, time: '2026/07/26 15:00', h: 210, img: IMG.k,
            ttl: 'メドベージェフ、右手首負傷で全米OP出場に黄信号',
            label: 'MAIN NEWS 3 / メドベージェフ会見',
          },
        ].map((a, i) => (
          <div key={i} style={{ position: 'relative' }}>
            <ImgPh w="100%" h={a.h} label={a.label} src={a.img} />
            <div style={{
              position: 'absolute', left: 0, right: 0, bottom: 0,
              padding: i === 0 ? '40px 14px 14px' : '28px 14px 12px',
              background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))',
              color: '#fff',
            }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
                {a.tour ? (
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 9.5, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', background: TB.live, padding: '2px 6px' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#fff', animation: 'tPulse 1.6s infinite' }} />
                    {a.cat}
                  </span>
                ) : (
                  <span style={{ fontSize: 9.5, fontWeight: 800, letterSpacing: '0.06em', color: '#fff', background: TB.brand, padding: '2px 6px' }}>{a.cat}</span>
                )}
                <span className="wf-num" style={{ fontSize: 10, opacity: 0.85, color: '#fff' }}>{a.time}</span>
              </div>
              <h1 style={{
                margin: 0, color: '#fff', fontSize: i === 0 ? 18 : 14, fontWeight: 800, lineHeight: 1.4,
                letterSpacing: '-0.01em', textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}>
                {a.ttl}
              </h1>
            </div>
          </div>
        ))}
        <div style={{ padding: '12px 14px', background: '#fff' }}>
          <div className="wf-btn wf-btn-out" style={{ width: '100%', color: TB.brand2, borderColor: TB.brand }}>
            ニュース一覧を見る <span style={{ fontSize: 10 }}>›</span>
          </div>
        </div>
      </div>

      {/* ── 3. ツアー速報 (スコアカード群) ── */}
      <div style={{ padding: '18px 0 0' }}>
        <SecHead title="ツアー速報" cat="Tour · Live & Results" />
        <div style={{ padding: '0 0 0 14px', display: 'flex', gap: 8, overflowX: 'auto' }}>
          {[
            { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'C. アルカラス', s1: '7 6', p2: 'A. ズベレフ', s2: '6 4', w: 1, status: 'FINAL' },
            { tour: 'ATP', event: 'CINCINNATI · SF', p1: 'T. フリッツ', s1: '6 3 6', p2: 'J. シナー', s2: '4 6 3', w: 1, status: 'FINAL' },
            { tour: 'WTA', event: 'MONTREAL · R3', p1: '大坂 なおみ', s1: '6 4', p2: 'E. ルバキナ', s2: '3 2', w: 1, status: 'LIVE' },
          ].map((m, i) => (
            <div key={i} style={{
              flex: '0 0 220px', border: '1px solid var(--wf-ink)', background: '#fff',
              marginRight: i === 2 ? 14 : 0,
            }}>
              <div style={{
                background: 'var(--wf-ink)', color: '#fff',
                padding: '5px 8px', fontSize: 9,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                letterSpacing: '0.06em', fontWeight: 700,
              }}>
                <span>{m.tour} · {m.event}</span>
                {m.status === 'LIVE' ? (
                  <span style={{ color: TB.live, display: 'inline-flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: TB.live, animation: 'tPulse 1.6s infinite' }} />
                    LIVE
                  </span>
                ) : <span style={{ color: 'var(--wf-mute-2)' }}>{m.status}</span>}
              </div>
              {[[m.p1, m.s1, m.w === 1], [m.p2, m.s2, m.w === 2]].map(([n, s, win], j) => (
                <div key={j} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '7px 8px',
                  background: win ? TB.soft : '#fff',
                  borderTop: j === 1 ? '1px solid var(--wf-line-2)' : 0,
                }}>
                  <span style={{ fontSize: 11.5, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-ink-2)' }}>{n}</span>
                  <span className="wf-num" style={{ fontSize: 12.5, fontWeight: win ? 800 : 500, color: win ? 'var(--wf-ink)' : 'var(--wf-mute)' }}>{s}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 9. 特集一覧 ── */}
      <div style={{ padding: '20px 0 14px' }}>
        <SecHead title="特集" cat="FEATURES" />
        <div style={{ padding: '0 0 0 14px', display: 'flex', gap: 8, overflowX: 'auto' }}>
          {[
            { ttl: '2026年ラケット新製品', n: 12, img: IMG.racketW },
            { ttl: 'アルカラス使用モデル', n: 8, img: IMG.racketB },
            { ttl: '全米オープン2026 特集', n: 24, img: IMG.stadium },
          ].map((f, i) => (
            <div key={i} style={{
              flex: '0 0 200px', position: 'relative',
              marginRight: i === 2 ? 14 : 0,
              background: 'var(--wf-ink)', color: '#fff', overflow: 'hidden',
            }}>
              <ImgPh w="100%" h={133} label="feature" dark={true} src={f.img} />
              <div style={{ padding: '8px 10px 10px' }}>
                <div style={{ fontSize: 9, color: TB.soft, letterSpacing: '0.08em', fontWeight: 800 }}>FEATURE</div>
                <div style={{ fontSize: 12, fontWeight: 700, marginTop: 3, color: '#fff', lineHeight: 1.3 }}>{f.ttl}</div>
                <div className="wf-num" style={{ fontSize: 10, color: '#c5c3bc', marginTop: 4 }}>{f.n} 記事</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. テニス用品特集 (記事リスト = レッスンと同じ形式) ── */}
      <div style={{ padding: '20px 0 0', background: '#f4f7ee', margin: '20px 0 0', paddingTop: 18, paddingBottom: 18 }}>
        <SecHead title="テニス用品" cat="GEAR" more={false} />
        {/* サブカテゴリタブ */}
        <div style={{ padding: '0 14px 10px', display: 'flex', gap: 6, overflowX: 'auto' }}>
          {['ラケット', 'シューズ', 'ガット', 'グリップ', 'ウェア'].map((t, i) => (
            <div key={t} style={{
              flex: '0 0 auto', padding: '4px 10px', fontSize: 10.5, fontWeight: 700,
              background: i === 0 ? TB.brand : '#fff',
              color: i === 0 ? '#fff' : 'var(--wf-ink)',
              border: '1px solid ' + (i === 0 ? TB.brand : 'var(--wf-line)'),
            }}>{t}</div>
          ))}
        </div>
        <div style={{ padding: '0 14px' }}>
          {[
            { cat: 'ラケット', ttl: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器、あなたに合うか', reviewer: '鈴木 亮太', dur: '8分', img: IMG.racketC },
            { cat: 'ラケット', ttl: 'Wilson Blade 98 v9 徹底レビュー · コントロール派の新定番', reviewer: '田中 誠', dur: '6分', img: IMG.racketW },
          ].map((g, i) => (
            <div key={i} className="wf-row">
              <ImgPh w={100} h={66} label="gear" src={g.img} />
              <div style={{ flex: 1, fontSize: 12, lineHeight: 1.45 }}>
                <div style={{ fontSize: 10, color: TB.brand2, fontWeight: 800, marginBottom: 2 }}>{g.cat}</div>
                <div style={{ fontWeight: 600, lineHeight: 1.4 }}>{g.ttl}</div>
                <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4, display: 'flex', gap: 6 }}>
                  <span>{g.reviewer}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{Ico.clock}<span className="wf-num">{g.dur}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '4px 14px 0' }}>
          <div className="wf-btn wf-btn-out" style={{ width: '100%', color: TB.brand2, borderColor: TB.brand }}>
            もっと見る <span style={{ fontSize: 10 }}>›</span>
          </div>
        </div>
      </div>

      {/* ── 6. レッスン特集 ── */}
      <div style={{ padding: '20px 0 0' }}>
        <SecHead title="レッスン" cat="LESSON" more={false} />
        <div style={{ padding: '0 14px 10px', display: 'flex', gap: 6, overflowX: 'auto' }}>
          {['サーブ', 'フォアハンド', 'バックハンド', 'ボレー', 'スマッシュ', 'フットワーク'].map((t, i) => (
            <div key={t} style={{
              flex: '0 0 auto', padding: '4px 10px', fontSize: 10.5, fontWeight: 700,
              background: i === 0 ? TB.brand : '#fff',
              color: i === 0 ? '#fff' : 'var(--wf-ink)',
              border: '1px solid ' + (i === 0 ? TB.brand : 'var(--wf-line)'),
            }}>{t}</div>
          ))}
        </div>
        <div style={{ padding: '0 14px' }}>
          {[
            { cat: 'サーブ', ttl: 'サーブの基本 · トスと打点で威力を上げる 5ステップ', coach: 'コーチ 山田 潤', dur: '6分', img: IMG.saka },
            { cat: 'サーブ', ttl: 'キックサーブの打ち方 · 回転量を増やすコツ', coach: 'コーチ 木村 慎', dur: '7分', img: IMG.k },
          ].map((l, i) => (
            <div key={i} className="wf-row">
              <div style={{ position: 'relative' }}>
                <ImgPh w={100} h={66} label="lesson" src={l.img} />
                <div style={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
                  width: 24, height: 24, borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>{Ico.play}</div>
              </div>
              <div style={{ flex: 1, fontSize: 12, lineHeight: 1.45 }}>
                <div style={{ fontSize: 10, color: TB.brand2, fontWeight: 800, marginBottom: 2 }}>{l.cat}</div>
                <div style={{ fontWeight: 600, lineHeight: 1.4 }}>{l.ttl}</div>
                <div style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4, display: 'flex', gap: 6 }}>
                  <span>{l.coach}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>{Ico.clock}<span className="wf-num">{l.dur}</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: '4px 14px 0' }}>
          <div className="wf-btn wf-btn-out" style={{ width: '100%', color: TB.brand2, borderColor: TB.brand }}>
            もっと見る <span style={{ fontSize: 10 }}>›</span>
          </div>
        </div>
      </div>

      {/* ── 7. サービス導線 (5マス グリッド) ── */}
      <div style={{ padding: '20px 0 0' }}>
        <SecHead title="テニスをプレーする" cat="Play Tennis" more={false} />
        <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
          {[
            ['スクール', '検索'],
            ['大会', 'エントリー'],
            ['イベント', '参加'],
            ['サークル', '募集'],
            ['レンタル\nコート', '予約'],
            ['コーチ\n求人', '一覧'],
          ].map(([n, s], i) => (
            <div key={i} style={{
              aspectRatio: '1 / 1', border: '1px solid var(--wf-line)', background: '#fff',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              padding: 8, textAlign: 'center',
            }}>
              <div style={{
                width: 32, height: 32, background: TB.soft,
                border: '1px solid ' + TB.brand, borderRadius: '50%',
                marginBottom: 6,
              }} />
              <div style={{ fontSize: 11, fontWeight: 700, whiteSpace: 'pre-line', lineHeight: 1.3 }}>{n}</div>
              <div style={{ fontSize: 9, color: 'var(--wf-mute)', marginTop: 2 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 8. アクセスランキング ── */}
      <div style={{ padding: '20px 0 0' }}>
        <SecHead title="アクセスランキング" cat="Weekly Ranking" more={false} />
        <div style={{ padding: '0 14px' }}>
          {[
            { t: 'アルカラス、全米OP前哨戦シンシナティで決勝進出', img: IMG.g },
            { t: 'Pure Aero 98 (2026) 徹底レビュー · アルカラスの武器', img: IMG.racketB },
            { t: 'スピンをかけるフォアハンド · 手首の使い方 4ステップ', img: IMG.saka },
            { t: 'ジョコビッチ「体調は万全」記者会見詳報', img: IMG.k },
            { t: '大坂なおみ、モントリオール3回戦進出', img: IMG.nao },
          ].map((r, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '26px 60px 1fr',
              gap: 10, padding: '10px 0', alignItems: 'center',
              borderBottom: '1px solid var(--wf-line-2)',
            }}>
              <div className="wf-num" style={{
                fontSize: 20, fontWeight: 800, color: i < 3 ? TB.brand : 'var(--wf-mute-2)',
                letterSpacing: '-0.03em', textAlign: 'center', lineHeight: 1,
              }}>{i + 1}</div>
              <ImgPh w={60} h={44} label="" src={r.img} />
              <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.4 }}>{r.t}</div>
            </div>
          ))}
        </div>
        <div style={{ padding: '10px 14px 20px' }}>
          <div className="wf-btn wf-btn-out" style={{ width: '100%', color: TB.brand2, borderColor: TB.brand }}>
            もっと見る <span style={{ fontSize: 10 }}>›</span>
          </div>
        </div>
      </div>

      {/* ── フッター（design-sample 準拠） ── */}
      <div style={{ marginTop: 24, padding: '28px 20px 24px', background: '#1f2020', color: '#fff' }}>
        {/* ニュースレター */}
        <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>最新のテニス情報を毎日お届け</div>
        <div style={{ marginTop: 4, fontSize: 11, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
          メールマガジンに登録すると、注目試合の速報とギア新製品情報が届きます。
        </div>
        <div style={{ marginTop: 12, display: 'flex', gap: 6 }}>
          <div style={{ flex: 1, padding: '10px 12px', background: '#f4f7ee', color: 'var(--wf-mute)', fontSize: 12 }}>メールアドレス</div>
          <div style={{ padding: '0 18px', background: TB.brand, color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', display: 'flex', alignItems: 'center' }}>登録</div>
        </div>
        {/* リンク列 */}
        <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, fontSize: 10.5, color: 'rgba(255,255,255,0.7)', lineHeight: 2 }}>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', marginBottom: 6 }}>CONTENT</div>
            {['ニュース', 'ツアー速報', 'テニス用品', 'レッスン'].map(t => <div key={t}>{t}</div>)}
          </div>
          <div>
            <div style={{ color: '#fff', fontWeight: 700, fontSize: 11, letterSpacing: '0.06em', marginBottom: 6 }}>SERVICE</div>
            {['スクール検索', '大会エントリー', 'レンタルコート', 'コーチ求人'].map(t => <div key={t}>{t}</div>)}
          </div>
        </div>
        <div className="wf-num" style={{ marginTop: 24, fontSize: 9.5, color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em' }}>
          © 2026 tennis365. All rights reserved.
        </div>
      </div>

      <style>{`
        @keyframes tPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .top-gnav::-webkit-scrollbar { display: none; }
        .top-gnav { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TopFrame });
