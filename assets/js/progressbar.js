function progressBar() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = scroll / height * 100;
  // let scroolHeight = 14.5;
  // document.getElementById('progressBar').style.width = (scroolHeight - (scrolled * 10)) + '%';
  document.getElementById('progressBar').style.marginLeft = (scrolled) + '%';
}
window.addEventListener('scroll', progressBar);


// function progressBar() {
//   let scroll = document.body.scrollTop || document.documentElement.scrollTop;
//   let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   let scrolled = scroll / height * 100;
//   let src = 10.5
//   document.getElementById('progressBar').style.marginLeft = (scrolled) + '%';
//   document.getElementById('progressBar').style.width = (scrolled - src) + '%';

// }
// window.addEventListener('scroll', progressBar);