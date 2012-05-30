(function() {

  domready(function() {
    impress().init();
    hljs.tabReplace = '  ';
    return hljs.initHighlightingOnLoad();
  });

}).call(this);
