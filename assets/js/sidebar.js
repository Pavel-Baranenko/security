



const html = document.querySelector('html');
const footer = document.querySelector('footer')
const aside = document.querySelector('#sidebar');
const content = document.querySelector('#main_content');
if (aside != undefined && content != undefined) {
  document.addEventListener('scroll', event => {
    if (window.outerWidth < 992) {
      aside.style.margin = '';
      aside.style.position = ''
      content.style.marginLeft = '';
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.marginTop = '';
      aside.style.bottom = ''
      return;
    }
    if (html.scrollTop === 0) {
      aside.style.margin = '';
      aside.style.position = ''
      content.style.marginLeft = '';
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.marginTop = '';
      aside.style.bottom = ''
    }
    else if ((html.scrollTop + 55 + aside.clientHeight) < (html.scrollHeight - footer.clientHeight - 36)) {
      aside.style.position = 'fixed';
      aside.style.maxHeight = 'calc(100vh - 55px)'
      aside.style.overflow = 'scroll';
      aside.style.marginTop = (html.scrollTop) > 100 ? '2.5rem' : '';
      // aside.style.marginTop = (html.scrollTop) > 100 ? '2.5rem' : '';
      content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
      aside.style.bottom = ''
    }
    else {
      aside.style.position = 'absolute';
      aside.style.bottom = '36px'
      aside.style.maxHeight = ''
      aside.style.overflow = '';
      aside.style.marginTop = (html.scrollTop) > 100 ? '2.5rem' : '';
      content.style.marginLeft = window.outerWidth < 1280 ? 'calc(300px + 1.25rem)' : 'calc(300px + 2.5rem)';
    }
  })
}


