function demoExternalAlert(){
    alert("External Alert.");
}
function demoExternalConfirm(){
    if(confirm("Are you sure..??")){
        alert("OK");
    }
    else{
        alert("Cancle");
    }
}
function demoExternalPrompt(){
    var fName=prompt("Enter Firstname");
    var lName=prompt("Enter Lastname");
    alert(fName+" "+lName);
}

