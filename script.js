let string = "";
let buttons = document.querySelectorAll(".btn");
let inputDisplay = document.querySelector("input");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerHTML; 

       
        if (inputDisplay.value == "error" || inputDisplay.value == '') {
            string = "";
        }

       
        if (btnValue == "AC") {
            string = "";
            inputDisplay.value = "";
        }
        
        else if (btnValue == "del") {
            if (string.length > 0) {
                string = string.substring(0, string.length - 1);
                inputDisplay.value = string;
            }
        }
        
        else if (btnValue == "=") {
            try {
                string = eval(string);
                inputDisplay.value = string;
            } catch {
                string = "error";
                inputDisplay.value = string;
            }
        }
      
        else {
            string += btnValue;
            inputDisplay.value = string;
        }
    });
});
