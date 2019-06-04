document.addEventListener("DOMContentLoaded", function(){

$(document).ready(function(){
  
  /*nav links event listener*/
  let navLinks_mouseover = {
    color: "#93c157",
    textDecoration: "underline" 
  };
    let navLinks_mouseout = {
    color: "",
    textDecoration: "" 
  };
  
  $(".nav-links li a").mouseover(function(){
    $(this).css(navLinks_mouseover);
  });
  $(".nav-links li a").mouseout(function(){
    $(this).css(navLinks_mouseout);
  });
  
  /* offer event listener*/
  
  $("#deals p").mouseover(function(){
    $(this).css("background-color","#e89571");
  });
  
  $("#deals p").mouseout(function(){
    $(this).css("background-color","");
  });
  
  /*subscribe button*/
  
  $("#signup-button").mouseover(function(){
    $(this).css("background-color", "#c63557");
  });
  
  $("#signup-button").mouseout(function(){
    $(this).css("background-color", "");
  });
  
  
  
});

  
});