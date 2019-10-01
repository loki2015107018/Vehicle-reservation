
function display() {
    var dropdown = document.getElementById("ddlRole").value;
    var branch = document.getElementById("ddlBranch").value;
    var UserName = document.getElementById("txtUserName").value;
    var user_name = /^[a-zA-Z0-9]+$/;
    var password = document.getElementById("txtPassword").value;
    var Pwd = /^[a-zA-Z0-9\$@]+$/;
    var CPassword = document.getElementById("txtCPassword").value;
    var FirstName = document.getElementById("txtFirstName").value;
    var fname = /^[a-zA-Z]{2,15}$/;
    var lastname = document.getElementById("txtLastName").value;
    var lname = /^[a-zA-Z]{2,15}$/;
    var age = document.getElementById("txtAge").value;
    var bool = isNaN(age);
    var contactno = document.getElementById("txtMobile").value;
    var Contact = /^[0-9]{10}$/;
    var email = document.getElementById('txtEmail').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
    if (dropdown == "") {
        ErrFunction("Role is required");
        document.getElementById('ddlRole').focus();
        return false;
    }
    else if (branch == "") {
        ErrFunction("branch is required");
        document.getElementById("ddlBranch").focus();
        return false;
    }
    else if (UserName == "") {
        ErrFunction("UserName is required");
        document.getElementById("txtUserName").focus();
        return false;
    }
    else if (!user_name.test(UserName)) {
        ErrFunction("User Name should not contain special characters");
        return false;
    }
    else if (password == "") {
        ErrFunction("password is required");
        document.getElementById("txtPassword").focus();
        return false;
    }
    else if (!Pwd.test(password)) {
        ErrFunction("Password should contain only alphabets,numbers,@,$");
        document.getElementById("txtPassword").focus();
        return false;
    }
    else if (CPassword == "") {
        ErrFunction("Confirm password is required");
        document.getElementById("txtCPassword").focus();
        return false;
    }
    else if (password != CPassword) {
        ErrFunction("Password does not match");
        document.getElementById("txtCPassword").focus();
        return false;
    }
    else if (FirstName == "") {
        ErrFunction("FirstName is required");
        document.getElementById("txtFirstName").focus();
        return false;
    }
    else if (!fname.test(FirstName)) {
        ErrFunction("First Name should only contain alphabets(<15)");
        return false;
    }
    else if (lastname == "") {
        document.getElementById("txtLastName").focus();
        ErrFunction("last name is required");
        return false;
    }
    else if (!lname.test(lastname)) {
        ErrFunction("Last Name should only contain alphabets(<15)");
        return false;
    }
    else if (age.length < 1) {
        ErrFunction("age is required");
        document.getElementById("txtAge").focus();
        return false;
    }
    else if (isNaN(age) || age < 1 || age > 100) {
        ErrFunction("The age must be a number between 1 and 100");
        return false;
    }
    else if (bool == true) {
        ErrFunction("Age has to be a number");
        document.getElementById("txtAge").focus();
        return false;
    }
    else if (contactno.length < 1) {
        ErrFunction("Contact number is required");
        document.getElementById("txtMobile").focus();
        return false;
    }
    else if (!Contact.test(contactno)) {
        ErrFunction("Please provide valid mobile number");
        return false;
    }
    else if (email == "") {
        ErrFunction("email is required");
        return false;
    }
    else if (!filter.test(email)) {
        ErrFunction('Please provide a valid email address');
        email.focus();
        return false;
    }
    
    else 
    {        
        return true;
    }




}
