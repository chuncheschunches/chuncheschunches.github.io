/*

https://cathiepilkington.com/

https://www.luctuymans.be/
https://www.paulpengdotcom.com/drawings/

*/
function removeParent(imageElement) {
  // Get the parent element of the image
  const parentElement = imageElement.parentElement.parentElement.parentElement;

  // Check if the parent element exists
  if (parentElement) {
    // Remove the parent element from the DOM
    parentElement.remove();
  }
}



document.addEventListener('DOMContentLoaded', function() {
  const allLinks = document.querySelectorAll('a[href^="#"]');

  allLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default jump

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
});


var inicioURL =
  "https://docs.google.com/spreadsheets/d/1W-7eltdvP3aaDE7a5f3XIFodePRdVXVq28eogzEFEMM/edit#gid=0";
var inicioTemplate = Handlebars.compile($("#inicio-template").html());

var setInicioLang = lang => {
  $("#titulo").html("");
  $("#titulo").sheetrock({
    url: inicioURL,
    rowTemplate: inicioTemplate,
    query: "select B,C,D,E where F = '" + lang + "'"
  });
};




var subirAlInicio = document.getElementById("subir")
subirAlInicio.style.display = "none"

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  //console.log('a')
  scrollFunction();
};

function scrollFunction() {
  var scrollElm = document.scrollingElement;
  
  //console.log(scrollElm.scrollTop)
  if (scrollElm.scrollTop > 50 ) {
    //console.log(scrollElm.scrollTop)
    subirAlInicio.style.display = "block";
  } else {
    subirAlInicio.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var loadId = () => {
  var hash = window.location.hash
  hash = hash.replace('#','')
  //console.log(hash)
  var el = document.getElementById(hash)
  if (el != null ) {
    el.scrollIntoView({behavior: 'smooth'});
  } 

}

/*función para activar el slideshow si es escritorio*/
/*
$( window ).ready( function() {
   console.log('Not a mobile device');
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

  setTimeout(() => {

   console.log('windowready')
  $('.main-carousel').flickity({
  freeScroll: true, contain:true, autoPlay: true, prevNextButtons: false, imagesLoaded: true
})
  }, 1000); 
  //document.addEventListener('click',function() {$('.main-carousel').flickity('resize')})
    }
});
*/


