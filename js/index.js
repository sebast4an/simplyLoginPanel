const correctLogin = "test";
const correctPass = "test";

const logLoginData = e => {
    e.preventDefault();
    const login = document.querySelector(`.login`).value;
    const password = document.querySelector(`.password`).value;
    checkLoginData(login, password);
};


const checkLoginData = (login, password) => {
    if(login === correctLogin && password === correctPass) loginDataCorrect();
    else loginDataIncorrect();
};

const loginDataCorrect = () => {
    const form = document.querySelector(`.container__form`);
    form.innerHTML = `<p class="login__correct">Login correct!</p> Remember! This code is just a simple example.`;
    document.querySelector(`.info`).style = "display:none";
};

const loginDataIncorrect = () => {
    const form = document.querySelector(`.container__form`);
    form.innerHTML = `<p class="login__incorrect">Login incorrect!</p> Remember! This code is just a simple example.`;
    document.querySelector(`.info`).style = "font-weight: bold";
};

const loginButton = document.querySelector(`.main__button`);
loginButton.addEventListener("click", logLoginData);