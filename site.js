// 版本号自动跟随 GitHub 最新 Release（学 OpenGym 的 site.js 思路：
// 网站永远不用跟着发版手动改号）。拉取失败就静默隐藏，不影响页面。
(async () => {
  try {
    const r = await fetch(
      'https://api.github.com/repos/kelinpan0524-cell/leanlift/releases/latest',
      { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) return;
    const j = await r.json();
    const name = j.tag_name || '';
    if (!name) return;
    document.querySelectorAll('#ver').forEach((el) => {
      el.textContent = name;
    });
  } catch (_) {
    document.querySelectorAll('#ver').forEach((el) => el.remove());
  }
})();
