// app.js

var app = function app() {
    $('form').on('submit', function(e){
        e.preventDefault();
    });


    var charify = function(inputStr){
        return he.encode(inputStr);
    };

    var titleCase = function(inputStr){
        var strAr = inputStr.split(' ');
        var tcAr = strAr.map(_.capitalize);
        return tcAr.join(' ');
    };

    console.log('so it begins...');
    var $inputEl = $("#pastedText");
    var $resultEl = $('#results');
    $inputEl.on('change', function(e) {
        var entered = $inputEl.val();
        var lowercase = charify(entered);
        $("#sameCase").val(lowercase);
        $resultEl.append('<li>' + lowercase + '</li>');
        var titlecase = charify(titleCase(entered));
        $resultEl.append('<li>' + titlecase + '</li>');
        $("#capCase").val(titlecase);
        console.log(titlecase);
    });
}();

