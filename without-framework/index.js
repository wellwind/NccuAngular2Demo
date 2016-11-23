$(document).ready(function() {
    var value = 50;

    var setValue = function() {
        $('#value').val(value);
        $('#result').html(value);
    }

    $('#value').keyup(function() {
        value = parseInt($('#value').val());
        setValue();
    });

    $('#add').click(function() {
        value += 10;
        setValue(); 
    });

    $('#value').val(value);
    setValue();
});