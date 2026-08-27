// TourEvent.jsx — ツアー / 大会ページ (トーナメント詳細)
// 大会ヘッダー / 大会結果 / ニュース / 大会概要 / TV放送 / 出場選手 を縦に積む1画面。
// ブロックごとに参考キャプチャをもらいながら順に追加していく。

// ─── 定義リスト行 (ラベル + 値) ───
// 参考UI: 大会名の下に「開催国 / コース / 賞金総額」をラベル+値で並べる形。
function EvRow({ label, children }) {
  return (
    <div style={{display:'flex', gap:10, padding:'6px 0', fontSize:11.5, lineHeight:1.5}}>
      <div style={{
        flex:'0 0 62px', color:'var(--wf-mute)', fontWeight:600, letterSpacing:'0.02em',
      }}>{label}</div>
      <div style={{flex:1, minWidth:0}}>{children}</div>
    </div>
  );
}

// ─── ① 大会ヘッダー ───
function TourEventHeader() {
  return (
    <div style={{padding:'14px 14px 0', background:'#fff'}}>
      {/* カテゴリ + 開催ステータス */}
      <div style={{display:'flex', gap:6, alignItems:'center', marginBottom:8}}>
        <span className="wf-cat wf-cat-tour">ATP1000</span>
        <span className="wf-cat wf-cat-outline">ハード</span>
        <span style={{
          marginLeft:'auto', display:'inline-flex', alignItems:'center', gap:4,
          fontSize:10, fontWeight:700, color:'var(--wf-mute)',
          border:'1px solid var(--wf-line)', padding:'2px 6px', borderRadius:2,
        }}>
          大会終了
        </span>
      </div>

      {/* 開催期間 → 大会名 の順 (参考UIどおり) */}
      <div className="wf-num" style={{fontSize:11.5, color:'var(--wf-ink-2)', marginBottom:2}}>
        2026年8月10日 〜 2026年8月17日
      </div>
      <h1 style={{margin:'0 0 2px', fontSize:21, fontWeight:800, letterSpacing:'-0.01em', lineHeight:1.3}}>
        シンシナティ・オープン
      </h1>
      <div style={{fontSize:11, color:'var(--wf-mute)', lineHeight:1.5, marginBottom:8}}>
        ウエスタン・アンド・サザン・オープン 2026
      </div>

      {/* ラベル + 値 */}
      <div style={{borderTop:'1px solid var(--wf-line-2)', paddingTop:4}}>
        <EvRow label="開催国">アメリカ</EvRow>
        <EvRow label="会場">
          リンドナー・ファミリー・テニスセンター（オハイオ州シンシナティ）
        </EvRow>
        <EvRow label="サーフェス">ハード（屋外）</EvRow>
        <EvRow label="賞金総額">
          <span className="wf-num">$9,193,540</span>
        </EvRow>
        <EvRow label="ドロー">
          <span className="wf-num">96</span>（本戦シングルス）
        </EvRow>
      </div>

    </div>
  );
}

// ─── 種目セレクタ (男子S / 男子D / 女子S / 女子D) ───
// 以降の「大会結果」「出場選手」はここで選んだ種目に連動して切り替わる。
function TourEventDrawTabs() {
  const items = ['男子シングルス', '男子ダブルス', '女子シングルス', '女子ダブルス'];
  return (
    // 実装時はスクロール追従(sticky)。ワイヤーフレームは全画面を一枚で見せるため固定しない。
    <div style={{
      background:'#fff', borderTop:'1px solid var(--wf-line)', borderBottom:'1px solid var(--wf-line)',
      marginTop:12,
    }}>
      <div className="wf-gnav" style={{borderBottom:0, padding:'0 6px'}}>
        {items.map((it, i) => (
          <div key={it} className={'wf-gnav-item' + (i === 0 ? ' on' : '')}>{it}</div>
        ))}
      </div>
    </div>
  );
}

// ─── ② 大会結果 ───
// 参考UI: [< | 8日目 ▼ | >] の日程ページャ → 日付+ラウンド+状態 → コート名 → 対戦カード。
// 終了した大会は最終日(=決勝)をデフォルト表示するので、開いた瞬間に結果が見える。

// セットスコア1マス (タイブレークは肩付き数字)
function SetScore({ g, tb, win }) {
  return (
    <span className="wf-num" style={{
      display:'inline-block', width:20, textAlign:'center',
      fontWeight: win ? 800 : 500,
      color: win ? 'var(--wf-ink)' : 'var(--wf-mute)',
    }}>
      {g}
      {tb != null && (
        <sup style={{fontSize:8, marginLeft:0.5, fontWeight:600, color:'var(--wf-mute)'}}>{tb}</sup>
      )}
    </span>
  );
}

// 選手1行 (写真 / 国旗 / 名前+シード / 勝者チェック / セットスコア)
function MatchPlayer({ p, last }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', gap:8, padding:'8px 10px',
      borderBottom: last ? 0 : '1px solid var(--wf-line-2)',
    }}>
      <ImgPh w={30} h={30} label="" style={{borderRadius:'50%', flexShrink:0, padding:0}} />
      <div style={{flex:1, minWidth:0}}>
        <div style={{display:'flex', alignItems:'center', gap:5}}>
          <span style={{
            fontFamily:'var(--wf-font-mono)', fontSize:8, fontWeight:700,
            border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)',
            color:'var(--wf-mute)', padding:'0 3px', flexShrink:0,
          }}>{p.cc}</span>
          <span style={{
            fontSize:12.5, fontWeight: p.win ? 800 : 600,
            color: p.win ? 'var(--wf-ink)' : 'var(--wf-ink-2)',
            whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
          }}>{p.name}</span>
          {p.seed && (
            <span className="wf-num" style={{fontSize:10, color:'var(--wf-mute)'}}>({p.seed})</span>
          )}
        </div>
        <div style={{fontSize:9.5, color:'var(--wf-mute-2)', marginTop:1}}>{p.country}</div>
      </div>
      <span style={{
        width:14, flexShrink:0, color:'var(--wf-court)',
        visibility: p.win ? 'visible' : 'hidden',
      }}>{Ico.check}</span>
      <div style={{display:'flex', gap:2, flexShrink:0}}>
        {p.sets.map((st, i) => <SetScore key={i} {...st} win={st.won} />)}
      </div>
    </div>
  );
}

// 1試合 (カード + スコア + 1ポイント速報リンク)
function MatchCard({ m }) {
  return (
    <div style={{border:'1px solid var(--wf-line)', background:'#fff', marginBottom:8}}>
      {/* コート名 + 試合状態 */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'6px 10px', background:'var(--wf-bg-2)', borderBottom:'1px solid var(--wf-line-2)',
      }}>
        <span className="wf-mono" style={{fontSize:9.5, color:'var(--wf-mute)', letterSpacing:'0.04em'}}>
          {m.court}
        </span>
        <span style={{fontSize:9.5, color:'var(--wf-mute)'}}>
          試合時間 <span className="wf-num">{m.time}</span>
        </span>
      </div>
      <MatchPlayer p={m.p1} />
      <MatchPlayer p={m.p2} last />
      {/* 1ポイント速報へ */}
      <div style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'8px 10px', borderTop:'1px solid var(--wf-line)',
        fontSize:11, fontWeight:700, color:'var(--wf-court)',
      }}>
        <span>試合詳細（1ポイント速報）</span>
        <span style={{display:'flex'}}>{Ico.chev}</span>
      </div>
    </div>
  );
}

// ─── トーナメント表（ブラケット） ───
function BR_Player({ p }) {
  return (
    <div style={{display:'flex', alignItems:'center', gap:5, padding:'4px 6px', fontSize:10.5}}>
      <span style={{fontFamily:'var(--wf-font-mono)', fontSize:8, fontWeight:700, border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)', color:'var(--wf-mute)', padding:'0 3px', flexShrink:0}}>{p.cc}</span>
      <span style={{flex:1, minWidth:0, fontWeight:p.win?800:500, color:p.win?'var(--wf-ink)':'var(--wf-ink-2)', whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{p.name}</span>
      <span style={{width:12, flexShrink:0, color:'var(--wf-court)', display:'flex', justifyContent:'center', visibility:p.win?'visible':'hidden'}}>{Ico.check}</span>
      {p.s != null && <span className="wf-num" style={{width:10, textAlign:'center', flexShrink:0, fontWeight:p.win?800:500, color:p.win?'var(--wf-ink)':'var(--wf-mute)'}}>{p.s}</span>}
    </div>
  );
}
function BR_Box({ m }) {
  return (
    <div style={{border:'1px solid var(--wf-line)', borderRadius:4, background:'#fff'}}>
      <BR_Player p={m.p1} />
      <div style={{height:1, background:'var(--wf-line-2)'}} />
      <BR_Player p={m.p2} />
    </div>
  );
}
function TourEventBracket() {
  const r3 = [
    { p1:{cc:'USA', name:'M.ダム', s:1}, p2:{cc:'HUN', name:'F.マロジャーン', s:2, win:true} },
    { p1:{cc:'ITA', name:'L.ソネゴ', s:0}, p2:{cc:'AUS', name:'J.ダックワース', s:2, win:true} },
    { p1:{cc:'GBR', name:'A.フェリー', s:2, win:true}, p2:{cc:'NED', name:'M.ロトヘリング', s:0} },
    { p1:{cc:'USA', name:'A.コバチェビッチ', s:2, win:true}, p2:{cc:'GRE', name:'S.チチパス', s:0} },
    { p1:{cc:'ARG', name:'J.セルンドロ', s:1, win:true}, p2:{cc:'ARG', name:'S.バエス', s:0} },
    { p1:{cc:'GER', name:'D.アルトマイヤー', s:0}, p2:{cc:'PER', name:'I.ブセ', s:2, win:true} },
    { p1:{cc:'AUS', name:'R.ヒジカタ', s:0}, p2:{cc:'FRA', name:'B.ボンジ', s:2, win:true} },
    { p1:{cc:'BEL', name:'B.バン デ ザン…', s:2, win:true}, p2:{cc:'ITA', name:'L.ダルデリ', s:0} },
  ];
  const qf = [
    { p1:{cc:'HUN', name:'F.マロジャーン'}, p2:{cc:'AUS', name:'J.ダックワース'} },
    { p1:{cc:'GBR', name:'A.フェリー'}, p2:{cc:'USA', name:'A.コバチェビッチ'} },
    { p1:{cc:'ARG', name:'J.セルンドロ'}, p2:{cc:'PER', name:'I.ブセ'} },
    { p1:{cc:'FRA', name:'B.ボンジ'}, p2:{cc:'BEL', name:'B.バン デ ザン…'} },
  ];
  return (
    <div>
      {/* ラウンドページャ: < | 3回戦  準々決勝 | > */}
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 0 10px'}}>
        <span style={{display:'flex', color:'var(--wf-ink)', padding:'0 2px'}}>{Ico.back}</span>
        <div style={{flex:1, display:'flex', justifyContent:'space-around', fontSize:12.5, fontWeight:800}}>
          <span>3回戦</span>
          <span>準々決勝</span>
        </div>
        <span style={{display:'flex', color:'var(--wf-ink)', padding:'0 2px', transform:'scaleX(-1)'}}>{Ico.back}</span>
      </div>
      {/* ブラケット本体（横スクロール） */}
      <div className="br-scroll" style={{display:'flex', gap:14, overflowX:'auto', paddingBottom:8, alignItems:'stretch'}}>
        <div style={{flex:'0 0 150px', display:'flex', flexDirection:'column', gap:8}}>
          {r3.map((m, i) => <BR_Box key={i} m={m} />)}
        </div>
        <div style={{flex:'0 0 150px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
          {qf.map((m, i) => <BR_Box key={i} m={m} />)}
        </div>
      </div>
      <div style={{marginTop:8}}>
        <Anno>準々決勝以降は左右の &lt; &gt; で移動。勝者はチェック＋太字、右端の数字は取得セット数。</Anno>
      </div>
    </div>
  );
}

function TourEventResults() {
  const [view, setView] = React.useState('schedule');
  const matches = [
    {
      court: 'CENTER COURT', time: '2:14',
      p1: { name: 'T.フリッツ', seed: 3, cc: 'USA', country: 'アメリカ', win: true,
            sets: [{g:7, tb:7, won:true}, {g:4}, {g:6, won:true}] },
      p2: { name: 'C.アルカラス', seed: 1, cc: 'ESP', country: 'スペイン',
            sets: [{g:6, tb:2}, {g:6, won:true}, {g:2}] },
    },
  ];
  return (
    <div style={{padding:'16px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:10,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        大会結果
      </h2>

      {/* 表示切替（セグメント）: 試合日程・結果 / トーナメント表 */}
      <div style={{display:'flex', border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)', padding:2, marginBottom:12}}>
        {[['schedule', '試合日程・結果'], ['bracket', 'トーナメント表']].map(([k, label]) => {
          const on = view === k;
          return (
            <div key={k} onClick={() => setView(k)} style={{
              flex:1, textAlign:'center', padding:'6px 0', fontSize:12, fontWeight:700, cursor:'pointer',
              background: on ? '#fff' : 'transparent', color: on ? 'var(--wf-ink)' : 'var(--wf-mute)',
              border: on ? '1px solid var(--wf-line)' : '1px solid transparent',
            }}>{label}</div>
          );
        })}
      </div>

      {view === 'schedule' ? (
        <React.Fragment>
          {/* 日程ページャ: < | 8日目 ▼ | > */}
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', border:'1px solid var(--wf-line)', background:'#fff', padding:'6px 8px'}}>
            <span style={{display:'flex', color:'var(--wf-ink)', padding:'0 2px'}}>{Ico.back}</span>
            <span style={{display:'inline-flex', alignItems:'center', gap:5, fontSize:13, fontWeight:800}}>
              8日目
              <span style={{display:'flex', color:'var(--wf-mute)'}}>{Ico.chevD}</span>
            </span>
            <span style={{display:'flex', color:'var(--wf-line)', padding:'0 2px', transform:'scaleX(-1)'}}>{Ico.back}</span>
          </div>
          {/* 日付 + ラウンド + 状態 */}
          <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'12px 0 6px'}}>
            <div style={{display:'flex', alignItems:'baseline', gap:8}}>
              <span className="wf-num" style={{fontSize:11.5, color:'var(--wf-mute)'}}>8/17(日)</span>
              <span style={{fontSize:14, fontWeight:800}}>決勝</span>
            </div>
            <span style={{fontSize:10.5, fontWeight:700, color:'var(--wf-mute)'}}>試合終了</span>
          </div>
          {matches.map((m, i) => <MatchCard key={i} m={m} />)}
        </React.Fragment>
      ) : (
        <TourEventBracket />
      )}
    </div>
  );
}

// ─── ③ ニュース ───
// 参考UI: 1本目だけヒーロー(大画像→見出し→日時)、2本目以降はサムネ+見出しの横並び。
// 日時は「2026年8月17日（日）21時40分」形式。大会に紐づく記事を新着順で5本。
function TourEventNews() {
  const hero = {
    ttl: 'フリッツ、アルカラスをフルセットで下し初のマスターズ制覇「地元の声援が背中を押した」',
    d: '2026年8月17日（日）21時40分',
  };
  const rows = [
    { ttl: 'アルカラス、決勝で第3セット失速 全米OPへ「疲労は言い訳にならない」', d: '2026年8月17日（日）20時15分' },
    { ttl: '【準決勝】シナー、フリッツに競り負け ハードコート12連勝でストップ', d: '2026年8月16日（土）18時30分' },
    { ttl: '西岡良仁、3回戦で敗退 マスターズ自己最高タイの成績', d: '2026年8月14日（木）09時05分' },
    { ttl: 'シンシナティ・オープン、賞金総額を前年比8%増額と発表', d: '2026年8月10日（月）12時00分' },
  ];
  return (
    <div style={{padding:'18px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:10,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        ニュース
      </h2>

      {/* 1本目: ヒーロー */}
      <div style={{marginBottom:4}}>
        <ImgPh w="100%" h={180} label="HERO / 優勝トロフィーを掲げるフリッツ" />
        <div style={{fontSize:13, fontWeight:700, lineHeight:1.45, marginTop:8}}>{hero.ttl}</div>
        <div className="wf-num" style={{fontSize:10, color:'var(--wf-mute)', marginTop:4}}>{hero.d}</div>
      </div>

      {/* 2本目以降: サムネ + 見出し */}
      {rows.map((n, i) => (
        <div key={i} className="wf-row" style={{alignItems:'flex-start'}}>
          <ImgPh w={88} h={62} label="thumb" style={{flexShrink:0}} />
          <div style={{flex:1, minWidth:0}}>
            <div style={{fontSize:12, fontWeight:600, lineHeight:1.45}}>{n.ttl}</div>
            <div className="wf-num" style={{fontSize:10, color:'var(--wf-mute)', marginTop:4}}>{n.d}</div>
          </div>
        </div>
      ))}

      <div style={{marginTop:12}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%', justifyContent:'space-between'}}>
          この大会のニュース一覧
          <span style={{display:'flex'}}>{Ico.chev}</span>
        </button>
      </div>
    </div>
  );
}

// ─── ④ 大会概要 ───
// 参考UIでは「概要 / 歴代優勝者」を本文の右下に小さなテキストリンクで並べていたが、
//   ・歴代優勝者 = 別ページへの遷移
// と遷移先の粒度が違うので、別ページ遷移は本文の下にフル幅の行リンク(シェブロン付き)で明示する。
function TourEventAbout() {
  const champs = [
    { y: '2025', name: 'J.シナー', cc: 'ITA' },
    { y: '2024', name: 'C.アルカラス', cc: 'ESP' },
    { y: '2023', name: 'N.ジョコビッチ', cc: 'SRB' },
  ];
  return (
    <div style={{padding:'18px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:10,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        大会概要
      </h2>

      {/* 本文 */}
      <div style={{fontSize:12, lineHeight:1.85, color:'var(--wf-ink-2)'}}>
        <p style={{margin:'0 0 12px'}}>
          全米オープン直前のハードコートシーズンを締めくくるATPマスターズ1000。
          ATPとWTAの併催大会で、上位ランカーがそろって出場する。
          男子シングルスの優勝者にはランキングポイント1000が与えられる。
        </p>
        <p style={{margin:0}}>
          1899年創設、アメリカで現存する最古のテニストーナメント。会場はオハイオ州シンシナティ近郊の
          リンドナー・ファミリー・テニスセンター。ATPシングルスの最多優勝はR.フェデラーの7回を数える。
        </p>
      </div>
      <div style={{
        paddingTop:8, fontSize:11.5, fontWeight:700, color:'var(--wf-court)',
        display:'flex', alignItems:'center', gap:4,
      }}>
        続きを読む<span style={{display:'flex'}}>{Ico.chevD}</span>
      </div>

      {/* 歴代優勝者（直近3年） */}
      <div style={{marginTop:12, border:'1px solid var(--wf-line)', background:'#fff'}}>
        {champs.map((c, i) => (
          <div key={c.y} style={{
            display:'flex', alignItems:'center', gap:8, padding:'8px 10px',
            borderBottom:'1px solid var(--wf-line-2)',
          }}>
            <span className="wf-num" style={{fontSize:11, fontWeight:700, color:'var(--wf-mute)', width:32}}>{c.y}</span>
            <span style={{
              fontFamily:'var(--wf-font-mono)', fontSize:8, fontWeight:700,
              border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)',
              color:'var(--wf-mute)', padding:'0 3px',
            }}>{c.cc}</span>
            <span style={{fontSize:12, fontWeight:600}}>{c.name}</span>
            {i === 0 && (
              <span style={{
                marginLeft:'auto', fontSize:9, fontWeight:700, color:'var(--wf-mute)',
              }}>前年優勝</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── ⑤ TV放送・インターネット配信情報 ───
// 参考UI: 「▼CS」「▼インターネット配信」の媒体グループ → 局/サービス名 → 日付+時間の行、
// 最後に注記と、右寄せの「TV放送予定一覧」リンク(全大会の放送日程ページへ)。
function BroadcastGroup({ group, outlets }) {
  return (
    <div style={{marginBottom:14}}>
      <div style={{
        fontSize:11, fontWeight:800, color:'var(--wf-ink)',
        display:'flex', alignItems:'center', gap:4, marginBottom:6,
      }}>
        <span style={{fontSize:9, color:'var(--wf-mute)'}}>▼</span>{group}
      </div>
      {outlets.map(o => (
        <div key={o.name} style={{marginBottom:8}}>
          <div style={{
            fontSize:12, fontWeight:700, color:'var(--wf-ink-2)',
            paddingBottom:4, borderBottom:'1px solid var(--wf-line-2)', marginBottom:4,
          }}>{o.name}</div>
          {o.slots.map((sl, i) => (
            <div key={i} style={{
              display:'flex', gap:8, fontSize:11.5, lineHeight:1.9,
              color:'var(--wf-ink-2)',
            }}>
              <span className="wf-num" style={{flex:'0 0 96px'}}>{sl.d}</span>
              <span className="wf-num" style={{flex:1}}>{sl.t}</span>
              {sl.live && (
                <span style={{
                  flexShrink:0, alignSelf:'center', fontSize:8.5, fontWeight:700, color:'#fff',
                  background:'var(--wf-clay)', padding:'1px 4px', letterSpacing:'0.04em',
                }}>生中継</span>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function TourEventBroadcast() {
  return (
    <div style={{padding:'18px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:10,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        TV放送・インターネット配信情報
      </h2>

      <BroadcastGroup group="BS・CS" outlets={[
        { name: 'WOWOWライブ', slots: [
          { d: '8月15日（金）', t: '23:00〜27:00', live: true },
          { d: '8月16日（土）', t: '23:00〜27:00', live: true },
          { d: '8月17日（日）', t: '22:00〜26:00', live: true },
        ]},
      ]} />

      <BroadcastGroup group="インターネット配信" outlets={[
        { name: 'WOWOWオンデマンド', slots: [
          { d: '8月10日（月）', t: '〜8月17日（日） 全コートLIVE', live: true },
        ]},
        { name: 'DAZN', slots: [
          { d: '8月16日（土）', t: '23:00〜', live: true },
          { d: '8月17日（日）', t: '22:00〜', live: true },
        ]},
      ]} />

      <div style={{fontSize:10.5, color:'var(--wf-mute)', lineHeight:1.6}}>
        ※生中継のみ記載。見逃し配信は各サービスで提供。
      </div>

      {/* 全大会の放送日程ページへ（ボタン） */}
      <div style={{marginTop:10}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%', justifyContent:'space-between'}}>
          TV放送予定一覧
          <span style={{display:'flex'}}>{Ico.chev}</span>
        </button>
      </div>
    </div>
  );
}

// ─── ⑥ 出場選手 ───
// 参考UI: 「シード / ランク / 選手名」の3カラム表 + 右上に更新日。
// 参考画像には見出しがないので、他ブロックと揃えて「出場選手」の見出しを立てる。
// 上位5名まで表示 → もっと見るで全出場選手一覧へ。ランキングページへの導線も併設。
function TourEventPlayers() {
  const players = [
    { seed: 1, rank: 6,  name: 'A.デミノー',   cc: 'AUS', country: 'オーストラリア' },
    { seed: 2, rank: 8,  name: 'B.シェルトン', cc: 'USA', country: 'アメリカ' },
    { seed: 3, rank: 10, name: 'T.フリッツ',   cc: 'USA', country: 'アメリカ' },
    { seed: 4, rank: 15, name: 'L.ムゼッティ', cc: 'ITA', country: 'イタリア' },
    { seed: 5, rank: 16, name: 'L.ティエン',   cc: 'USA', country: 'アメリカ' },
  ];
  const col = { seed: 44, rank: 44 };
  return (
    <div style={{padding:'18px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:6,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        出場選手
      </h2>
      <div className="wf-num" style={{
        fontSize:10, color:'var(--wf-mute)', textAlign:'right', marginBottom:6,
      }}>
        2026/08/10 更新
      </div>

      <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
        {/* 見出し行 */}
        <div style={{
          display:'flex', alignItems:'center',
          background:'var(--wf-bg-2)', borderBottom:'1px solid var(--wf-line)',
          fontSize:10, fontWeight:700, color:'var(--wf-mute)', padding:'6px 0',
        }}>
          <span style={{flex:`0 0 ${col.seed}px`, textAlign:'center'}}>シード</span>
          <span style={{flex:`0 0 ${col.rank}px`, textAlign:'center', borderLeft:'1px solid var(--wf-line)'}}>ランク</span>
          <span style={{flex:1, textAlign:'center', borderLeft:'1px solid var(--wf-line)'}}>選手名</span>
        </div>
        {/* 選手行 */}
        {players.map((p, i, arr) => (
          <div key={p.seed} style={{
            display:'flex', alignItems:'stretch',
            borderBottom: i < arr.length - 1 ? '1px solid var(--wf-line-2)' : 0,
          }}>
            <span className="wf-num" style={{
              flex:`0 0 ${col.seed}px`, display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:11, color:'var(--wf-mute)',
            }}>({p.seed})</span>
            <span className="wf-num" style={{
              flex:`0 0 ${col.rank}px`, display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:12.5, fontWeight:700, borderLeft:'1px solid var(--wf-line-2)',
            }}>{p.rank}</span>
            <div style={{
              flex:1, minWidth:0, display:'flex', alignItems:'center', gap:8,
              padding:'8px 10px', borderLeft:'1px solid var(--wf-line-2)',
            }}>
              <ImgPh w={30} h={30} label="" style={{borderRadius:'50%', flexShrink:0, padding:0}} />
              <div style={{minWidth:0}}>
                <div style={{fontSize:12.5, fontWeight:700, color:'var(--wf-court)'}}>{p.name}</div>
                <div style={{display:'flex', alignItems:'center', gap:4, marginTop:1}}>
                  <span style={{
                    fontFamily:'var(--wf-font-mono)', fontSize:8, fontWeight:700,
                    border:'1px solid var(--wf-line)', background:'var(--wf-bg-2)',
                    color:'var(--wf-mute)', padding:'0 3px',
                  }}>{p.cc}</span>
                  <span style={{fontSize:9.5, color:'var(--wf-mute-2)'}}>{p.country}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{marginTop:10}}>
        <button className="wf-btn wf-btn-out" style={{width:'100%', justifyContent:'space-between'}}>
          出場選手をすべて見る（96名）
          <span style={{display:'flex'}}>{Ico.chev}</span>
        </button>
      </div>

    </div>
  );
}

// ─── ⑦ 関連リンク (ページ末尾) ───
// ページ最後に、この大会から離れて回遊するための導線。
// 出場選手ブロック内のランキングリンクは「この5名の順位を確かめる」ための文脈内ショートカット、
// こちらは大会を見終わった後の入口として、ランキングと年間日程を独立させて置く。
function TourEventFooterLinks() {
  const links = [
    { ttl: 'ランキング', sub: '世界ランキング / レースランキング' },
    { ttl: '年間日程', sub: '2026年ツアーカレンダー（全大会の日程・カテゴリ・会場）' },
  ];
  return (
    <div style={{padding:'18px 14px 0'}}>
      <h2 style={{
        margin:0, fontSize:11, fontWeight:800, letterSpacing:'0.04em',
        color:'var(--wf-mute)', marginBottom:10,
        paddingBottom:6, borderBottom:'2px solid var(--wf-ink)',
      }}>
        関連リンク
      </h2>
      <div style={{border:'1px solid var(--wf-line)', background:'#fff'}}>
        {links.map((l, i, arr) => (
          <div key={l.ttl} style={{
            display:'flex', alignItems:'center', gap:10, padding:'12px 12px',
            borderBottom: i < arr.length - 1 ? '1px solid var(--wf-line-2)' : 0,
          }}>
            <div style={{flex:1, minWidth:0}}>
              <div style={{fontSize:13, fontWeight:700, color:'var(--wf-court)'}}>{l.ttl}</div>
              <div style={{fontSize:10, color:'var(--wf-mute)', marginTop:2, lineHeight:1.5}}>{l.sub}</div>
            </div>
            <span style={{display:'flex', color:'var(--wf-mute)', flexShrink:0}}>{Ico.chev}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TourEventFrame() {
  return (
    <Phone>
      <AppBar variant="detail" />
      <GNav active="ツアー" />
      <Crumb items={['TOP', 'ツアー', 'ATP', 'シンシナティ・オープン']} />

      <TourEventHeader />
      <TourEventDrawTabs />

      <TourEventResults />

      <TourEventNews />

      <TourEventPlayers />

      <TourEventAbout />

      <TourEventBroadcast />

      <TourEventFooterLinks />

      <div style={{height:24}} />

      <BackToTop />

      <style>{`
        @keyframes wfPulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        .br-scroll::-webkit-scrollbar { display: none; }
        .br-scroll { scrollbar-width: none; }
      `}</style>
    </Phone>
  );
}

Object.assign(window, { TourEventFrame, TourEventHeader, TourEventDrawTabs, TourEventResults, TourEventNews, TourEventAbout, TourEventBroadcast, TourEventPlayers, TourEventFooterLinks, MatchCard, EvRow });
