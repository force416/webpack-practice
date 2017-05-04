require("block-ui");
var $ = require("jquery");
var util = require("./local/util.js");
require("../css/index.css");

//alert($.fn.jquery);
$(document).on('click', '#myButton', function () {
    $.blockUI();
});