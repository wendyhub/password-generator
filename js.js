
var lower = 'abcdefghijklmnopqrstuvwxyz';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var special = '!@#$^&%*()+=-[]\/{}|:<>?,.';
var numbers = '1234567890';
var pwd = '';
var lowerSelection;
var upperSelection;
var specialSelection;
var numberSelection;
​
function generate() {
    var confirmLength = prompt("What length would you like the password to be? (Between 8 to 128 characters)");
    if (isNaN(confirmLength) || confirmLength < 8 || confirmLength > 128) {
    var confirmLength = prompt("The age must be a number between 1 and 100, please try again.");

    }

    else {
        var lower= confirm("Would you like to use lowercase characters?");
        if (lower == true) {
            lowerSelection = true
        }

        var upper= confirm("Would you like to use uppercase characters?");
        if (upper == true) {
            upperSelection = true
        }

        var special= confirm("Would you like to use special characters?");
        if (special == true) {
            specialSelection = true
        }

        var numbers= confirm("Would you like to use numerical characters?");
        if (numbers == true) {
            numberSelection = true
        }
    }

    if ( lowerSelection === false && upperSelection === false && specialSelection === false && numberSelection === false ) {
        alert("At least one character type must be selected")
    }
    
    document.getElementById('generate').addEventListener("click",function(e){
        var characters = confirmLength;
        (lowerSelection == true) ? characters += lower : '';
        (upperSelection == true) ? characters += upper : '';
        (specialSelection == true) ? characters += special : '';
        (numbersSelection == true) ? characters += numbers : '';
        yourPW.value = password(confirmLength.value, characters);
    });
    
    function password(l,characters){
            var pwd = '';
        for(var i = 1; i<l; i++){
                pwd = characters.charAt(Math.floor(Math.random() * confirmLength.length));
                lower[rand];upper[rand];special[rand];numbers[rand];
            }
        return pwd;
    }
        
}   

    /*
    rand = Math.floor(Math.random() * Number(confirmLength.length));
lower[rand];upper[rand];special[rand];numbers[rand];
}
*/


document.getElementById("password").innerHTML = pwd;


function copied() {
    var copyText = document.getElementById("password");
    document.execCommand("copy");
    alert("The password has been copied to your clipboard!");
  }
