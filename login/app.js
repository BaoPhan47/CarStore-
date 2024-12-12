
$(document).ready(function(){
  
    $("#in").submit(function(event){
        event.preventDefault()
        var user = $("input#username").val();
        var pass = $("input#password").val();
       
        console.log(user, pass);
        console.log(storedEmail,storedPassword);

       

       
        
        if (user==storedEmail && pass==storedPassword) {
            $(".true").show();
            var storedEmail = localStorage.getItem("userEmail");
            var storedPassword = localStorage.getItem("userPassword");
            console.log(storedEmail,storedPassword);
            setTimeout(function () {
                window.location.href = "/home/index.html"; 
                
            }, 1000); 
        }
        else{
            alert("Sai tài khoản hoặc mật khẩu")
        }
        

    })
})          