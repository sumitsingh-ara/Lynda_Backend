
    let btn = document.getElementById("login-btn")
    btn.addEventListener("click", rqst)
  
        async function rqst(){
             var email1 = document.querySelector("#email").value;
              var password1 = document.querySelector("#password").value;
            let data = await fetch("http://localhost:3838/users")
            let res = await data.json();
            let x = res.users;
                console.log(x);
                x.forEach(({email_or_phone,password,first_name,flag,payment_flag})=> {
            
                    if(email1===email_or_phone ){
                        if(password1===password)
                        {
                            let x=document.getElementById("wrongPassword");
                            x.innerHTML=null;
                            x.textContent="Hold on!!redirecting to home page"
                            x.style.color="green"
                          
                             function redirect() {
                                window.location.href ="http://localhost:3838/home"
                            }
                        setTimeout(redirect,2000)
                        }
                    }else if(email1===email_or_phone){
                            if(password1!==password)
                            {
                            let x=document.getElementById("wrongPassword");
                            x.innerHTML=null;
                            x.textContent="wrong password"
                            x.style.color="red"
                            }
                        
                    }else if(email1!=email_or_phone){} {
                          let x=document.getElementById("wrongPassword");
                          x.innerHTML=null;
                            x.textContent="You need to sign up first"
                            x.style.color="red"
                            }
                });
    }