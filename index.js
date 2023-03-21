const passwordLengthEl = document.getElementById("passwordLength")
const passwordFieldEl = document.getElementById("passwordField")
const createPasswordEl = document.getElementById("createPassword")
let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"

let genPwd = ""

createPasswordEl.addEventListener("click", function(){
    passwordFieldEl.value = ""
    genPwd = ""
    let pwd = generatePassword()
    passwordFieldEl.value = pwd
})

function generatePassword(){
    let len = parseInt(passwordLengthEl.value,10)
    if(len > 5 && len < 17){
        for(let i = 0; i < len; i++){
            genPwd += chars.charAt(Math.floor(Math.random() * chars.length))
        }
    }else if(len){
        alert("Put length between 6 and 16")
    }else{
        alert("Input Length")
    }
    passwordLengthEl.value = ""
    return genPwd
}