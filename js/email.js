$(document).ready( function() {
    $('#send').click(function() {
        // Find name, email and message by id
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // do something with these variables

        // Reset form
        $('.form-control').val('');
    })
});
