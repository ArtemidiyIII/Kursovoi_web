let buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let header = document.querySelector('header');
let text = document.querySelectorAll('p');
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
let username = localStorage.getItem('username');
const usersContainer = document.querySelector(".users");

let password = localStorage.getItem('password');
let logining = false;
const account_menu_toogle = document.getElementById('account_menu_toogle');
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let burgerlogout = document.getElementById('burgerlogout');
let account_menu_logout = document.getElementById('accountlogout');
let translate = 'en';
let pUsername = document.querySelectorAll('.username');

/* main */

let url = '../jsonfiles/LoginAndPasswods.json';
 fetch(url)
 .then(response => response.json())
 .then(result => { for(let element of result){
    const userElement = document.createElement("div");
  userElement.classList.add("user");

  const emailElement = document.createElement("p");
  emailElement.textContent = `Email: ${element.email}. Name: ${element.FirstName} ${element.LastName} (${element.FatherName}). Login: ${element.login}. Password: ${element.password}`;

  userElement.appendChild(emailElement);
  usersContainer.appendChild(userElement);
 }

})

/* /main */

/* Dailytheme Checkusers */

let site_wrapper = document.getElementById('site-wrapper');
let bg_Content = document.querySelector(".BG_Content");
let footer_logo = document.getElementById('footer_logo');
let footer_links = document.getElementsByClassName(".footer_links");
let footer_block_text = document.getElementById('footer_block-text');
let footer_block_copyright = document.getElementById('footer_block-copyright');
//let header = document.querySelector('header');
// Проверяем, есть ли сохраненное значение в локальном хранилище
// Устанавливаем начальное значение в соответствии с сохраненным значением
if (isDarkThemeEnabled) {
  switchDailytheme();
  buttonswitch.checked = true;
  
}
function switchDailytheme(){
  document.body.classList.add("night-theme");
  //header.classList.add("night-theme"); 
  //searchicon.style.filter = "invert(1)";
  //shoppingicon.style.filter = "invert(1)";
 //login.style.color = "#50FFB1";
 //login.style.backgroundColor = "#310A31";
 site_wrapper.style.backgroundColor="#4DA0C9";
 bg_Content.style.background = "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #4DA0C9 61.38%)";
 footer_logo.style = "filter: invert(1)";
 //footer_links.style.color = "#0B1D26";
 footer_block_text.style.color = "#0B1D26";
 footer_block_copyright.style.color = "#0B1D26";


//  for (let elem of text) {
     
//     elem.classList.add("night-text");
//  }
//  logut.style.backgroundColor = "#310A31";
//  logut.style.color = "#50FFB1";
// for(let i = 0; i < box.length; i++){
//      box[i].classList.add("night-theme");
// }
// if (burger_menu_toogle.checked == true){
//   burger_menu.classList.add("night-theme");
// }
}
function switchDarktheme(){
  document.body.classList.remove("night-theme");
  //header.classList.remove("night-theme");
  //searchicon.style.filter = "invert(0)";
  //shoppingicon.style.filter = "invert(0)";
  //logo.style = "filter: invert(0)";
  site_wrapper.style.backgroundColor="#0B1D26";
  bg_Content.style.background = "linear-gradient(180deg, rgba(11, 29, 38, 0) 0%, #0B1D26 61.38%)";
  footer_logo.style = "filter: invert(0)";
  //footer_links.style.color = "#FFFFFF";
  footer_block_text.style.color = "#FFFFFF";
  footer_block_copyright.style.color = "#FFFFFF";

  // for(let elem of box){
  //     elem.classList.remove("night-theme");
  // }
  // for (let elem of text) {
  //     elem.classList.remove("night-text");
  // }
  // if (burger_menu_toogle.checked == true){
  //   burger_menu.classList.remove("night-theme");
  // }
}
buttonswitch.addEventListener('change',function(){
    if(buttonswitch.checked){  
      localStorage.setItem('darkThemeEnabled','true') 
      switchDailytheme();
        }
     else {
      switchDarktheme();
         localStorage.setItem('darkThemeEnabled','false')
     }
});

/* /Dailytheme Checkusers */


let burgerequipment = document.getElementById('equipment');
let burgerabout = document.getElementById('about_us');
let burgerblog = document.getElementById('blog');
let burgerallusers = document.getElementById('check_all_users');
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
    window.location.href = '../About_us/about_us.html'
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

burgerallusers.addEventListener('click',function(event){
    event.preventDefault()
    if(localStorage.getItem('username') === '')
    {
      alert("You need to be login/register")
    }
    else{
      window.location.href = '../CheckAllUsers/checkallusers.html'
    }
})

function loadLanguage(language) {
  let url = '../jsonfiles/i18n.json';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Обновление текстовых значений элементов
      const elements = document.querySelectorAll('.i18n');
  
      for (let element of elements) {
        
        const key = element.getAttribute('i18n');
        let translation = data[language][key];
        localStorage.setItem(key,translation);
        element.innerHTML = translation;
      }
    });
}
const languageselect = document.getElementById('languageSelect');
languageselect.addEventListener('change', function(){
  let select = languageselect.value;
  loadLanguage(select)
  localStorage.setItem('translate',select);
})


let checkuser = localStorage.getItem('logining') === 'true';
if(checkuser){
  setLoginNameOnSite();
  let unauthotized = document.querySelectorAll(".unauthotized");
    for(let elements of unauthotized){
      elements.style = "display:flex"
    }
}
else{
    setLoginNameOnSite();
  }

function setLoginNameOnSite(){
 for(let elem of pUsername){
  elem.textContent = localStorage.getItem('username');
  elem.style.display = "block";
 
 }
 
 burgerlogout.style.display ="flex";
 account_menu_logout.style.display ="flex";
}


const isEnLanguage = localStorage.getItem('translate');
if(isEnLanguage ==='en'){
  loadLanguage(isEnLanguage)
  const EnOption = languageSelect.querySelector('option[value="en"]');
  EnOption.selected = true;
}
else{
  loadLanguage('ru');
  const ruOption = languageSelect.querySelector('option[value="ru"]');
  ruOption.selected = true;
}
burgerlogout.addEventListener('click',function(){
  username = '';
  password = '';
  //убираем значения юзера с локалки
  localStorage.setItem('username',`${username}`);
  localStorage.setItem('password',`${password}`);
  for(let elem of pUsername){
    elem.style.display = "none";
  }

  // burgerallusers.style.display = "none";
  // burgerlogout.style.display = "none";
  // accountlogout.style.display = "none";

  // login_burger.style.display = "block";
  // sign_burger.style.display = "block";
  // login_account_menu.style.display = "block";
  // sign_account_menu.style.display = "block";

  localStorage.setItem('logining','false');
  window.location = "../HomePage/index.html";
})

account_menu_logout.addEventListener('click',function(){
  username = '';
  password = '';
  //убираем значения юзера с локалки
  localStorage.setItem('username',`${username}`);
  localStorage.setItem('password',`${password}`);
  for(let elem of pUsername){
    elem.style.display = "none";
  }

  // burgerallusers.style.display = "none";
  // burgerlogout.style.display = "none";
  // accountlogout.style.display = "none";

  // login_burger.style.display = "block";
  // sign_burger.style.display = "block";
  // login_account_menu.style.display = "block";
  // sign_account_menu.style.display = "block";

  localStorage.setItem('logining','false');
  window.location = "../HomePage/index.html";
})