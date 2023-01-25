# wally-public
Public Data Tools from Clora

## `setTextFromResult`

Allows a report to set a custom string when the filter updates. Commonly used
to dynamically update the report title.

### Usage:

1. Open the [HTML Editor](https://mode.com/example-gallery/how-to/) for your report in Mode.
2. Add the following to the **top** of the html file.
  ```
  <script src="https://cdn.jsdelivr.net/gh/clora/wally-public@0.2/cloramode.js"></script>
  ```
3. Add the span tag for the text you want to update. For example, if you wanted to update the title:
  Add `<span id="clora_consultant_name">` to the title tag, like so:
  ```
  <h1>{{ title }} for <span id="clora_consultant_name"></span></h1>
  ```
4. Add the following to the **bottom** of the file, updating the parameters as appropriate.
  ```
<script>
  _cloramode.setTextFromResult({
    queryName: "Consultants",
    columnName: "CONSULTANT_NAME",
    domTarget: "#clora_consultant_name",
    modeDatasets: datasets,
    resultFormatter: function(x, d) {
      console.log(d);
      if (d[0].count !== 1) return "SELECT CONSULTANT ON RIGHT AND CLICK APPLY";
      else return x;
    }
  });
</script>
