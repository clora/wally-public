console.log('Loading Clora Mode Utils');

_cloramode = {};
_cloramode.setTitle = function(queryName, filterName, domTarget, modeDatasets) {
  console.log('CMU: Configuring title setter.');
  setTimeout(function() {
    var d = modeDatasets.filter(function(d) {
      return d.queryName == queryName;
    });
    var numConsultants = d[0].count;
    var consultantName =d[0].content[0][filterName];
    
    $(domTarget).text(consultantName);
  }, 500);
};
