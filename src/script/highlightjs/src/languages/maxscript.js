/*
Language: MAXScript
Author: imaoki <imaoki117@gmail.com>
Description: MAXScript is the built-in scripting language of 3ds Max.
Category: graphics
*/

function(hljs) {
  var mxsKeywords = {
    keyword: 'about and animate as at by case catch collect continue coordsys do else exit fn for from function global if in local macroscript mapped max not of off on or parameters persistent plugin private public rcmenu return rollout set struct then throw to tool try undo utility when where while with',
    'predefined-global': 'black blue brown dontcollect e false gray green ok orange pi red true undefined unsupplied white x_axis y_axis yellow z_axis',
    'system-global': 'activegrid activemeditslot ambientcolor ambientcolorcontroller animationrange animbuttonenabled animbuttonstate backgroundcolor backgroundcolorcontroller backgroundimagefilename currentmateriallibrary currenttime displaygamma displaysafeframes editorfont editorfontsize editorshowpath editortabwidth enableaccelerators environmentmap escapeenable fileingamma fileoutgamma flyofftime framerate globaltracks hardwarelockid heapfree heapsize hotspotangleseparation inputtextcolor lightlevel lightlevelcontroller lighttintcolor lighttintcolorcontroller listener localprerendscript localtime lyricdirectory macrorecorder manipulatemode maxfilename maxfilepath messagetextcolor numatmospherics numeffects numsubobjectlevels outputtextcolor playactiveonly playbackloop postrendscript prerendscript productappid realtimeplayback rendatmosphere rendcamnode rendcolorcheck renddither256 renddithertrue rendend renderdisplacements rendereffects renderer renderheight renderpixelaspect renderpresetmrulist renderwidth rendfieldorder rendfieldrender rendfilenumberbase rendforce2side rendhidden rendimageaspectratio rendimgseqtype rendlockimageaspectratio rendlockpixelaspectratio rendmultithread rendnthframe rendnthserial rendntsc_pal rendoutputfilename rendpickupframes rendpixelaspectratio rendsavefile rendshowvfb rendsimplifyarealights rendstart rendsuperblack rendsuperblackthresh rendtimetype renduseactiveview rendusedevice renduseimgseq rendusenet rendvidcorrectmethod rendviewid rendviewindex rootnode rootscene scenematerials scriptspath showendresult skiprenderedframes slidertime stacklimit subobjectlevel superclasses ticksperframe timedisplaymode trackviewnodes useenvironmentmap usepostrendscript useprerendscript videoposttracks'
  };

  var mxsIdentifier = {
    className: 'identifier',
    begin: /[a-zA-Z_][a-zA-Z_0-9]*/,
    keywords: mxsKeywords
  };

  var mxsQuotedIdentifier = {
    className: 'quoted-identifier',
    begin: /'/, end: /'/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var mxsName = {
    className: 'name-literal',
    begin: /\#[a-zA-Z_0-9]+/
  };

  var mxsNumber = {
    className: 'number',
    begin: /-?((0[xX][a-fA-F0-9]+|0[xX])[LP]?|[0-9]+\.(?!\.)[0-9]*([eEdD][\+-]?[0-9]+)?|\.[0-9]+([eEdD][\+-]?[0-9]+)?|[0-9]+([LP]|[eEdD][\+-]?[0-9]+)?)/
  };

  var mxsString = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var mxsVerbatim = {
    className: 'verbatim',
    begin: /@"/, end: /"/
  };

  var mxsTime = {
    className: 'time',
    begin: /-?((0[xX][a-fA-F0-9]+|0[xX])[mst]|(([0-9]+\.[0-9]*|\.[0-9]+|[0-9]+)[msft])+|[0-9]+:([0-9]+\.[0-9]*|\.[0-9]+)|([0-9]+\.[0-9]*|\.[0-9]+|[0-9]+)n)/
  };

  var mxsPathName = {
    className: 'pathname',
    begin: /\$([a-zA-Z0-9_\*\?\\\/]|\.{3})*/
  };

  var mxsBlockComment = {
    className: 'comment',
    begin: /\/\*/, end: /\*\//
  };

  var mxsLineComment = {
    className: 'comment',
    begin: /--/, end: /$/
  };

  return {
    case_insensitive: true,
    aliases: ['mxs'],
    keywords: mxsKeywords,
    contains: [
      mxsBlockComment,
      mxsLineComment,
      mxsIdentifier,
      mxsQuotedIdentifier,
      mxsTime,
      mxsNumber,
      mxsString,
      mxsVerbatim,
      mxsName,
      mxsPathName
    ]
  };
}
