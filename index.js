const pass = document.getElementById("paswrd");
    const inp = document.getElementById("email");
    const p = document.getElementById("demo");
    const btn = document.querySelector("button");
    const form = document.querySelector('form');
    const eye = document.querySelector('#eye')

    eye.onclick = ()=>{
      if(pass.type === 'password'){
        pass.type='text'
      }else{
        pass.type='password'
      }
    }
    function regl(m){
      let regex = /[a-z]/;
      return regex.test(m)
    }
    function regu(m){
      let regex = /[A-Z]/;
      return regex.test(m)
    }
    function rege(m){
      let regex = /[!@#$%^&*]/;
      return regex.test(m)
    }
    function regn(m){
      let regex = /[0-9]/;
      return regex.test(m)
    }
    btn.addEventListener('click', (e)=>{
       e.preventDefault();
      let m = inp.value;
      let pa = pass.value;
      
      
      if(!m.includes('@') || !m.includes('.com')){
        p.innerText = 'invalid email';
        // console.log('wrong email');
        
      }
       else if(!(regl(pa) && regu(pa) && regn(pa) && rege(pa) && pa.length<=11)){
        p.innerText = 'password must contain special characters';
        p.style.fontSize = '10px'
      }
      else{
        // console.log('invald input');
        form.style.display = 'none'
      }
    });

    let year = getHour();
    console.log(year);