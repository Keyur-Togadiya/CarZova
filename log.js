function validateForm(){
        var n = document.form2.Uname;
        var p1 = document.form2.Pname;
        var alphabets = /^[A-Za-z][A-Za-z ]+$/;
        var alphanum = /^[A-Za-z0-9)(,/. ]+$/;
        var num = /^[0-9]+$/;




       if (n.value == "")
        {
            window.alert("PLEASE ENTER USER NAME");
            n.focus();
            return false;
        }
    
        if(!(n.value.match(alphabets)))
            {alert("Use alphabets in name"); n.focus; return false;}

        if(p1.value == ""){
        	window.alert("PLESE ENTER PASSWORD");
        	p1.focus();
        	return false;
        }
        if(p1.value.length<6){
            alert("Please enter password"); return false;
        }


function validateForm() {
   
    }
}
