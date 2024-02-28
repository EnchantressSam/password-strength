let pword = document.getElementById("password");
let msg = document.getElementById("message");
let strength = document.getElementById("strength");

pword.addEventListener('input', ()=> {
  if(pword.value.length > 0){
    msg.style.display = 'block'
  }
  else{
    msg.style.display = 'none'
  }
  if(pword.value.length < 4){
    strength.innerHTML = 'weak'
    pword.style.borderColor = '#e27d60'
    msg.style.color = '#e27d60'

  }
  else if(pword.value.length >= 4 && pword.value.length < 8){
    strength.innerHTML = 'medium'
    pword.style.borderColor = '#e8a87c'
    msg.style.color = '#e8a87c'
  }
  else if(pword.value.length >= 8) {
    strength.innerHTML = 'strong'
    pword.style.borderColor = '#41b3a3'
    msg.style.color = '#41b3a3'
  } 
})
