
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]\/{}|:<>?,.';
var numbers = '1234567890';



//generate random passowrd


function generate() {
    var confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
    if (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        alert("The age must be a number between 1 and 100");
        var confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
      /*  if (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
        {return confirmLength}
        } */
    }

    else {
        var lower= confirm("Would you like to use lowercase characters?");
        if (lower == true) {
            selection = true
        }

        var upper= confirm("Would you like to use uppercase characters?");
        if (upper == true) {
            selection = true
        }

        var special= confirm("Would you like to use special characters?");
        if (special == true) {
            selection = true
        }

        var numbers= confirm("Would you like to use numerical characters?");
        if (numbers == true) {
            selection = true
        }
    }

    if (selection == false) {
        alert("At least one character type must be selected")
    }


    generate.addEventListener("click",function(e){
        var characters = confirmLength;
        (lower == true) ? characters += lower : '';
        (upper == true) ? characters += upper : '';
        (special == true) ? characters += special : '';
        (numbers == true) ? characters += numbers : '';
        yourPw.value = password(confirmLength.value, characters);
    });
    
    function password(l,characters){
            var pwd = '';
        for(var i = 1; i<l; i++){
                pwd = characters.charAt(Math.floor(Math.random() * confirmLength.length));
        }
        return pwd;
        
    }
    document.getElementById("Password").innerHTML = pwd;
}
