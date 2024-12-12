$(document).ready(function(){
   
    $("#up").submit(function(event){
        event.preventDefault()
        var user = $("input#username").val();
        var pass = $("input#password").val();
        var  repassword = $("input#re-enter_password").val();
        console.log(user, pass,repassword);
        $(".error-username").hide();
        $(".error-pass").hide();
        $(".error-re-enter_password").hide();
        $(".error-passlength").hide();

        $(".error-re-enter_passwordrepeat").hide();


        $(".true").hide();
        if(user == ""){
            $(".error-username").show();
        }
        else if(pass == "" ){
            $(".error-pass").show();
            $(".error-passlength").hide();
        }
        else if(pass.length<8){
            $(".error-pass").hide();
            $(".error-passlength").show();
        }
        else if(repassword =="" ){
            $(".error-re-enter_password").show();
            $(".error-re-enter_passwordrepeat").hide();
        }
        else if(repassword !=pass ){
            $(".error-re-enter_passwordrepeat").show();
            $(".error-re-enter_password").hide();
        }
        else {
            $(".true").show();
            localStorage.setItem("userName", user);
            localStorage.setItem("userPassword", pass);
            setTimeout(function () {
                window.location.href = "/login/index.html"; 
                
            }, 1000); 
        }
        

    })
})