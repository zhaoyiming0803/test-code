;(function () {

  function copy () {
    const input = document.createElement('input');
    input.setAttribute('value', this.wechat);
    input.setAttribute('readonly', 'readonly');
    input.select();
    document.body.appendChild(input);
    input.setSelectionRange(0, 9999);
    try {
      document.execCommand('copy');
      console.log('复制成功');
    } catch (e) {
      console.log('操作失败，请手动复制');
    } finally {
      document.body.removeChild(input);
    }
  }

})();