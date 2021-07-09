/*

https://cathiepilkington.com/

https://www.luctuymans.be/
https://www.paulpengdotcom.com/drawings/

*/

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
