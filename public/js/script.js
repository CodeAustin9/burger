
    
      $(".devour").on("click", function() {    
        
    
        // Send the POST request.
        var id =$(this).attr("id");
        $.ajax("/api/burgers"+ id, {
          type: "PUT",
          
        }).then(
          function() {
            console.log("Devoured Burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  
      $(".add").on("click", function() {    
        
        var newObject = {
            burger_name: $("#ca").val()
        }
        // Send the POST request.
        var id =$(this).attr();
        $.ajax("/api/burgers", {
          type: "POST",
          
        }).then(
          function() {
            console.log("Burger Added");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  