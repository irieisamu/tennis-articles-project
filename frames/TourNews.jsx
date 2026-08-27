// TourNews.jsx — ツアー / ニュース一覧
// 「新着ツアーニュース > もっと読む」の遷移先。
// ツアー別の選択(大会日程と同じ) + 記事一覧(1本目hero + 以降サムネ行/計20本) + ページネーション。

function TourNewsFrame() {
  const tours = ['全ツアー', 'グランドスラム', 'ATP', 'チャレンジャー', 'WTA', '125', '国別・団体戦', 'ITF男子', 'ITF女子', 'その他'];

  const hero = {
    cat: 'ATP',
    ttl: 'フリッツ、アルカラスをフルセットで下し初のマスターズ制覇「地元の声援が背中を押した」',
    d: '2026年8月17日（日）21時40分',
  };

  const rows = [
    { cat: 'ATP', ttl: 'アルカラス、決勝で第3セット失速 全米OPへ「疲労は言い訳にならない」', d: '2026年8月17日（日）20時15分' },
    { cat: 'WTA', ttl: 'サバレンカ、シンシナティ制覇 WTAランキング1位を堅持', d: '2026年8月17日（日）10時40分' },
    { cat: 'WTA', ttl: 'ガウフ、決勝でサバレンカに敗れる 全米OPへ「修正する」', d: '2026年8月17日（日）09時05分' },
    { cat: 'ATP', ttl: '【準決勝】シナー、フリッツに競り負け ハードコート12連勝でストップ', d: '2026年8月16日（土）18時30分' },
    { cat: 'コラム', ttl: '【コラム】全米OP展望 優勝候補は3人に絞られた', d: '2026年8月16日（土）09時00分' },
    { cat: 'ATP', ttl: 'ズベレフ、準々決勝で逆転勝ち 全米OPへ好調キープ', d: '2026年8月15日（金）13時20分' },
    { cat: 'ATP', ttl: 'ドレイパー、地元期待の若手が4強入り', d: '2026年8月15日（金）20時30分' },
    { cat: 'WTA', ttl: '大坂なおみ、準決勝進出 復調示す快勝', d: '2026年8月15日（金）11時20分' },
    { cat: '日本', ttl: '西岡良仁、3回戦で敗退 マスターズ自己最高タイの成績', d: '2026年8月14日（木）09時05分' },
    { cat: 'WTA', ttl: 'シフィオンテク、3回戦敗退 ハードコートの課題残す', d: '2026年8月14日（木）19時10分' },
    { cat: 'コラム', ttl: '【コラム】なぜフリッツは北米ハードで強いのか', d: '2026年8月14日（木）12時00分' },
    { cat: 'ATP', ttl: 'ジョコビッチ、シーズン後半戦へ「体調は万全」会見詳報', d: '2026年8月13日（水）22時15分' },
    { cat: 'ATP', ttl: 'ルーネ、2回戦で棄権 右肩の状態に不安', d: '2026年8月13日（水）16時50分' },
    { cat: '日本', ttl: '日比野菜緒、ダブルスで準優勝 好調キープ', d: '2026年8月13日（水）14時20分' },
    { cat: '日本', ttl: '錦織圭、ワイルドカードで本戦出場 初戦は第5シードと', d: '2026年8月12日（火）11時40分' },
    { cat: 'ATP', ttl: 'メドベージェフ、右手首負傷で全米OP出場に黄信号', d: '2026年8月12日（火）15時00分' },
    { cat: '日本', ttl: '望月慎太郎、予選突破でツアー本戦へ 世界ランク自己最高', d: '2026年8月11日（月）08時30分' },
    { cat: 'WTA', ttl: 'ペグラ、ホームで無念の初戦敗退', d: '2026年8月11日（月）17時45分' },
    { cat: 'ATP', ttl: 'シンシナティ・オープン、賞金総額を前年比8%増額と発表', d: '2026年8月10日（月）12時00分' },
  ];

  const catColor = (c) => c === 'コラム' ? 'var(--wf-mute)' : 'var(--wf-court)';

  return (
    <Phone>
      <AppBar variant="top" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ニュース']} />

      {/* ページヘッダ */}
      <div style={{ padding: '14px 14px 10px', background: '#fff', borderBottom: '1px solid var(--wf-line)' }}>
        <div className="wf-mono" style={{ fontSize: 9.5, color: 'var(--wf-mute)', letterSpacing: '0.08em', marginBottom: 4 }}>
          TOUR NEWS
        </div>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 800, letterSpacing: '-0.01em' }}>ツアーニュース</h1>
        <div style={{ fontSize: 11, color: 'var(--wf-mute)', marginTop: 4, lineHeight: 1.5 }}>
          ツアーの最新ニュースを新着順に。ツアー別に絞り込めます。
        </div>
      </div>

      {/* ツアー別の選択（大会日程と同じ・横スクロール） */}
      <div style={{ background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)', padding: '10px 12px' }}>
        <div className="tnews-tours" style={{ display: 'flex', gap: 6, overflowX: 'auto' }}>
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

      {/* 記事一覧（1本目 hero + 以降サムネ行、計20本） */}
      <div style={{ padding: '12px 14px 0' }}>
        {/* hero */}
        <div style={{ marginBottom: 6 }}>
          <ImgPh w="100%" h={180} label="HERO / 優勝トロフィーを掲げるフリッツ" />
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 10, marginTop: 8 }}>
            <span style={{ color: catColor(hero.cat), fontWeight: 700 }}>{hero.cat}</span>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.45, marginTop: 3 }}>{hero.ttl}</div>
          <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{hero.d}</div>
        </div>

        {/* サムネ行 */}
        {rows.map((n, i) => (
          <div key={i} className="wf-row" style={{ alignItems: 'flex-start' }}>
            <ImgPh w={92} h={64} label="thumb" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, marginBottom: 1 }}>
                <span style={{ color: catColor(n.cat), fontWeight: 700 }}>{n.cat}</span>
              </div>
              <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.45 }}>{n.ttl}</div>
              <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{n.d}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ページネーション */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, padding: '16px 14px 6px' }}>
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
        <span className="wf-num" style={{ width: 30, height: 30, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, borderRadius: 4, border: '1px solid var(--wf-line)' }}>8</span>
        <span style={{ fontSize: 11, color: 'var(--wf-court)', fontWeight: 700, padding: '0 6px' }}>次へ</span>
      </div>

      <BackToTop />

      <style>{`
        .tnews-tours::-webkit-scrollbar { display: none; }
        .tnews-tours { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TourNewsFrame });
