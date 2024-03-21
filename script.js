let password = document.getElementById("password")
let passwordConfirm = document.getElementById("password-confirm")
let errorText = document.getElementById("error-text")

password.addEventListener("input", () => {
    if(password.value!=passwordConfirm.value){
        password.className = '' 
        password.classList.add("error")
        passwordConfirm.className = '' 
        passwordConfirm.classList.add("error")
        errorText.textContent="* Passwords do not match"
    }
    else{
        password.className = '' 
        password.classList.add("correct")
        passwordConfirm.className = '' 
        passwordConfirm.classList.add("correct")
        errorText.textContent=""
    }
});

passwordConfirm.addEventListener("input", () => {
    if(password.value!=passwordConfirm.value){
        password.className = '' 
        password.classList.add("error")
        passwordConfirm.className = '' 
        passwordConfirm.classList.add("error")
        errorText.textContent="* Passwords do not match"
    }
    else{
        password.className = '' 
        password.classList.add("correct")
        passwordConfirm.className = '' 
        passwordConfirm.classList.add("correct")
        errorText.textContent=""
    }
});
