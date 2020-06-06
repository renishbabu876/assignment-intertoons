$(function () {

    $("form[name='enquiry']").validate({

        rules: {

            name: "required",
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                matches: "[0-9]+"
            },
            email: {
                required: true,
                email: true
            }
        },

        messages: {
            name: "Please enter name",
            phone: {
                required: "Please enter phone",
                matches: "Please enter valid phone number",
                minlength: "Phone number should be 10 digit long",
                maxlength: "Phone number should be 10 digit long"
            },
            email: {
                required: "Please provide a email",
                email: "Enter valid email"
            }
        },

        submitHandler: function (form) {
            form.submit();
        }
    });
});