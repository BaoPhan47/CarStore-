$(document).ready(function(){
    $(".item").click(function(){
        var checkUrl = $(this).find("img").attr("src");
        $(".product-vf3").attr("src",checkUrl);
        console.log(checkUrl);

    })
})
$(document).ready(function() {
        
    $('form').submit(function(event){
      event.preventDefault()   


      var name =  $("input#name").val();
      var email =  $("input#email").val();
      var address = $("input#address").val();
      console.log("Thong tin cua ban la: ", {
        name,email, address
      });
      $(".false-email").hide();
      $(".false-name").hide();

      $(".false-address").hide();

      $(".true").hide();

        if(name ===""){
            $(".false-name").show()
         return
       
          
        }
        else if(email ===""){
            $(".false-email").show()
            return

        }
        else if(address ===""){
            $(".false-address").show()
            return

        }
        else  {
            $(".false").hide()
            $(".true").show()
           

        }
    })
  })