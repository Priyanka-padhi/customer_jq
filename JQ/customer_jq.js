function fname_val(){
    let fname = $('#fname').val();
    let name_pattern = "[a-zA-Z]{2,15}$";

    if (fname.length == 0) {
        let text = 'Enter your name';
        $('#fnameErr').text(text); 
    }
    else if(!fname.match(name_pattern)){
    let text = 'Name must have alphabets & of length 2-15';
    $('#fnameErr').text(text); 
    }
 }
 function lname_val(){
        let lname = $('#lname').val();
        let name_pattern = "[a-zA-Z]{2,15}$";
        if (lname.length == 0) {
            let text = 'Enter your name';
            $('#lnameErr').text(text); 
        }
        else if(!lname.match(name_pattern)){
        let text = 'Name must have alphabets & of length 2-15';
        $('#lnameErr').text(text); 
        }
    }
function add1_val(){
    let add1 = $('#streetadd1').val();
    let add_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
    
    if(!add1.match(add_pattren)){
    let text = 'Please enter valid address';
    $('#st1Err').text(text); 
    }
}
function add2_val(){
    let add2 = $('#streetadd2').val();
    let add_pattren = "[A-Za-z0-9'\.\-\s\,]{2,100}$";
    
    if(!add2.match(add_pattren)){
    let text = 'Please enter valid address';
    $('#st2Err').text(text); 
    }
}
function city_val(){
    let city = $('#city').val();
    let city_pattren = "[A-Za-z]{3,15}$";
    
    if(!city.match(city_pattren)){
    let text = 'Please enter a valid city';
    $('#cityErr').text(text); 
    }
}
function state_val(){
    let state = $('#state').val();
    let state_pattren = "[A-Za-z]{3,15}$";
    
    if(!state.match(state_pattren)){
    let text = 'Please enter a valid state';
    $('#stateErr').text(text); 
    }
}
function pin_val(){
    let pin = $('#pin').val();
    let pin_pattren = "^[0-9]{6}$";
    
    if(!pin.match(pin_pattren)){
    let text = 'Enter a valid pincode';
    $('#pinErr').text(text); 
    }
}
function phn_val(){
    let phn = $('#phone').val();
        let phn_pattren = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";
        
        if(!phn.match(phn_pattren)){
        let text = 'Enter a valid phone number';
        $('#phnErr').text(text); 
        }
}
function mail_val(){
    let mail = $('#email').val();
        let mail_pattren = "/^\S+@\S+\.\S+$/";
        
        if(!mail.match(mail_pattren)){
        let text = 'Please enter a valid email-id';
        $('#emailErr').text(text); 
        }
}
function feed_val(){
    let feed = $('#feed').val();
        if (feed.length == 0) {
            let text = 'Please write your feedback';
            $('#feedErr').text(text); 
            }
}
function sug_val(){
    let sug = $('#sugg').val();
        if (sug.length == 0) {
            let text = 'Please write your suggestion';
            $('#suggErr').text(text); 
            }
}
$(document).ready(function(){
    
    $("#fname").blur(function(){
        fname_val();
    });

    $("#lname").blur(function(ln){
        lname_val();
    });

    $("#streetadd1").blur(function(){
        add1_val();
    });

    $("#streetadd2").blur(function(){
        add2_val();
    });

    $("#city").blur(function(){
        city_val();
    });

    $("#state").blur(function(){
        state_val();
    });
    $("#pin").blur(function(){
        pin_val();
    });
    $("#phone").blur(function(){
        phn_val();
    });
    $("#email").blur(function(){
        mail_val();
    });
    $("#feed").blur(function(){
        feed_val();
    });
    $("#sugg").blur(function(){
        sug_val();
    });
    $("#submit").click(function(event) {   
        event.preventDefault(); 

        if($('input[type=radio][name=gender]:checked').length == 0)
        {
            let text = 'Please select any one option';
            $('#genderErr').text(text); 
        }
        fname_val();
        lname_val();
        add1_val();
        add2_val();
        city_val();
        state_val();
        pin_val();
        phn_val();
        mail_val();
        feed_val();
        sug_val();
    });
  }); 
 