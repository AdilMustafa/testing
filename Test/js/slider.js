var slider = document.getElementById("myRange");
var select11 = document.getElementById("grid-item11");
var select10 = document.getElementById("grid-item10");
var select9 = document.getElementById("grid-item9");
var select8 = document.getElementById("grid-item8");
var select7 = document.getElementById("grid-item7");
var select6 = document.getElementById("grid-item6");
var select5 = document.getElementById("grid-item5");
var select4 = document.getElementById("grid-item4");
var select3 = document.getElementById("grid-item3");
var select2 = document.getElementById("grid-item2");
var select1 = document.getElementById("grid-item1");

var revBtn = document.getElementById("revBtn");



// var output = document.getElementById("demo");
// output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    if(slider.value == 11) {
        selectionAppearance("1",".3",".3",".3",".3",".3",".3",".3",".3",".3",".3");
    }

    if(slider.value == 10){ 
        selectionAppearance("1","1",".3",".3",".3",".3",".3",".3",".3",".3",".3");        
    }

    if(slider.value == 9){ 
        selectionAppearance("1","1","1",".3",".3",".3",".3",".3",".3",".3",".3");   

    }

    if(slider.value == 8){ 
        selectionAppearance("1","1","1","1",".3",".3",".3",".3",".3",".3",".3");
           
    }

    if(slider.value == 7){ 
        selectionAppearance("1","1","1","1","1",".3",".3",".3",".3",".3",".3");
     
    }

    if(slider.value == 6){ 
        selectionAppearance("1","1","1","1","1","1",".3",".3",".3",".3",".3");
    }

    if(slider.value == 5){ 
        selectionAppearance("1","1","1","1","1","1","1",".3",".3",".3",".3");
    }

    if(slider.value == 4){ 
        selectionAppearance("1","1","1","1","1","1","1","1",".3",".3",".3");
    }

    if(slider.value == 3){ 
        selectionAppearance("1","1","1","1","1","1","1","1","1",".3",".3")
    }

    if(slider.value == 2){ 
        selectionAppearance("1","1","1","1","1","1","1","1","1","1",".3")
        
    }

    if(slider.value == 1){ 
        selectionAppearance("1","1","1","1","1","1","1","1","1","1","1")
        
    }
    console.log(slider.value)


    

}


function selectionAppearance(s1,s2,s3,s4,s5,s6,s7,s8,s9,s10,s11){
    select1.style.opacity = s1;
    select2.style.opacity = s2;
    select3.style.opacity = s3;
    select4.style.opacity = s4;
    select5.style.opacity = s5;
    select6.style.opacity = s6;
    select7.style.opacity = s7;
    select8.style.opacity = s8;
    select9.style.opacity = s9;
    select10.style.opacity = s10;
    select11.style.opacity = s11;

}

function reveal()
{
    
        document.getElementById("secret3").style.opacity = "1";
        document.getElementById("secret3").style.zIndex = "1";

        document.getElementById("secret3-text").textContent = "The recommended number of actvities:"
        document.getElementById("secret3-title").textContent = "2. Recommendations for daily actvities"


        console.log('reveal');
    
}

function home(){
    location.href = "index.html";
}