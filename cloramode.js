console.log('Loading Clora Mode Utils');

_cloramode = {};

_cloramode.setTextFromResult = function ({
  queryName,
  columnName,
  domTarget,
  modeDatasets,
  resultFormatter = ((x, d) => x)
}) {
  console.log('CMU: Configuring first result text setter.');
  // console.log(queryName, columnName, domTarget, modeDatasets);
  setTimeout(function () {
    var d = modeDatasets.filter(function (d) {
      return d.queryName == queryName;
    });
    
    console.log("CMU Selected: ", d);

    if (d[0].count == 0) 
    {
      console.error('CMU: No Matching Records Found', d, d[0], columnName);
    }
    var text = "";
    text = d[0].content[0][columnName];
    
    $(domTarget).text(resultFormatter(text, d));
  }, 500);
};