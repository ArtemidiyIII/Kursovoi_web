
let loginmenu = document.querySelector('.Login');
let registrmenu = document.querySelector('.Register');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let logining = false;
const account_menu_toogle = document.getElementById('account_menu_toogle');
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let burgerlogout = document.getElementById('burgerlogout');
let account_menu_logout = document.getElementById('accountlogout');
let translate = 'en';
let buttoncloselog = document.querySelector('.button-close-login');
let buttonclosereg = document.querySelector('.button-close-reg');
let pUsername = document.querySelectorAll('.username');
let Modal_window_background = document.getElementById('modal_window_background');

// accountmenuJS

let login_account_menu = document.getElementById('accountLog');
login_account_menu.addEventListener('click', function(){
  registrmenu.style= 'margin-left: -3200px !important';
  loginmenu.style= 'margin-left: 0px !important';

  Modal_window_background.style.zIndex = 5;
  Modal_window_background.style.backgroundColor = "rgba(0,0,0,0.4)";
})

let sign_account_menu = document.getElementById('accountSign');
console.log("accountSign" );
sign_account_menu.addEventListener('click', function(){
  console.log("getElementById 'burgerSign");
  loginmenu.style= 'margin-left: -3200px !important';
  registrmenu.style= 'margin-left: 0px !important';

  Modal_window_background.style.zIndex = 5;
  Modal_window_background.style.backgroundColor = "rgba(0,0,0,0.4)";
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
  burgerallusers.style.display = "none";
  burgerlogout.style.display = "none";
  localStorage.setItem('logining','false');
  accountlogout.style.display = "none";
  login_burger.style.display = "block";
  sign_burger.style.display = "block";
  login_account_menu.style.display = "block";
  sign_account_menu.style.display = "block";

})

// /accountmenuJS

// burgermenuJS

let login_burger = document.getElementById('burgerLog');
login_burger.addEventListener('click', function(){
  registrmenu.style= 'margin-left: -3200px !important';
  loginmenu.style= 'margin-left: 0px !important';

  Modal_window_background.style.zIndex = 5;
  Modal_window_background.style.backgroundColor = "rgba(0,0,0,0.4)";
})

let sign_burger = document.getElementById('burgerSign');
console.log("sign_burger" );
sign_burger.addEventListener('click', function(){
  console.log("getElementById 'burgerSign");
  loginmenu.style= 'margin-left: -3200px !important';
  registrmenu.style= 'margin-left: 0px !important';

  Modal_window_background.style.zIndex = 5;
  Modal_window_background.style.backgroundColor = "rgba(0,0,0,0.4)";
})

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

burgerallusers.addEventListener('click',function(event){
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
    for(let elem of pUsername){
      elem.style.display = "none";
    }
    burgerallusers.style.display = "none";
    burgerlogout.style.display = "none";
    localStorage.setItem('logining','false');
    accountlogout.style.display = "none";
    login_burger.style.display = "block";
    sign_burger.style.display = "block";
    login_account_menu.style.display = "block";
    sign_account_menu.style.display = "block";
})

// burger_menu_toogle.addEventListener('click', function(){
//   if(burger_menu_toogle.checked){
//     burger_menu.display = "flex";
//   }
//   else{
//     burger_menu.display = "none";
//   }
// })

// /burgermenuJS

// Login menu
buttoncloselog.addEventListener('click',function(){
  loginmenu.style= 'margin-left: -3200px !important';

  Modal_window_background.style.zIndex = "auto";
  Modal_window_background.style.backgroundColor = "transparent";
  }
)

let checkuser = localStorage.getItem('logining') === 'true';
if(checkuser && username !='Admin'){
  setLoginNameOnSite();
  let unauthotized = document.querySelectorAll(".unauthotized");
    for(let elements of unauthotized){
      elements.style = "display:flex"
    }
}
else{
  if(username == "Admin"){
    setLoginNameOnSite();
    let admindives = document.querySelectorAll('.admin');
    for(let elem of admindives){
    elem.style.display = "none";
    }
    nav_third_block.style.visibility = "visible";
    burgerallusers.style.display = "flex";
  }
}

//Отправка авторизации

let nav_third_block = document.getElementById('nav_third-block');
const Login = document.getElementById('log');
Login.addEventListener('click', function(){
  let logup = document.getElementById("Logup").value;
  let userpassword = document.getElementById("PasswordLog").value;
  username = logup;
  password = userpassword;
  
 let url = '../jsonfiles/LoginAndPasswods.json'; 
 fetch(url)
 .then(response => response.json())
 .then(result => { for(let element of result){
  if(element.login == username && element.password == password){
    logining = true;
    localStorage.setItem('username',`${username}`);
    localStorage.setItem('password',`${password}`);
    localStorage.setItem('logining','true');
    setLoginNameOnSite();
    checkerror = false;
    if(username == 'Admin'){
      let admindives = document.querySelectorAll('.admin');
      for(let elem of admindives){
      elem.style.display = "none";
      }
      nav_third_block.style.visibility = "visible";
      burgerallusers.style.display = "flex";
    }
    else{
      let unauthotized = document.querySelectorAll(".unauthotized");
      for(let elements of unauthotized){
        elements.style = "display:flex"
      }
    }
  }
 
 }
  if(!logining){

    addredblocks();
  }
});
 }
);

function setLoginNameOnSite(){
 for(let elem of pUsername){
  elem.textContent = localStorage.getItem('username');
  elem.style.display = "block";
 
 }
 loginmenu.style = 'transform: translateX(-2150px)';
 login_burger.style.display = 'none';
 sign_burger.style.display = 'none';
 login_account_menu.style.display = 'none';
 sign_account_menu.style.display = 'none';
 burgerlogout.style.display ="flex";
 account_menu_logout.style.display ="flex";

 Modal_window_background.style.zIndex = "auto";
 Modal_window_background.style.backgroundColor = "transparent";
}

// /Login menu

// Register menu JS

buttonclosereg.addEventListener('click',function(){
    registrmenu.style = 'margin-left: -3200px !important';

    Modal_window_background.style.zIndex = "auto";
    Modal_window_background.style.backgroundColor = "transparent";
  }
)

function generateUsername() {
  const adjectives = ['Adventurous', 'Brave', 'Curious', 'Daring', 'Energetic', 'Friendly', 'Helpful', 'Imaginative', 'Kind', 'Optimistic',"Abacus","Candle","Eavesdrop","Gurgle","Icicle","Kaleidoscope","Marigold","Opaline","Quibble","Tangle","Vanguard","Xenial","Zephyr","Ambrosia","Daffodil","Frangipani","Gingko","Illusion"];
  const nouns = ['Sunflower', 'Raindrop', 'Firefly', 'Pebble', 'Bumblebee', 'Starfish', 'Snowflake', 'Wildflower', 'Seashell', 'Dragonfly',"Bangle","Dangle","Fascinate","Hazelnut","Jargon","Limelight","Nimble","Panacea","Ramble","Serenade","Unravel","Whimsical","Yearn","Brocade","Camellia","Effervescent","Hinterland","Juniper"];

  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${randomAdjective}${randomNoun}`;
}
let count = 0

const randombutton = document.getElementById('generatelogin');
randombutton.addEventListener('click',function(){
  
  let account = document.getElementById('Logup2');
  if(count < 5){
   const username = generateUsername();
  
    account.value = username; 
    count++;
  }
  else{
    if(!checkerror){
    let errorMessge = document.createElement('p');
    errorMessge.innerText = "You cant generate more than 5 count";
    errorMessge.style = "color: red; font-size: 12px" ;
    account.insertAdjacentElement('afterend', errorMessge);
    checkerror = true;
    }
  }
  
})

// /Register menu JS

// Error message

let checkerror = false
function addredblocks(){
  if(!checkerror){
    let errorMessge = document.createElement('p');
    errorMessge.innerText = "Incorrect login";
    errorMessge.style = "color: red; font-size: 12px" ;
    let errorpassword = document.createElement('p');
    errorpassword.innerText = "Incorrect password";
    errorpassword.style = "color: red; font-size: 12px";
    let logup = document.getElementById("Logup");
    let userpassword = document.getElementById("PasswordLog");
    logup.insertAdjacentElement('afterend', errorMessge);
    userpassword.insertAdjacentElement('afterend', errorpassword);
    checkerror = true;
  }
}

// /Error message

// Language select

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
// /Language select

// Daily theme

let buttonswitch = document.getElementById("check");
let box = document.getElementsByClassName('box');
let text = document.querySelectorAll('p');
let site_wrapper = document.getElementById('site-wrapper');
let bg_Content = document.querySelector(".BG_Content");
let footer_logo = document.getElementById('footer_logo');
let footer_links = document.getElementsByClassName(".footer_links");
let footer_block_text = document.getElementById('footer_block-text');
let footer_block_copyright = document.getElementById('footer_block-copyright');
//let header = document.querySelector('header');
// Проверяем, есть ли сохраненное значение в локальном хранилище
const isDarkThemeEnabled = localStorage.getItem('darkThemeEnabled') === 'true';
let searchphoto = document.querySelector('.search-photo');
let basket = document.querySelector('shoping');
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

// /Daily theme

// Add new account

//добавление нового пользователя
let ussersArray = [];
let checkerror1 = false;
let checkerror2 = false;
let checkerror3 = false;
let checkerror4 = false;
let checkerrorprivacy = false;
const sign = document.getElementById("sign");
let height = 1000;
sign.addEventListener("click", function() {
  let url = '../jsonfiles/LoginAndPasswods.json';
  const password = document.getElementById('password').value;
  const validationMessage = validatePassword(password);
  validateEmail();
  let checkboxprivacy = document.querySelector('.checkboxprivacy');
  let ussersArray = [];
  
  console.log("sdjfhsdfgdsfuyg")
  if (document.getElementById('password').value == document.getElementById('Cpassword').value) {
    fetch(url)
      .then(response => response.json())
      .then(result => {
        ussersArray = result;
      })
      .then(() => {
        const newUser = {
          email: document.getElementById('Email').value,
          FirstName: document.getElementById('FirstName').value,
          LastName: document.getElementById('LastName').value,
          FatherName: document.getElementById('FatherName').value,
          login: document.getElementById('Logup').value,
          password: document.getElementById('password').value
        };
        ussersArray.push(newUser);
      });
  }

  if (!checkboxprivacy.checked) {
    if (!checkerrorprivacy) {
      let errorMessge = document.createElement('p');
      errorMessge.innerText = "Read Privacy policy";
      errorMessge.className = "error-message";
      document.querySelector('.Policy').insertAdjacentElement('afterend', errorMessge);
      registrmenu.style.height = `${height}px`;
      checkerrorprivacy = true;
    }
  }

  if (validationMessage) {
    alert(validationMessage);
  }

  const checkInput = (inputId, errorMsg, checkErrorVar) => {
    const input = document.getElementById(inputId);
    if (input.value === '') {
      if (!window[checkErrorVar]) {
        let errorMessge = document.createElement('p');
        errorMessge.innerText = errorMsg;
        errorMessge.className = "error-message";
        input.insertAdjacentElement('afterend', errorMessge);
        window[checkErrorVar] = true;
        registrmenu.style.height = `${height + 100}px`;
      }
    }
  };

  checkInput('Email', 'Incorrect Email', 'checkerror1');
  checkInput('FirstName', 'First name cannot be empty', 'checkerror2');
  checkInput('LastName', 'Last name cannot be empty', 'checkerror3');
  checkInput('Logup2', 'Incorrect account name', 'checkerror4');
  checkInput('password', 'Input password', 'checkerror3');
});

const inputs = ['Email', 'FirstName', 'LastName', 'Logup2', 'password'];
inputs.forEach(inputId => {
  document.getElementById(inputId).addEventListener('input', function() {
    const errorMessage = this.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.remove();
      window[`checkerror${inputs.indexOf(inputId) + 1}`] = false;
      registrmenu.style.height = `${height - 100}px`;
    }
  });
});
function validateEmail() {
  const emailInput = document.getElementById('Email');
  const email = emailInput.value.trim();

  // Проверяем, что email содержит один из допустимых доменов
  const allowedDomains = ['@gmail.com', '@mail.ru', '@yandex.ru'];
  const isValidDomain = allowedDomains.some(domain => email.endsWith(domain));

  if (!isValidDomain) {
    alert('Please enter a valid email address (e.g., @gmail.com, @mail.ru, @yandex.ru)');
  }
}
function validatePassword(password) {
  // Проверяем длину пароля
  if (password.length < 8) {
    return "Пароль должен содержать не менее 8 символов";
  }

  // Проверяем наличие специальных символов
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return "Пароль должен содержать не менее одного специального символа";
  }

  // Проверяем наличие заглавных букв
  if (!/[A-Z]/.test(password)) {
    return "Пароль должен содержать не менее одной заглавной буквы";
  }

  // Проверяем наличие английских букв
  if (!/[a-zA-Z]/.test(password)) {
    return "Пароль должен содержать только английские буквы";
  }

  // Если все проверки пройдены, пароль считается валидным
  return null;
}

// /Add new account 

// Slider

let arrowleft = document.getElementById("arrow-left");
let arrowright = document.getElementById("arrow-right");
let slider = document.querySelector(".Slider-container");
slider.classList.add='.slide-transition'
let slideWidth = 5;
let a = 0;
console.log(document.documentElement.clientWidth)

arrowright.addEventListener('click', function () {
    if (a < slideWidth - 1) {
        a++;
    } else {
        a = 0;
    }
    slider.style.transform = `translateX(-${a*21}%)`;
});

arrowleft.addEventListener('click', function () {
    if (a > 0) {
        a--;
    } else {
        a = slideWidth - 1;
    }
    slider.style.transform = `translateX(-${a*21}%)`;
});

// /Slider

