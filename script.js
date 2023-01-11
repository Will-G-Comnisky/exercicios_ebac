
function validateForm() {
    const boxA = document.getElementById("boxA").value;
    const boxB = document.getElementById("boxB").value;
    
    if (boxB > boxA) {
      document.getElementById("message").innerHTML = "Form is valid!";
      return true;
    } else {
      document.getElementById("message").innerHTML = "Form is not valid. Box B should be greater than Box A.";
      return false;
    }
  }