//Function for Calendar

$(function() {
    $( ".datepicker" ).datepicker();
    
  });


$(function(){


    // Function for every city name
    $('#HongKong').click(switchHK);
    $('#Shanghai').click(switchShanghai);
    $('#Beijing').click(switchBeijing);
    $('#Tokyo').click(switchTokyo);
    $('#NewYork').click(switchNY);
    $('#Chicago').click(switchChicago);
    $('#BeverlyHills').click(switchBH);
    $('#Paris').click(switchParis);
    $('#Bangkok').click(switchBK);
    $('#Manila').click(switchManila);

    function switchHK() {
    // The following code reads as the following:
    // "Select the body tag and add a 'class' attribute with a value of 'gray'"
      $('.page4').css("background", "url(images/HongKong.jpg)");
      $('.page4').addClass("backgroundStyle");
    }

    function switchShanghai() {
      $('.page4').css("background", "url(images/Shanghai.jpg)");
    }

    function switchBeijing() {
      $('.page4').css("background", "url(images/Beijing.jpg)");
    }

    function switchTokyo() {
      $('.page4').css("background", "url(images/Tokyo.jpg)");
    }

    function switchNY() {
      $('.page4').css("background", "url(images/Location.png)");
    }

    function switchChicago() {
      $('.page4').css("background", "url(images/Chicago.jpg)");
    }

    function switchBH() {
      $('.page4').css("background", "url(images/BeverlyHills.jpg)");
    }

    function switchParis() {
      $('.page4').css("background", "url(images/Paris.jpg)");
    }

    function switchBK() {
      $('.page4').css("background", "url(images/Bangkok.jpg)");
    }

    function switchManila() {
      $('.page4').css("background", "url(images/Manila.jpg)");
    }

});



// Function for changing the city title as a user click on each city

$(function(){

  $("#city-list li a").click(changeTitle);

  
    function changeTitle(event){
    event.preventDefault();

      // Declare variable that will be used to track the name
      var cityName;

      // Get information entered into the text field
      cityName = $(this).text();

      // Display on the next assistant page 
      $("#city").html(cityName);

    }

});



// Function for customer name on Guest Info page

$(function(){

  $("#name-button").click(changeName);

  
    function changeName(event){
    event.preventDefault();

    alert('Your information is saved!');


      // Declare variable that will be used to track the name
      var customerName;

      // Get information entered into the text field
      customerName = $('#name-input').val();

      // Display a checkbox image next to the name 
      $("ul#guesinfo li input").addClass("success");

      // Display on the next assistant page 
      $("#customer-name").html(customerName);

    }

});




// Function for saving location data

$(function(){

  $("#location-button").click(pickDates);

  
    function pickDates(event){
    event.preventDefault();

    alert('Your information is saved!');
  }

});



// // Function for scroll text on every page

// $(function(){

//   $(window).scroll(function(){
 


















