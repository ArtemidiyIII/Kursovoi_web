let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let logining = false;
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let burgerlogout = document.getElementById('burgerlogout');
let translate = 'en';
let buttoncloselog = document.querySelector('.button-close-login');
let buttonclosereg = document.querySelector('.button-close-reg');

// burgermenuJS

let login_burger = document.getElementById('burgerLog');
login_burger.addEventListener('click', function(){
  registrmenu.style= 'margin-left: -3000px !important';
  loginmenu.style= 'margin-left: 0px !important';
})

let sign_burger = document.getElementById('burgerSign');
sign_burger.addEventListener('click', function(){
  loginmenu.style= 'margin-left: -3000px !important';
  registrmenu.style= 'margin-left: 0px !important';
})

let burgerequipment = document.querySelector('.equipment');
let burgerabout = document.querySelector('.about_us');
let burgerblog = document.querySelector('.blog');
burgerequipment.addEventListener('click',function(event){
    event.preventDefault()
    if(localStorage.getItem('username') === '')
    {
      alert("You need to be login/register")
    }
    else{
      window.location.href = '#'
    }
})

burgerabout.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '#'
  }
})

burgerblog.addEventListener('click',function(event){
  event.preventDefault()
  if(localStorage.getItem('username') === '')
  {
    alert("You need to be login/register")
  }
  else{
    window.location.href = '#'
  }
})

burgerlogout.addEventListener('click',function(){
    username = '';
    password = '';
    //убираем значения юзера с локалки
    localStorage.setItem('username',`${username}`);
    localStorage.setItem('password',`${password}`);
    singup.style.display = 'flex';
    login.style.display = "flex";
    for(let elem of pUsername){
      elem.style.display = "none";
    }
    checkusers.style.display = "none";
    burgerlogout.style.display = "none";
    localStorage.setItem('logining','false');
})

// /burgermenuJS

// Login menu

buttoncloselog.addEventListener('click',function(){
    loginmenu.style= 'margin-left: -3000px !important';
  }
)

// /Login menu

// Register menu JS

buttonclosereg.addEventListener('click',function(){
    registrmenu.style = 'margin-left: -3000px !important';
  }
)

// /Register menu JS

