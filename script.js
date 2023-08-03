// let switchMode = document.getElementsId("switche");
// function myFunction(){

//     let theme = document.getElementById("theme");
// let checkBox = document.getElementById("myCheck")
//     if(checkBox.checked == true){
//         theme.href = "dark.css";
//         console.log(worck)
//     } else{
//         theme.href = "liht.css";
        
//     }

// }
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    let theme =document.getElementById("theme");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
     
      theme.href ="dark.css"
    } else {
    
      theme.href = "lagt.css";
    }
  }