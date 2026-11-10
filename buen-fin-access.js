(() => {
  const openPanel = () => window.location.assign('buen-fin-admin.html');
  if (new URLSearchParams(location.search).get('admin') === '1') openPanel();
  document.addEventListener('keydown', event => {
    if (event.ctrlKey && event.altKey && event.key.toLowerCase() === 'a') {
      event.preventDefault(); openPanel();
    }
  });
})();
