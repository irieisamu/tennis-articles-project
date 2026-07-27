// Shared.jsx — 共通のヘッダ・フッタ・アイコン・注釈パーツ

// ─── アイコン (シンプルな線画) ─────────────────────────────
const Ico = {
  menu: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 6h18M3 12h18M3 18h18"/></svg>,
  search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  user: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 5-6 8-6s7 2 8 6"/></svg>,
  bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 8a6 6 0 0 1 12 0c0 6 2 8 2 8H4s2-2 2-8z"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>,
  home: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/></svg>,
  news: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>,
  ball: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M3.5 8.5C7 9 11 11 12 15c1 4 4.5 6 8 5.5M20.5 8.5C17 9 13 11 12 15c-1 4-4.5 6-8 5.5"/></svg>,
  bookmark: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 3h12v18l-6-4-6 4z"/></svg>,
  share: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8 11 8-4M8 13l8 4"/></svg>,
  chev: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6"/></svg>,
  chevD: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6"/></svg>,
  plus: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>,
  drag: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.4"/><circle cx="15" cy="6" r="1.4"/><circle cx="9" cy="12" r="1.4"/><circle cx="15" cy="12" r="1.4"/><circle cx="9" cy="18" r="1.4"/><circle cx="15" cy="18" r="1.4"/></svg>,
  check: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="m5 12 5 5L20 7"/></svg>,
  play: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4v16l14-8z"/></svg>,
  eye: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>,
  clock: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  cart: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 4h2l2 12h11l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>,
  back: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M15 6l-6 6 6 6"/></svg>,
  more: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg>,
  settings: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>,
};

// ─── ロゴ ───────────────────────────────────────────────────
function Logo() {
  return (
    <div className="wf-appbar-logo">
      TENNIS<span>press</span>
    </div>
  );
}

// ─── アプリバー (上部ヘッダ) ───────────────────────────────
function AppBar({ variant = 'top', title }) {
  if (variant === 'detail') {
    return (
      <div className="wf-appbar">
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <span className="wf-appbar-ico">{Ico.back}</span>
          <Logo />
        </div>
        <div style={{display:'flex', alignItems:'center', gap:12}}>
          <span className="wf-appbar-ico">{Ico.search}</span>
          <span className="wf-appbar-ico">{Ico.more}</span>
        </div>
      </div>
    );
  }
  if (variant === 'cms') {
    return (
      <div className="wf-appbar" style={{background:'#1a1a18', borderColor:'#333'}}>
        <div style={{display:'flex', alignItems:'center', gap:8, color:'#fff'}}>
          <span style={{color:'#fff'}} className="wf-appbar-ico">{Ico.back}</span>
          <div style={{fontSize:12, color:'#c5c3bc'}}>CMS / 記事作成</div>
        </div>
        <div style={{display:'flex', alignItems:'center', gap:8}}>
          <button style={{background:'transparent', color:'#c5c3bc', border:'1px solid #444', fontSize:11, padding:'4px 8px', borderRadius:2, fontWeight:600}}>下書き保存</button>
          <button style={{background:'var(--wf-court)', color:'#fff', border:0, fontSize:11, padding:'5px 10px', borderRadius:2, fontWeight:700}}>公開</button>
        </div>
      </div>
    );
  }
  return (
    <div className="wf-appbar">
      <div style={{display:'flex', alignItems:'center', gap:10}}>
        <span className="wf-appbar-ico">{Ico.menu}</span>
        <Logo />
      </div>
      <div style={{display:'flex', alignItems:'center', gap:12}}>
        <span className="wf-appbar-ico">{Ico.search}</span>
        <span className="wf-appbar-ico">{Ico.bell}</span>
        <span className="wf-appbar-ico">{Ico.user}</span>
      </div>
    </div>
  );
}

// ─── グローバルナビ (横スクロール) ─────────────────────────
function GNav({ active = 'ニュース' }) {
  const items = ['TOP', 'ニュース', 'ツアー', 'エクウィップメント', 'レッスン', 'スクール', 'サークル', '大会', 'イベント', 'レンタルコート', 'コーチ求人'];
  return (
    <div className="wf-gnav">
      {items.map(it => (
        <div key={it} className={'wf-gnav-item' + (it === active ? ' on' : '')}>{it}</div>
      ))}
    </div>
  );
}

// ─── パンくず ───────────────────────────────────────────────
function Crumb({ items }) {
  return (
    <div className="wf-crumb">
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{margin:'0 6px', opacity:0.5}}>›</span>}
          <span>{it}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── フッタタブバー ─────────────────────────────────────────
function TabBar({ active = 'ホーム' }) {
  const items = [
    { k: 'ホーム', ico: Ico.home },
    { k: 'ニュース', ico: Ico.news },
    { k: 'ツアー', ico: Ico.ball },
    { k: '保存', ico: Ico.bookmark },
    { k: 'マイページ', ico: Ico.user },
  ];
  return (
    <div className="wf-tabbar">
      {items.map(it => (
        <div key={it.k} className={'wf-tabbar-item' + (it.k === active ? ' on' : '')}>
          <span className="ico">{it.ico}</span>
          <span>{it.k}</span>
        </div>
      ))}
    </div>
  );
}

// ─── 画像プレースホルダ ─────────────────────────────────────
function ImgPh({ w, h, label, dark = false, style = {} }) {
  return (
    <div
      className={'wf-img' + (dark ? ' wf-img-dark' : '')}
      style={{ width: w, height: h, ...style }}
    >
      <span className="wf-img-label">{label}</span>
    </div>
  );
}

// ─── 注釈 ──────────────────────────────────────────────────
function Anno({ children, style = {} }) {
  return <div className="wf-anno" style={style}>{'// ' + children}</div>;
}
function AnnoTag({ children }) {
  return <span className="wf-anno-inline">{children}</span>;
}

// ─── フレームキャプション (キャンバス配置時の説明) ─────────
function FrameCaption({ title, children }) {
  return (
    <div className="wf-caption">
      <b>{title}</b>
      {children}
    </div>
  );
}

// ─── スマホフレーム (シンプル・軽量版) ─────────────────────
function Phone({ children, width = 375, height = 780 }) {
  return (
    <div style={{
      width, height,
      background: '#fff',
      borderRadius: 20,
      border: '1px solid #cfcbc1',
      boxShadow: '0 2px 6px rgba(0,0,0,0.04), 0 12px 30px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* ステータスバー (簡素) */}
      <div style={{
        height: 28, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 18px', fontSize: 11, fontWeight: 700,
        borderBottom: '1px solid #f1efea',
        fontFamily: '-apple-system, system-ui',
      }}>
        <span>9:41</span>
        <span style={{fontSize:10, opacity:0.6}}>●●●●   ▮▮▮</span>
      </div>
      <div className="wf-frame" style={{
        height: height - 28,
        overflow: 'auto',
      }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  Ico, Logo, AppBar, GNav, Crumb, TabBar, ImgPh, Anno, AnnoTag, FrameCaption, Phone,
});
