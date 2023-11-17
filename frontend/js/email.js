
/*
$(document).ready( function() {
    $('#send').click(function(e) {
        e.preventDefault();

        // Find name, email and message by id
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // do something with these variables
        const submit = { name, email, message }
        const response = fetch('frontend/pages/contact.html', {
            method: 'POST',
            body: JSON.stringify(submit),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const json = response.json();

        

        // pop up message if message was sent or not
        // Reset form
        $('.form-control').val('');
    })
});
*/