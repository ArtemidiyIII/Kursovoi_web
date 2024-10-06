let loginmenu = document.querySelector('.Login');
let registrmenu = document.querySelector('.Register');
let username = localStorage.getItem('username');
let password = localStorage.getItem('password');
let logining = false;
const account_menu_toogle = document.getElementById('account_menu_toogle');
const burger_menu_toogle = document.getElementById('menu_toogle');
const burger_menu = document.querySelector('burger-menu');
let burgerlogout = document.getElementById('burgerlogout');
let translate = 'en';
let buttoncloselog = document.querySelector('.button-close-login');
let buttonclosereg = document.querySelector('.button-close-reg');

// burgermenuJS

let login_burger = document.getElementById('burgerLog');
login_burger.addEventListener('click', function(){
  registrmenu.style= 'margin-left: -3200px !important';
  loginmenu.style= 'margin-left: 0px !important';
})

let sign_burger = document.getElementById('burgerSign');
sign_burger.addEventListener('click', function(){
  loginmenu.style= 'margin-left: -3200px !important';
  registrmenu.style= 'margin-left: 0px !important';
})

let burgerequipment = document.querySelector('.equipment');
let burgerabout = document.querySelector('.about_us');
let burgerblog = document.querySelector('.blog');
let burgerallusers = document.querySelector('.check_all_users');
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
    loginmenu.style= 'margin-left: -3200px !important';
  }
)

// /Login menu

// Register menu JS

buttonclosereg.addEventListener('click',function(){
    registrmenu.style = 'margin-left: -3200px !important';
  }
)

// /Register menu JS

// Language select

function loadLanguage(language) {
    let url = '../JsonFiles/i18n.json';
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
  let url = '../JsonFiles/LoginAndPasswods.json';
  const password = document.getElementById('password').value;
  const validationMessage = validatePassword(password);
  validateEmail();
  let checkboxprivacy = document.querySelector('.checkboxprivacy');
  let ussersArray = [];

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

