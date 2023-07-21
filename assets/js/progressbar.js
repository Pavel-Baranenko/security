function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = scroll / height * 10;
  let scroolHeight = 14.5;
  document.getElementById('progressBar').style.width = (scroolHeight - scrolled) + '%';
}
window.addEventListener('scroll', progressBar);


