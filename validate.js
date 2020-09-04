function validateForm(){
        var n = document.form1.fname;
        var g = document.form1.Mname;
        var h = document.form1.lname;
        var addr = document.form1.addr;
        var email = document.form1.email;
        var p1 = document.form1.pass1;
        var p2 = document.form1.pass2;
        var mum = document.form1.mum;
        var gender = document.getElementById("rd");
        var gender = document.getElementById("rd2");
        var cb1 = document.form1.chk1;
        var cb2 = document.form1.chk2;
        var alphabets = /^[A-Za-z][A-Za-z ]+$/;
        var alphanum = /^[A-Za-z0-9)(,/. ]+$/;
        var num = /^[0-9]+$/;
		var x= email.value;
		var atpos = x.indexOf("@");
		var dotpos = x.lastIndexOf(".");
    
    
        if (n.value == "")
        {
            window.alert("Please enter your First name.");
            n.focus();
            return false;
        }
    
        if(!(n.value.match(alphabets)))
            {alert("Use alphabets in name"); n.focus; return false;}

        if (g.value == "")
        {
            window.alert("Please enter your Middle name.");
            g.focus();
            return false;
        }
    
        if(!(g.value.match(alphabets)))
            {alert("Use alphabets in name"); g.focus; return false;}

        if (h.value == "")
        {
            window.alert("Please enter your Last name.");
            h.focus();
            return false;
        }
    
        if(!(h.value.match(alphabets)))
            {alert("Use alphabets in name"); h.focus; return false;}




        if (addr.value == ""){window.alert("Provide address"); return false;}
        if (!(addr.value.match(alphanum)))
            {
                alert("Provide valid Address"); addr.focus; return false;
            }

        
    

        if (email.value == "" || email.value == null)
        {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

        if (email.value.indexOf("@", 0) < 0)
        {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }

        if (email.value.indexOf(".", 0) < 0)
        {
            window.alert("Please enter a valid e-mail address.");
            email.focus();
            return false;
        }
		
		
		
		if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
 }
        if(p1.value.length<6){
            alert("Passwprd lenght must be at least 6"); return false;
        }
        if (p1.value != p2.value){
            alert("Psswords not matching"); return false;
        }

        if (mum.value == ""){alert("Provide Phone number");return false;}
        if (!(mum.value.match(num))){alert("Mobile number must be numeric"); return false;}
        if (mum.value.length != 10){alert("Mobile number must be 10 digit"); return false;}
        if (!(rd.checked) && !(rd2.checked))
        {
            window.alert("Provide male or female"); return false;
        }
        
        if (!(cb1.checked))
        {   if (!(cb2.checked)){
            window.alert("Provide Personal or/and Business"); return false;}
        }
     
    var a = Math.floor(Math.random() * 5) + 1 ;
    var b = Math.floor(Math.random() * 5) + 1 ;
    var rcheck = prompt("Please Give right Answer  "+a+"+"+b+"=");
    
    if(rcheck!=(a+b)){alert("Wrong answer"); return false;}
        

function confirmit(){

    var ch = confirm("Do you want to reset?");
    if(ch == false){return false;}
    else{return true;}
}
function validateForm() {
   
    }
}