

let count = 1;

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the modal
var Overlay = document.getElementById("refOverlay");

// Get the button that opens the modal
var btn = document.getElementById("refButton");

// When the user clicks the button, open the modal 
btn.onclick = function() {
    Overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    Overlay.style.display = "none";
    document.getElementById("pic").src = "images/Reference-icon.png";
}


function swapImage(){
    if (document.getElementById("pic").src.endsWith('images/Reference-icon.png') == true)  //Comparison
    { 
         document.getElementById("pic").src = "images/Reference-icon2.png"; //assignment
         console.log('swapped image')  

    } 
     else if (document.getElementById("pic").src.endsWith('images/Reference-icon2.png') == true) 
     { 
        document.getElementById("pic").src = "images/Reference-icon.png";
        console.log('swapped image again') 
        
    }


}


function changeCount(num)
{
    count = num;
    console.log('count = ' + num)
}





    

