// Function to display slides in a slideshow automatically
function showSlides() {
    // Get all elements with the class "mySlides"
    var slides = $(".mySlides")
    slides.css("display","none")
    slides.eq(slideIndex).fadeIn();
   
     
     slideIndex = (slideIndex+1) % slides.length;
  
  
    // Call this function recursively after 5000 milliseconds (5 seconds)
    setTimeout(showSlides, 5000); 
  }
  
  var slideIndex = 0;
  showSlides();