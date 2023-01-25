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
    if (d == null) {
      console.error("No query found named: ", queryName);
    }

    var text = d[0].content[0][columnName];
    $(domTarget).text(resultFormatter(text, d));
  }, 500);
};