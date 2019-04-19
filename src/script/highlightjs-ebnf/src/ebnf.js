/*
Language: Extended Backus-Naur Form
Author: imaoki <imaoki117@gmail.com>
*/

function(hljs) {
  var ebnfIdentifier = {
    className: 'keyword',
    begin: /[a-zA-Z][a-zA-Z0-9_-]*/
  };

  var ebnfString = {
    className: 'string',
    begin: /".*?"/
  };

  var ebnfSingleQuotString = {
    className: 'single-quot-string',
    begin: /'.*?'/
  };

  var ebnfComment = {
    className: 'comment',
    begin: /\(\*/, end: /\*\)/
  };

  var ebnfSpecialSequence = {
    className: 'special-sequence',
    begin: /\?[^\?]+?\?/
  };

  var ebnfTermination = {
    className: 'termination',
    begin: /;$/
  };

  return {
    case_insensitive: true,
    contains: [
      ebnfIdentifier,
      ebnfString,
      ebnfSingleQuotString,
      ebnfComment,
      ebnfSpecialSequence,
      ebnfTermination
    ]
  };
}
