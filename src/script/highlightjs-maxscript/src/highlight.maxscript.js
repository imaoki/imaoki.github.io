(function(a){var b=typeof window==="object"&&window||typeof self==="object"&&self;if(typeof exports!=="undefined"){a(exports)}else{if(b){b.hljs=a({});if(typeof define==="function"&&define.amd){define([],function(){return b.hljs})}}}}(function(y){var f=[],A=Object.keys;var j={},u={};var a=/^(no-?highlight|plain|text)$/i,x=/\blang(?:uage)?-([\w-]+)\b/i,p=/((^(<[^>]+>|\t|)+|(?:\n)))/gm;var m="</span>";var c={classPrefix:"hljs-",tabReplace:null,useBR:false,languages:undefined};var e={"&":"&amp;","<":"&lt;",">":"&gt;"};function q(F){return F.replace(/[&<>]/gm,function(G){return e[G]})}function E(F){return F.nodeName.toLowerCase()}function n(G,H){var F=G&&G.exec(H);return F&&F.index===0}function k(F){return a.test(F)}function B(K){var I,G,J,F;var H=K.className+" ";H+=K.parentNode?K.parentNode.className:"";G=x.exec(H);if(G){return o(G[1])?G[1]:"no-highlight"}H=H.split(/\s+/);for(I=0,J=H.length;I<J;I++){F=H[I];if(k(F)||o(F)){return F}}}function v(H,I){var G;var F={};for(G in H){F[G]=H[G]}if(I){for(G in I){F[G]=I[G]}}return F}function D(H){var F=[];(function G(I,J){for(var K=I.firstChild;K;K=K.nextSibling){if(K.nodeType===3){J+=K.nodeValue.length}else{if(K.nodeType===1){F.push({event:"start",offset:J,node:K});J=G(K,J);if(!E(K).match(/br|hr|img|input/)){F.push({event:"stop",offset:J,node:K})}}}}return J})(H,0);return F}function z(G,I,M){var H=0;var P="";var J=[];function L(){if(!G.length||!I.length){return G.length?G:I}if(G[0].offset!==I[0].offset){return(G[0].offset<I[0].offset)?G:I}return I[0].event==="start"?G:I}function K(R){function Q(S){return" "+S.nodeName+'="'+q(S.value)+'"'}P+="<"+E(R)+f.map.call(R.attributes,Q).join("")+">"}function O(Q){P+="</"+E(Q)+">"}function F(Q){(Q.event==="start"?K:O)(Q.node)}while(G.length||I.length){var N=L();P+=q(M.substring(H,N[0].offset));H=N[0].offset;if(N===G){J.reverse().forEach(O);do{F(N.splice(0,1)[0]);N=L()}while(N===G&&N.length&&N[0].offset===H);J.reverse().forEach(K)}else{if(N[0].event==="start"){J.push(N[0].node)}else{J.pop()}F(N.splice(0,1)[0])}}return P+q(M.substr(H))}function t(I){function F(J){return(J&&J.source)||J}function G(K,J){return new RegExp(F(K),"m"+(I.case_insensitive?"i":"")+(J?"g":""))}function H(N,M){if(N.compiled){return}N.compiled=true;N.keywords=N.keywords||N.beginKeywords;if(N.keywords){var J={};var O=function(P,Q){if(I.case_insensitive){Q=Q.toLowerCase()}Q.split(" ").forEach(function(R){var S=R.split("|");J[S[0]]=[P,S[1]?Number(S[1]):1]})};if(typeof N.keywords==="string"){O("keyword",N.keywords)}else{A(N.keywords).forEach(function(P){O(P,N.keywords[P])})}N.keywords=J}N.lexemesRe=G(N.lexemes||/\w+/,true);if(M){if(N.beginKeywords){N.begin="\\b("+N.beginKeywords.split(" ").join("|")+")\\b"}if(!N.begin){N.begin=/\B|\b/}N.beginRe=G(N.begin);if(!N.end&&!N.endsWithParent){N.end=/\B|\b/}if(N.end){N.endRe=G(N.end)}N.terminator_end=F(N.end)||"";if(N.endsWithParent&&M.terminator_end){N.terminator_end+=(N.end?"|":"")+M.terminator_end}}if(N.illegal){N.illegalRe=G(N.illegal)}if(N.relevance==null){N.relevance=1}if(!N.contains){N.contains=[]}var L=[];N.contains.forEach(function(P){if(P.variants){P.variants.forEach(function(Q){L.push(v(P,Q))})}else{L.push(P==="self"?N:P)}});N.contains=L;N.contains.forEach(function(P){H(P,N)});if(N.starts){H(N.starts,M)}var K=N.contains.map(function(P){return P.beginKeywords?"\\.?("+P.begin+")\\.?":P.begin}).concat([N.terminator_end,N.illegal]).map(F).filter(Boolean);N.terminators=K.length?G(K.join("|"),true):{exec:function(){return null}}}H(I)}function d(ad,W,U,ac){function F(ag,ah){var ae,af;for(ae=0,af=ah.contains.length;ae<af;ae++){if(n(ah.contains[ae].beginRe,ag)){return ah.contains[ae]}}}function K(af,ae){if(n(af.endRe,ae)){while(af.endsParent&&af.parent){af=af.parent}return af}if(af.endsWithParent){return K(af.parent,ae)}}function L(ae,af){return !U&&n(af.illegalRe,ae)}function P(ag,ae){var af=X.case_insensitive?ae[0].toLowerCase():ae[0];return ag.keywords.hasOwnProperty(af)&&ag.keywords[af]}function G(ak,ai,ah,ag){var ae=ag?"":c.classPrefix,af='<span class="'+ae,aj=ah?"":m;af+=ak+'">';return af+ai+aj}function Y(){var ag,ah,af,ae;if(!T.keywords){return q(N)}ae="";ah=0;T.lexemesRe.lastIndex=0;af=T.lexemesRe.exec(N);while(af){ae+=q(N.substring(ah,af.index));ag=P(T,af);if(ag){H+=ag[1];ae+=G(ag[0],q(af[0]))}else{ae+=q(af[0])}ah=T.lexemesRe.lastIndex;af=T.lexemesRe.exec(N)}return ae+q(N.substr(ah))}function Q(){var af=typeof T.subLanguage==="string";if(af&&!j[T.subLanguage]){return q(N)}var ae=af?d(T.subLanguage,N,true,S[T.subLanguage]):i(N,T.subLanguage.length?T.subLanguage:undefined);if(T.relevance>0){H+=ae.relevance}if(af){S[T.subLanguage]=ae.top}return G(ae.language,ae.value,false,true)}function ab(){O+=(T.subLanguage!=null?Q():Y());N=""}function aa(ae){O+=ae.className?G(ae.className,"",true):"";T=Object.create(ae,{parent:{value:T}})}function R(ae,ai){N+=ae;if(ai==null){ab();return 0}var ag=F(ai,T);if(ag){if(ag.skip){N+=ai}else{if(ag.excludeBegin){N+=ai}ab();if(!ag.returnBegin&&!ag.excludeBegin){N=ai}}aa(ag,ai);return ag.returnBegin?0:ai.length}var ah=K(T,ai);if(ah){var af=T;if(af.skip){N+=ai}else{if(!(af.returnEnd||af.excludeEnd)){N+=ai}ab();if(af.excludeEnd){N=ai}}do{if(T.className){O+=m}if(!T.skip){H+=T.relevance}T=T.parent}while(T!==ah.parent);if(ah.starts){aa(ah.starts,"")}return af.returnEnd?0:ai.length}if(L(ai,T)){throw new Error('Illegal lexeme "'+ai+'" for mode "'+(T.className||"<unnamed>")+'"')}N+=ai;return ai.length||1}var X=o(ad);if(!X){throw new Error('Unknown language: "'+ad+'"')}t(X);var T=ac||X;var S={};var O="",V;for(V=T;V!==X;V=V.parent){if(V.className){O=G(V.className,"",true)+O}}var N="";var H=0;try{var M,J,I=0;while(true){T.terminators.lastIndex=I;M=T.terminators.exec(W);if(!M){break}J=R(W.substring(I,M.index),M[0]);I=M.index+J}R(W.substr(I));for(V=T;V.parent;V=V.parent){if(V.className){O+=m}}return{relevance:H,value:O,language:ad,top:T}}catch(Z){if(Z.message&&Z.message.indexOf("Illegal")!==-1){return{relevance:0,value:q(W)}}else{throw Z}}}function i(I,H){H=H||c.languages||A(j);var F={relevance:0,value:q(I)};var G=F;H.filter(o).forEach(function(J){var K=d(J,I,false);K.language=J;if(K.relevance>G.relevance){G=K}if(K.relevance>F.relevance){G=F;F=K}});if(G.language){F.second_best=G}return F}function l(F){return !(c.tabReplace||c.useBR)?F:F.replace(p,function(G,H){if(c.useBR&&G==="\n"){return"<br>"}else{if(c.tabReplace){return H.replace(/\t/g,c.tabReplace)}}})}function g(G,I,H){var J=I?u[I]:H,F=[G.trim()];if(!G.match(/\bhljs\b/)){F.push("hljs")}if(G.indexOf(J)===-1){F.push(J)}return F.join(" ").trim()}function w(K){var I,H,F,G,J;var L=B(K);if(k(L)){return}if(c.useBR){I=document.createElementNS("http://www.w3.org/1999/xhtml","div");I.innerHTML=K.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")}else{I=K}J=I.textContent;F=L?d(L,J,true):i(J);H=D(I);if(H.length){G=document.createElementNS("http://www.w3.org/1999/xhtml","div");G.innerHTML=F.value;F.value=z(H,D(G),J)}F.value=l(F.value);K.innerHTML=F.value;K.className=g(K.className,L,F.language);K.result={language:F.language,re:F.relevance};if(F.second_best){K.second_best={language:F.second_best.language,re:F.second_best.relevance}}}function C(F){c=v(c,F)}function s(){if(s.called){return}s.called=true;var F=document.querySelectorAll("pre code");f.forEach.call(F,w)}function b(){addEventListener("DOMContentLoaded",s,false);addEventListener("load",s,false)}function h(F,H){var G=j[F]=H(y);if(G.aliases){G.aliases.forEach(function(I){u[I]=F})}}function r(){return A(j)}function o(F){F=(F||"").toLowerCase();return j[F]||j[u[F]]}y.highlight=d;y.highlightAuto=i;y.fixMarkup=l;y.highlightBlock=w;y.configure=C;y.initHighlighting=s;y.initHighlightingOnLoad=b;y.registerLanguage=h;y.listLanguages=r;y.getLanguage=o;y.inherit=v;y.IDENT_RE="[a-zA-Z]\\w*";y.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*";y.NUMBER_RE="\\b\\d+(\\.\\d+)?";y.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";y.BINARY_NUMBER_RE="\\b(0b[01]+)";y.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";y.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0};y.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y.BACKSLASH_ESCAPE]};y.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y.BACKSLASH_ESCAPE]};y.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/};y.COMMENT=function(G,F,I){var H=y.inherit({className:"comment",begin:G,end:F,contains:[]},I||{});H.contains.push(y.PHRASAL_WORDS_MODE);H.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0});return H};y.C_LINE_COMMENT_MODE=y.COMMENT("//","$");y.C_BLOCK_COMMENT_MODE=y.COMMENT("/\\*","\\*/");y.HASH_COMMENT_MODE=y.COMMENT("#","$");y.NUMBER_MODE={className:"number",begin:y.NUMBER_RE,relevance:0};y.C_NUMBER_MODE={className:"number",begin:y.C_NUMBER_RE,relevance:0};y.BINARY_NUMBER_MODE={className:"number",begin:y.BINARY_NUMBER_RE,relevance:0};y.CSS_NUMBER_MODE={className:"number",begin:y.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0};y.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[y.BACKSLASH_ESCAPE]}]};y.TITLE_MODE={className:"title",begin:y.IDENT_RE,relevance:0};y.UNDERSCORE_TITLE_MODE={className:"title",begin:y.UNDERSCORE_IDENT_RE,relevance:0};y.METHOD_GUARD={begin:"\\.\\s*"+y.UNDERSCORE_IDENT_RE,relevance:0};return y}));

hljs.registerLanguage('maxscript',

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

);
