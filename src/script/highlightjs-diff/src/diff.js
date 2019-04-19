/*
Language: Diff
Author: imaoki <imaoki117@gmail.com>
Description: Supports normal, context and unified format.
Category: common
*/

function(hljs) {
  var diffRange = {
    className: 'range',
    relevance: 10,
    variants: [
      {begin: /^[ \t]*@{2}[ \t]+-\d+(,\d+)?[ \t]+\+\d+(,\d+)?[ \t]+@{2}/},
      {begin: /^[ \t]*[\*-]{3}[ \t]+\d+,\d+[ \t]+[\*-]{4}/},
      {begin: /^[ \t]*(\d+,)?\d+[acd]\d+(,\d+)?/}
    ]
  };

  var diffComment = {
    className: 'comment',
    variants: [
      {begin: /^[ \t]*[\*\-\+]{3}.*$/},
      {begin: /^[ \t]*\\.*$/}
    ]
  };

  var diffDeletion = {
    className: 'deletion',
    begin: /^[ \t]*[-<].*$/
  };

  var diffAddition = {
    className: 'addition',
    begin: /^[ \t]*[\+>].*$/
  };

  var diffChange = {
    className: 'change',
    begin: /^[ \t]*!.*$/
  };

  return {
    case_insensitive: true,
    aliases: ['patch'],
    contains: [
      diffRange,
      diffComment,
      diffDeletion,
      diffAddition,
      diffChange
    ]
  };
}
