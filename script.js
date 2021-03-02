
var overlay = document.getElementById("overlay")
var bars = document.getElementById("bars")
console.log(bars.checked)
function returnNav(){
    if(bars.checked === true){
        
    //     overlay.style.opacity = "0";
    // overlay.style.top = "-100vh";
    // overlay.style.transform = "translate(-50%,-100vh)"
    bars.checked = false
    console.log(bars.checked)
  
    }else{

       
        // overlay.style.opacity="1"
        // overlay.style.transform = "translate(-50%,100vh)"
        bars.checked=true  
        console.log(bars.checked)
    }

}