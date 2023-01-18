console.log('Loading Clora Mode Utils');

_cloramode = {};

_cloramode.setTextFromFirstResult = function({
    queryName,
    columnName, 
    domTarget, 
    modeDatasets,
    resultFormatter = (x) => x
  }) {
      console.log('CMU: Configuring text setter.');
      // console.log(queryName, columnName, domTarget, modeDatasets);
      setTimeout(function() {
        var d = modeDatasets.filter(function(d) {
          return d.queryName == queryName;
        });
        var text =d[0].content[0][columnName];
        $(domTarget).text(text);
      }, 500);
    };
