$(document).ready(function() {
    // Email validation
    $("#email").validate({
      required: true,
      email: true,
      remote: {
        url: "check_email.php",
        type: "post",
        data: {
          email: function() {
            return $("#email").val();
          }
        }
      }
    });
  
    // Username validation
    $("#username").validate({
      required: true,
      minlength: 5,
      maxlength: 20,
      remote: {
        url: "check_username.php",
        type: "post",
        data: {
          username: function() {
            return $("#username").val();
          }
        }
      }
    });
  
    // Password validation
    $("#password").validate({
      required: true,
      minlength: 8,
      maxlength: 20,
      passwordStrength: true
    });

    // Custom method for password strength validation
    $.validator.addMethod(
        "passwordStrength",
        function(value, element) {
          // Define the regular expressions for password strength requirements
          var strongPassword = new RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,20}$"
          );
  
          return this.optional(element) || strongPassword.test(value);
        },
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@ $ ! % * ? &)."
      );
  
      // Function to check and display password strength
      $("#password").on("keyup", function() {
        var passwordStrengthContainer = $("#password-strength-container");
        var password = $(this).val();
        var passwordStrengthText = "";
  
        if (password.length === 0) {
          passwordStrengthText = "";
        } else if (password.length >= 8) {
          passwordStrengthText = "Strong";
        } else {
          passwordStrengthText = "Weak";
        }
  
        passwordStrengthContainer.text(passwordStrengthText);
      });
    });

    // Repeat password validation
    $("#repeat_password").validate({
      required: true,
      equalTo: "#password"
    });
  
    // Birth date validation
    $("#birth_date").validate({
      required: true,
      format: "mm/dd/yyyy"
    });
  
    // Country validation
    $("#country").validate({
      required: true
    });
  
    // Image validation
    $("#image").validate({
      accept: "image/jpeg,image/png"
    });
  
    // User presentation validation
    $("#user_presentation").validate({
      maxlength: 100
    });
  
    // Submit button validation
    $("#submit").validate({
      submitHandler: function() {
        alert("Form submitted successfully!");
      }
    });
  
    // Reset button validation
    $("#reset").validate({
      resetForm: true
    });


  $(document).ready(function() {
    // Add error icons and messages
    function showErrorIcon(element) {
      element.after('<span class="error-icon">X</span>');
    }

    function removeErrorIcon(element) {
      element.next('.error-icon').remove();
    }

    function showErrorMessage(element, message) {
      element.after('<span class="error-message">' + message + '</span>');
    }

    function removeErrorMessage(element) {
      element.next('.error-message').remove();
    }

    // Email validation
    $("#email").validate({
      rules: {
        email: {
          required: true,
          email: true,
          remote: {
            url: "check_email.php",
            type: "post",
            data: {
              email: function() {
                return $("#email").val();
              }
            }
          }
        }
      },
      messages: {
        email: {
          remote: "Email already exists"
        }
      },
      errorPlacement: function(error, element) {
        showErrorIcon(element);
        showErrorMessage(element, error.text());
      },
      success: function(label, element) {
        removeErrorIcon($(element));
        removeErrorMessage($(element));
      }
    });

    // Add similar validation for other fields...

    // Submit button validation
    $("#submit").click(function() {
      if ($("form").valid()) {
        alert("Form submitted successfully!");
      }
    });

    // Reset button validation
    $("#reset").click(function() {
      $("form").validate().resetForm();
      $(".error-icon").remove();
      $(".error-message").remove();
    });
  });


