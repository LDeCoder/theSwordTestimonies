// @modal@
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// @modal@


// function myDemoVerse() {
//   document.getElementById("demoVerse").innerHTML = "demo verse INFORMATION YO BRO!";
// }
function myRom323() {
  document.getElementById("Rom323").innerHTML = "Romans 3:23 <br/> For all have sinned and fall short of the glory of God.";
}
function myRom623() {
  document.getElementById("Rom623").innerHTML = "Romans 6:23 <br/> For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.";
}
function myRom1013() {
  document.getElementById("Rom1013").innerHTML = "Romans 10:13 <br/> Everyone who calls on the name of the Lord will be saved..";
}
function myJohn316() {
  document.getElementById("John316").innerHTML = "John 3:16 <br/> For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.";

}





// contact form:
// $(function() {
  
//   // contact form animations
//   $('#contact').click(function() {
//     $('#contactForm').fadeToggle();
//   })
//   $(document).mouseup(function (e) {
//     var container = $("#contactForm");

//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0) // ... nor a descendant of the container
//     {
//         container.fadeOut();
//     }
//   });
  
// });

// (function() {
//   $('#contact').click(function() {
//     $('#contactForm').fadeToggle();
//   })
//   $(document).mouseup(function (e) {
//     var container = $("#contactForm");

//       if(!container.is(e.target)
//         && container.has(e.target).length === 0)
//         {container.fadeOut();
//         }
//   });
// });