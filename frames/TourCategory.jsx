// TourCategory.jsx — 記事一覧：ツアー / カテゴリページ（ATPツアー）
// 全ツアーindexと同じテンプレを ATP に絞った版。
// h1=ATPツアー / カテゴリnav active=ATP / 開催中の大会 / ニュース(hero+10) / 注目の日本人選手 / 世界ランキング / ATP概要

function ATPTourFrame() {
  const cats = ['全ツアー', 'グランドスラム', 'ATP', 'チャレンジャー', 'WTA', '125', '国別・団体戦', 'ITF男子', 'ITF女子', '学生', 'ジュニア', 'その他'];

  const heroNews = {
    ttl: 'フリッツ、アルカラスをフルセットで下し初のマスターズ制覇「地元の声援が背中を押した」',
    d: '2026年8月17日（日）21時40分',
  };
  const news = [
    { ttl: 'アルカラス、決勝で第3セット失速 全米OPへ「疲労は言い訳にならない」', d: '2026年8月17日（日）20時15分' },
    { ttl: '【準決勝】シナー、フリッツに競り負け ハードコート12連勝でストップ', d: '2026年8月16日（土）18時30分' },
    { ttl: 'ズベレフ、準々決勝で逆転勝ち 全米OPへ好調キープ', d: '2026年8月15日（金）13時20分' },
    { ttl: '西岡良仁、3回戦で敗退 マスターズ自己最高タイの成績', d: '2026年8月14日（木）09時05分' },
    { ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」記者会見詳報', d: '2026年8月13日（水）22時15分' },
    { ttl: 'ルーネ、2回戦で棄権 右肩の状態に不安', d: '2026年8月13日（水）16時50分' },
    { ttl: '錦織圭、ワイルドカードで本戦出場 初戦は第5シードと', d: '2026年8月12日（火）11時40分' },
    { ttl: '望月慎太郎、予選突破でツアー本戦へ 世界ランク自己最高更新', d: '2026年8月11日（月）08時30分' },
    { ttl: 'シンシナティ・オープン、賞金総額を前年比8%増額と発表', d: '2026年8月10日（月）12時00分' },
  ];

  const jpPlayers = [
    { name: '西岡良仁', rank: 32 },
    { name: '錦織圭', rank: 45 },
    { name: '望月慎太郎', rank: 98 },
    { name: 'ダニエル太郎', rank: 132 },
  ];

  const worldRanking = [
    { name: 'J. シナー', code: 'ITA', pts: '11,540' },
    { name: 'C. アルカラス', code: 'ESP', pts: '9,720' },
    { name: 'A. ズベレフ', code: 'GER', pts: '6,190' },
  ];

  const h2 = {
    margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em',
    color: 'var(--wf-mute)', marginBottom: 4,
    paddingBottom: 6, borderBottom: '2px solid var(--wf-ink)',
  };

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ATP']} />

      {/* ページヘッダ（h1 + 概要1行） */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          ATP TOUR
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>ATPツアー</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          ATP（男子プロテニス）ツアーの開催中の大会・最新ニュース・世界ランキングをまとめてチェック。
        </div>
      </div>

      {/* カテゴリ（横スクロールのナビ。アクティブ＝ATP） */}
      <div style={{ background: '#fff', borderBottom: '1px solid var(--wf-line)', padding: '12px 0 10px' }}>
        <div className="cat-scroll" style={{ display: 'flex', gap: 6, overflowX: 'auto', padding: '0 12px' }}>
          {cats.map(c => {
            const on = c === 'ATP';
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

      {/* 開催中・今後の大会（ATP・直近3件。全米OP=グランドスラム週でATPツアーが無い＝開催中ゼロの実例） */}
      <div style={{ padding: '14px 14px 0' }}>
        <h2 style={h2}>開催中・今後の大会</h2>
        {[
          { grade: 'ATP250', name: '成都オープン', period: '09.16 – 09.22', jpn: null, status: '開催予定' },
          { grade: 'ATP500', name: '木下グループジャパンオープン', period: '09.24 – 09.30', jpn: '錦織圭 ほか', status: '開催予定' },
          { grade: 'ATP1000', name: '上海マスターズ', period: '10.01 – 10.12', jpn: '西岡良仁 ほか', status: '開催予定' },
        ].map((t, i) => (
          <div key={i} className="wf-row" style={{ alignItems: 'flex-start' }}>
            <ImgPh w={100} h={68} label="thumb" />
            <div style={{ flex: 1, fontSize: 12, lineHeight: 1.45, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, color: 'var(--wf-mute)', marginBottom: 2 }}>
                <span style={{ color: 'var(--wf-court)', fontWeight: 700 }}>{t.grade}</span>
                <span>·</span>
                <span className="wf-num">{t.period}</span>
                {t.status === '開催中' ? (
                  <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 9, background: 'var(--wf-clay)', color: '#fff', padding: '0 4px', fontWeight: 700, letterSpacing: '0.06em' }}>
                    <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#fff', animation: 'wfPulse 1.8s infinite' }} />開催中
                  </span>
                ) : (
                  <span style={{ marginLeft: 'auto', fontSize: 9, background: 'var(--wf-bg-3)', color: 'var(--wf-mute)', border: '1px solid var(--wf-line)', padding: '0 4px', fontWeight: 700, letterSpacing: '0.06em' }}>開催予定</span>
                )}
              </div>
              <div style={{ fontWeight: 600, lineHeight: 1.4 }}>{t.name}</div>
              {t.jpn && (
                <div style={{ fontSize: 10, color: 'var(--wf-ink-2)', marginTop: 3, display: 'flex', gap: 4, alignItems: 'center' }}>
                  <span style={{ fontSize: 8.5, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '1px 4px' }}>JPN</span>
                  <span>{t.jpn}</span>
                </div>
              )}
            </div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 12 }}>今後の大会日程を見る</button>
      </div>

      {/* ニュース（hero + サムネ列。計10本） */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>ニュース</h2>
        <div style={{ marginBottom: 4 }}>
          <ImgPh w="100%" h={180} label="HERO / 優勝トロフィーを掲げるフリッツ" />
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.45, marginTop: 8 }}>{heroNews.ttl}</div>
          <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{heroNews.d}</div>
        </div>
        {news.map((n, i) => (
          <div key={i} className="wf-row" style={{ alignItems: 'flex-start' }}>
            <ImgPh w={88} h={62} label="thumb" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.45 }}>{n.ttl}</div>
              <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{n.d}</div>
            </div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 12 }}>ニュースをもっと読む</button>
      </div>

      {/* 注目の日本人選手（世界ランキングの上） */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>注目の日本人選手</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {jpPlayers.map((p, i) => (
            <div key={i} style={{
              width: 'calc(50% - 4px)', border: '1px solid var(--wf-line)', background: '#fff',
              padding: '8px 10px', display: 'flex', gap: 8, alignItems: 'center',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                background: 'var(--wf-bg-2)', color: 'var(--wf-mute)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 13, fontWeight: 800,
              }}>{p.name[0]}</div>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 800, lineHeight: 1.3 }}>{p.name}</div>
                <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 2 }}>世界{p.rank}位</div>
              </div>
            </div>
          ))}
        </div>
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 8 }}>もっと見る</button>
      </div>

      {/* 世界ランキング（男子＝ATP。レースは載せない） */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>世界ランキング</h2>
        <div style={{ border: '1px solid var(--wf-line)', background: '#fff' }}>
          {worldRanking.map((r, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '7px 10px',
              borderBottom: i < worldRanking.length - 1 ? '1px solid var(--wf-line)' : 0,
            }}>
              <span className="wf-num" style={{ width: 16, fontWeight: 800, fontSize: 12.5, color: 'var(--wf-mute)' }}>{i + 1}</span>
              <div style={{ flex: 1, fontSize: 12, fontWeight: 700, minWidth: 0 }}>{r.name} <span className="wf-mute" style={{ fontWeight: 500, fontSize: 10 }}>{r.code}</span></div>
              <span className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)' }}>{r.pts} pts</span>
            </div>
          ))}
        </div>
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 8 }}>もっと見る</button>
      </div>

      {/* ATP概要（ページ最下部・SEO） */}
      <div style={{ padding: '18px 14px 22px' }}>
        <h2 style={h2}>ATPツアーとは</h2>
        <div style={{ fontSize: 12, lineHeight: 1.85, color: 'var(--wf-ink-2)' }}>
          <p style={{ margin: '0 0 12px' }}>
            ATPツアーは、男子プロテニス協会（ATP）が統括する世界最高峰の男子ツアー。シーズンは1月に開幕し、
            選手は世界各地の大会を転戦しながら、成績に応じたランキングポイントと賞金を積み重ねていく。
          </p>
          <p style={{ margin: '0 0 12px' }}>
            大会は四大大会（全豪・全仏・ウィンブルドン・全米）を頂点に、ATPマスターズ1000、ATPツアー500、
            ATPツアー250と、グレードごとにピラミッド状に構成される。上位グレードほど出場選手のレベルも
            獲得できるポイントも大きくなる。
          </p>
          <p style={{ margin: 0 }}>
            ATPツアーの本戦に出場するには、まず下部のATPチャレンジャーツアーやITFワールドテニスツアーで
            結果を残し、世界ランキングを押し上げていく必要がある。若手はここから世界の舞台を目指す。
          </p>
        </div>
      </div>

      <BackToTop />

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .cat-scroll::-webkit-scrollbar { display: none; }
        .cat-scroll { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { ATPTourFrame });
