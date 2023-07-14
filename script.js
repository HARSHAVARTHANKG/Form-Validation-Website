
const alert_name= document.querySelector(".alert_name");
const alert_email= document.querySelector(".alert_email");
const alert_pwd = document.querySelector(".alert_pwd");
const alert_cpwd = document.querySelector(".alert_cpwd");
const alert_inpwd = document.querySelector(".alert_inpwd");
const p_length =document.querySelector(".p_length");
const ul_case = document.querySelector(".ul_case");
const a_digit = document.querySelector(".a_digit");
const v_email =document.querySelector(".v_email");
const reg_success = document.querySelector(".reg_success");
const s_char =document.querySelector(".s_char");

const username = document.querySelector(".firstname");
const email = document.querySelector(".email");
const newpwd = document.querySelector(".passwd");
const confirmpwd = document.querySelector(".confirmpwd");
const proper_name = document.querySelector(".proper_name");
const proper_email = document.querySelector(".proper_email");

let usname = 0;
let emname =0;
let pdname =0;
let cdname=0;
const btn = document.querySelector(".btn");

btn.addEventListener('click', fname)

function fname()
{
    if(username.value === "")
    {
        alert_name.classList.add("alertbox");
        username.classList.add("fail");
    }
    else if(username.value.length<1)
    {
        proper_name.classList.add("alertbox");
        proper_name.classList.add("fail");
    }
    else
    {
        alert_name.classList.remove("alertbox");
        proper_name.classList.add("successbox");
        proper_name.classList.remove("alertbox");
        usname=1;
    }
}

btn.addEventListener('click', ename)

function ename()
{
    if(email.value === "")
    {
        alert_email.classList.add("alertbox");
        email.classList.add("fail");
    }
    else if(validateEmail(email.value)==false)
    {
        email.classList.add("fail");
    }
    else 
    {
        v_email.classList.remove("alertbox");
        email.classList.add("successbox");
        alert_email.classList.remove("alertbox");
        emname=1;
    }

   
}

btn.addEventListener('click', pname)

function pname()
{
    let newpd = newpwd.value;
    if(newpwd.value === "")
    {
        alert_pwd.classList.add("alertbox");
        newpwd.classList.add("fail");
    }
    else if((validatePassword(newpd))==false)
    {
        newpwd.classList.add("fail");
    }
    else
    {
        s_char.classList.remove("alertbox");
        a_digit.classList.remove("alertbox");
        ul_case.classList.remove("alertbox");
        p_length.classList.remove("alertbox");
        newpwd.classList.add("successbox");
        alert_pwd.classList.remove("alertbox");
        pdname=1;
    }
}

btn.addEventListener('click',cname)

function cname()
{
    if(confirmpwd.value === "")
    {
        alert_cpwd.classList.add("alertbox");
    }
    else if(newpwd.value !== confirmpwd.value)
    {
        alert_inpwd.classList.add("alertbox");
        confirmpwd.classList.add("fail");
    }
    else
    {
        confirmpwd.classList.add("successbox");
        alert_inpwd.classList.remove("alertbox");
        alert_cpwd.classList.remove("alertbox");
        cdname=1;
        
    }
}

function validatePassword(password) {
  
    var minLength = 8; 
    var hasUpperCase = /[A-Z]/.test(password); 
    var hasLowerCase = /[a-z]/.test(password); 
    var hasNumber = /\d/.test(password);         
    var hasSpecialChar = /[!@#$%^&*]/.test(password);  
  
  
    if (password.length < minLength) 
    {
        p_length.classList.add("alertbox");
        return false;
        
    } 
    else if (!hasUpperCase || !hasLowerCase) 
    {
        ul_case.classList.add("alertbox");
        return false;
        
    } 
    else if (!hasNumber) 
    {
        a_digit.classList.add("alertbox");
        return false;
    } 
    else if (!hasSpecialChar) 
    {
        s_char.classList.add("alertbox");
        return false;
    } 
    else 
    {
      return true;
    }
  }

  function validateEmail(email)
  {
        let emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(email)) 
        {
            return true;
        } 
        else 
        {
            v_email.classList.add("alertbox");
            return false;
        }
  }

btn.addEventListener("click",successpage);

function successpage()
{
    if(pdname===1 && emname===1 && cdname===1 && usname===1)
    {
        console.log(pdname,cdname,emname,usname);
        reg_success.classList.add("s_box");
    }
}






