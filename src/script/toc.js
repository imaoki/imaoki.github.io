/*! TocJS | © 2015 cyokodog | MIT license | https://github.com/cyokodog/TocJS */
;(function(){
  window.TOC = window.TOC || {};

  TOC.createHeadingArray = createHeadingArray;
  TOC.addRelationShip = addRelationShip;
  TOC.toTocUi = toTocUi;

  function createHeadingArray(startHeadingElement, fromHeadingLevel, toHeadingLevel) {
    var reSection = new RegExp('section', 'i');
    var _domToHeadingArray = function(arr, element) {
      if (!element) return;
      var re = new RegExp('h([' + fromHeadingLevel + '-' + toHeadingLevel + '])', 'i')
      var headers = re.exec(element.tagName);
      !headers || headers.forEach(function(level, i) {
        if(!i) return;
        arr.push({
          level: level,
          element: element
        });
      })

      var nextElement = element.nextElementSibling;
      if (reSection.test(element.parentElement.tagName) && element.parentElement.nextElementSibling) {
        nextElement = element.parentElement.nextElementSibling;
        if (reSection.test(nextElement.tagName)) {
          nextElement = nextElement.firstElementChild;
        }
      }
      _domToHeadingArray(arr, nextElement);

      //_domToHeadingArray(arr, element.nextElementSibling);
      return arr;
    }
    return _domToHeadingArray([], startHeadingElement);
  }

  function addRelationShip(headingArray) {
    var len = headingArray.length;
    for (var i = len - 1; i >= 0; i--) {
      if (i > 0) {
        var _getParentNode = function(selfIndex) {
          for (var i = selfIndex; i >= 0; i--) {
            if (i > 0) {
              var beforeNode = headingArray[i-1];
              if (beforeNode.level < headingArray[selfIndex].level) {
                return beforeNode;
              }
            }
          }
          return undefined;
        }
        var currentNode = headingArray[i];
        var parentNode = _getParentNode(i);
        if (parentNode) {
          currentNode.parentNode = parentNode;
          parentNode.children = parentNode.children || [];
          parentNode.children.push(currentNode);
        }
      }
    }
    return this;
  }

  function toTocUi(headingArray) {
    var ul = document.createElement('ul');
    headingArray.forEach(function(v, i) {
      var container = ul;
      if (v.parentNode) {
        container = v.parentNode.childrenContainer;
        if (!container) {
          container = v.parentNode.childrenContainer = document.createElement('ul');
          v.parentNode.item.appendChild(container);
        }
      }
      var link = document.createElement('a');
      link.href='javascript:void(0)';
      link.textContent = v.element.textContent;
      link.addEventListener('click', function() {
        if (typeof jQuery == 'undefined') {
          v.element.scrollIntoView(true)
        }
        else {
          $('html,body').animate({scrollTop: $(v.element).offset().top});
        }
      }, false)
      var li = v.item = document.createElement('li');
      li.setAttribute('class', 'h' + v.level);
      li.appendChild(link);
      container.appendChild(li);
    })
    return ul;
  }
})();
