document.getElementById('login-button').addEventListener('click',function(){
    const emailField= document.getElementById('email');
    const eamilValue=emailField.value;

    const passField= document.getElementById('password-id');
    const passValue=passField.value;
    
    if(eamilValue=='sontan@gmail.com' && passValue=='abc'){
       window.open("banking.html");
      // window.location.href='banking.html';
      // console.log('valid');
    }
    
      else{
    console.log('invalid');}
})

