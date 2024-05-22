
/**
   * Back to top button
   */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}

//  google translater start

function googleTranslateElementInit(){
    new google.translate.TranslateElement(
    {pageLanguage:'en'},
    'google_translate_element'
    );
    }

//  google translater end


 /**
   * Preloader start
   */
 let preloader = select('#preloader');
 if (preloader) {
   window.addEventListener('load', () => {
     preloader.remove()
   });
 }
  /**
   * Preloader end
   */