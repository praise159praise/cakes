var bar1 = document.getElementById("bar1")
var bar2 = document.getElementById("bar2")
var bar3 = document.getElementById("bar3")
var bars = document.getElementById("bars")
console.log(bars.checked)
function returnNav(){
    if(bars.checked === true){
        
    //     overlay.style.opacity = "0";
    // overlay.style.top = "-100vh";
    // overlay.style.transform = "translate(-50%,-100vh)"
    bar1.style.position = ""
        bar2.style.position = ""
        bar3.style.display=""
        bar1.style.transform = ""
        bar2.style.transform = ""
    bars.checked = false
    console.log(bars.checked)
  
    }else{

       
        // overlay.style.opacity="1"
        // overlay.style.transform = "translate(-50%,100vh)"
        bar1.style.position = "absolute"
        bar1.style.transform = "rotate(45deg)"
        bar2.style.position = "absolute"
        bar2.style.transform = "rotate(-45deg)"
        bar3.style.display="none"
        bars.checked=true  
        console.log(bars.checked)
    }

}