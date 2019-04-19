/*! © 2019 imaoki | MIT License | https://github.com/imaoki */
;(function(){
  $('.remove').remove();

  var tocElement = document.getElementById('toc');
  if (tocElement) {
    var headingArray = TOC.createHeadingArray(
      document.querySelector('.content > .body h2'), 2, 2
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

  $('.js').removeClass('hidden');

  var codeElements = document.getElementsByTagName('code');
  for (var i = 0, iLen = codeElements.length; i < iLen; i++) {
    var e = codeElements[i];
    e.innerHTML = e.innerHTML.replace(/&/g, '&amp;')
    e.innerHTML = e.innerHTML.replace(/</g, '&lt;')
    e.innerHTML = e.innerHTML.replace(/>/g, '&gt;')
    e.innerHTML = e.innerHTML.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
})();
