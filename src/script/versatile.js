/*! © 2019 imaoki | MIT License | https://github.com/imaoki */
;(function(){
  $('.remove').remove();

  var tocElement = document.getElementById('toc');
  if (tocElement) {
    var headingArray = TOC.createHeadingArray(
      document.querySelector(
        '.content > .body > h2, .content > .body > h3, .content > .body > h4'
      ), 2, 6
    );
    if (headingArray) {
      TOC.addRelationShip(headingArray);
      var tocInner = TOC.toTocUi(headingArray);
      tocElement.appendChild(tocInner);
    }
    var nav = document.getElementById('nav');
    if (nav) {
      nav.insertBefore(tocElement, null);
    }
  }

  $('#pagetop').hide();
  $('#pagetop').click(function() {
    $('html, body').animate({scrollTop: 0});
    return false;
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });

  $('.content > .body .footnote-backref').text('');
  $('.content > .body a:has(img)').addClass('img-anchor');

  if (hljs) {
    hljs.configure({languages: []});
    hljs.initHighlighting();
  }

  $(document).ready(function() {
    $('.iframe-class').cbIframeSize();

    $('pre:has(code)').each(function(index, element){
      var classValue = $($(element).children('code')[0]).attr('class');
      var re = /.*\blanguage-(\w+)\b.*/;
      var dataType = classValue.match(re) ? classValue.replace(re, '$1') : 'text';
      $(element).attr('data-type', dataType);
    });
  });

  $('.js').removeClass('hidden');
})();
