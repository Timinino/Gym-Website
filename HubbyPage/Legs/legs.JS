function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value).then(() => {
        // Show the custom alert
        var customAlert = document.getElementById("customAlert");
        customAlert.style.display = "block";
        
        // Hide the alert after 3 seconds
        setTimeout(() => {
            customAlert.style.display = "none";
        }, 500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}
