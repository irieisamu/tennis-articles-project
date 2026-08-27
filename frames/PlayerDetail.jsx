// PlayerDetail.jsx — ツアー / 選手詳細
// 現行tennis365 選手詳細のデータをそのまま反映 + この選手のニュース。
// 選手一覧・選手検索・ランキングから遷移。

function PlayerDetailFrame() {
  const h2 = {
    margin: 0, fontSize: 11, fontWeight: 800, letterSpacing: '0.04em',
    color: 'var(--wf-mute)', marginBottom: 8, paddingBottom: 6, borderBottom: '2px solid var(--wf-ink)',
  };

  // 基本情報（現ページの項目をそのまま）
  const profile = [
    ['国籍', '日本'],
    ['出身国 / 居住国', '日本（島根県松江市） / アメリカ・フロリダ州'],
    ['生年月日', '1989年12月29日'],
    ['性別', '男'],
    ['利き腕', '右利き（バックハンド両手打ち）'],
    ['身長', '178 cm'],
    ['体重', '73 kg'],
    ['プロ転向日', '2007年'],
    ['テニスラケット', 'Wilson'],
    ['テニスシューズ', 'Nike'],
    ['テニスウエア', 'ユニクロ'],
  ];

  const bio = [
    '自己最高世界ランク：4位（2015年3月2日付）',
    'キャリア通算成績：433勝212敗（2023年7月31日付）',
    '北京オリンピック日本代表（2008）',
    'ロンドンオリンピック：ベスト8（2012）',
    'リオデジャネイロ・オリンピック：銅メダル（2016）',
    '東京オリンピック：ベスト8（2021）',
    'ATPツアー・ファイナルズ：ベスト4（2014 / 2016）',
  ];
  const gs = [
    '全豪オープン：ベスト8（2012 / 2015 / 2016 / 2019）',
    '全仏オープン：ベスト8（2015 / 2017 / 2019）',
    'ウィンブルドン：ベスト8（2018 / 2019）',
    '全米オープン：準優勝（2014）',
  ];
  const others = [
    'メンフィス・オープン：優勝（2013 / 2014 / 2015 / 2016）',
    '楽天ジャパン・オープン：優勝（2012 / 2014）',
    'デルレイビーチ国際テニス選手権：優勝（2008）',
    'バルセロナ・オープン・サバデル：優勝（2014 / 2015）',
    'マレーシア・オープン：優勝（2014）',
    'シティ・オープン：優勝（2015）',
    'ブリスベン国際：優勝（2019）',
  ];

  const heroNews = {
    ttl: '錦織圭、ワイルドカードで全米オープン本戦へ 「まだ上を目指せる」',
    d: '2026年8月20日（水）18時30分',
  };
  const news = [
    { ttl: '錦織圭、ツアー復帰後初のベスト8 復調に手応え', d: '2026年8月12日（火）11時40分' },
    { ttl: '錦織圭、シンシナティ予選を突破 本戦初戦は第5シードと', d: '2026年8月10日（月）09時05分' },
    { ttl: '【コラム】錦織圭、ベテランとして描く現在地とこれから', d: '2026年8月05日（火）12時00分' },
  ];

  const List = ({ items }) => (
    <ul style={{ margin: 0, padding: '0 0 0 18px', fontSize: 11.5, lineHeight: 1.85, color: 'var(--wf-ink-2)' }}>
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );

  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', '選手', '錦織 圭']} />

      {/* ヒーロー：写真 + 名前 + 導線 */}
      <div style={{ padding: '14px 14px 12px', background: '#fff', borderBottom: '1px solid var(--wf-line)', display: 'flex', gap: 12 }}>
        <ImgPh w={84} h={84} label="PHOTO" style={{ borderRadius: 6, flexShrink: 0 }} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 2 }}>
            <span style={{ fontSize: 8.5, fontWeight: 700, color: '#fff', background: 'var(--wf-court)', padding: '1px 4px' }}>JPN</span>
            <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--wf-mute)' }}>ATP・シングルス</span>
          </div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 800, letterSpacing: '-0.01em' }}>錦織 圭</h1>
          <div style={{ fontSize: 10, color: 'var(--wf-mute-2)', marginTop: 1 }}>Kei Nishikori</div>
          <div style={{ display: 'flex', gap: 12, marginTop: 8, fontSize: 10.5, fontWeight: 700, color: 'var(--wf-court)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>画像を見る{Ico.chev}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 2 }}>ニュースを見る{Ico.chev}</span>
          </div>
        </div>
      </div>

      {/* 現在ランキング */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: 'var(--wf-bg-2)', borderBottom: '1px solid var(--wf-line)' }}>
        <span className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)' }}>8月24日現在</span>
        <span style={{ fontSize: 11, fontWeight: 700, marginLeft: 'auto' }}>ATPランキング</span>
        <span className="wf-num" style={{ fontSize: 18, fontWeight: 800, color: 'var(--wf-court)' }}>477</span>
        <span style={{ fontSize: 10, color: 'var(--wf-mute)' }}>位（95p）</span>
      </div>

      {/* 基本情報 */}
      <div style={{ padding: '16px 14px 0' }}>
        <h2 style={h2}>基本情報</h2>
        <div style={{ border: '1px solid var(--wf-line)' }}>
          {profile.map(([l, v], i) => (
            <div key={l} style={{ display: 'flex', borderBottom: i < profile.length - 1 ? '1px solid var(--wf-line-2)' : 0 }}>
              <span style={{ flex: '0 0 108px', fontSize: 10.5, fontWeight: 700, color: 'var(--wf-mute)', background: 'var(--wf-bg-2)', padding: '8px 10px' }}>{l}</span>
              <span style={{ flex: 1, minWidth: 0, fontSize: 11.5, padding: '8px 10px' }}>{v}</span>
            </div>
          ))}
          <div style={{ display: 'flex' }}>
            <span style={{ flex: '0 0 108px', fontSize: 10.5, fontWeight: 700, color: 'var(--wf-mute)', background: 'var(--wf-bg-2)', padding: '8px 10px' }}>オフィシャルページ</span>
            <a href="http://keinishikori.com/" style={{ flex: 1, minWidth: 0, fontSize: 11.5, padding: '8px 10px', color: 'var(--wf-court)', wordBreak: 'break-all' }}>keinishikori.com</a>
          </div>
        </div>
      </div>

      {/* 経歴 */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>選手の経歴</h2>
        <List items={bio} />
      </div>

      {/* グランドスラム大会結果 */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>グランドスラム大会結果</h2>
        <List items={gs} />
      </div>

      {/* その他大会結果 */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>その他の大会結果</h2>
        <List items={others} />
      </div>

      {/* この選手のニュース */}
      <div style={{ padding: '18px 14px 0' }}>
        <h2 style={h2}>この選手のニュース</h2>
        <div style={{ marginBottom: 4 }}>
          <ImgPh w="100%" h={170} label="HERO / 錦織 圭 プレー写真" />
          <div style={{ fontSize: 13, fontWeight: 700, lineHeight: 1.45, marginTop: 8 }}>{heroNews.ttl}</div>
          <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{heroNews.d}</div>
        </div>
        {news.map((n, i) => (
          <div key={i} className="wf-row" style={{ alignItems: 'flex-start' }}>
            <ImgPh w={92} h={64} label="thumb" style={{ flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.45 }}>{n.ttl}</div>
              <div className="wf-num" style={{ fontSize: 10, color: 'var(--wf-mute)', marginTop: 4 }}>{n.d}</div>
            </div>
          </div>
        ))}
        <button className="wf-btn wf-btn-out" style={{ width: '100%', marginTop: 10 }}>この選手のニュースをもっと読む</button>
      </div>

      <BackToTop />
    </Phone>
  );
}

Object.assign(window, { PlayerDetailFrame });
