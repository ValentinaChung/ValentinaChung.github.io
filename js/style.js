// // Function for changing background image for location page

$(function(){

  // 1) Add a click event to each li element
    $('#city-list li').click(function(){
       
    // 2) Delare variable and change background 
       var city = $("#city-type").click();

       if(city === "Chicago"){
           $('.page4').css("background", "url(../images/Chicago.jpg)");
        } else if(city === "Los Angeles"){
          $('body').css("backgroundImage", "url(images/la.jpg");
        } else if(city === "New York City"){
           $('body').css("backgroundImage", "url(images/nyc.jpg");
        } else if(city === "San Francisco"){
           $('body').css("backgroundImage", "url(images/sf.jpg");
        } else if(city === "Sydney"){
           $('body').css("backgroundImage", "url(images/sydney.jpg");
        } else {
        }
     }  

  });

});