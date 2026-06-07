function setCookie(name, value) { 
    document.cookie = `${name}=${value}; path=/`; 
}
function getCookie(name) { 
    const cookies = document.cookie.split(';'); 
    for (let cookie of cookies) { 
        cookie = cookie.trim(); 
        if ( cookie.startsWith(name + '=') ) { 
            return cookie.substring( name.length + 1 ); 
        } 
    } 
    return null; 
}
const translations = {
    en: {
        h1: 'Registration Form',
        p: 'Example of a modern HTML form with various elements',
        name: 'Name',
        name_holder: 'Enter name',
        surname: 'Surname',
        surname_holder: 'Enter surname',
        email: 'Email',
        password: 'Password',
        birthday: 'Date of Birth',
        phone: 'Phone',
        country: 'Country',
        ua: 'Ukraine',
        pl: 'Poland',
        ge: 'Germany',
        usa: 'USA',
        sex: 'Gender',
        male: 'Male',
        female: 'Female',
        skills: 'Your Skills',
        skill_level: 'Experience Level',
        file: 'Upload File',
        comm: 'Comment',
        comm_holder: 'Write something...',
        agree: 'I agree to the terms',
        submit: 'Submit',
        reset: 'Reset'
    },
    ua: {
        h1: 'Реєстраційна форма',
        p: 'Приклад сучасної HTML форми з різними елементами',
        name: 'Імʼя',
        name_holder: 'Введіть імʼя',
        surname: 'Прізвище',
        surname_holder: 'Введіть прізвище',
        email: 'Пошта',
        password: 'Пароль',
        birthday: 'Дата народження',
        phone: 'Телефон',
        country: 'Країна',
        ua: 'Україна',
        pl: 'Польща',
        ge: 'Німеччина',
        usa: 'США',
        sex: 'Стать',
        male: 'Чоловік',
        female: 'Жінка',
        skills: 'Ваші навички',
        skill_level: 'Рівень досвіду',
        file: 'Завантажити файл',
        comm: 'Коментар',
        comm_holder: 'Напишіть щось...',
        agree: 'Я погоджуюсь з умовами',
        submit: 'Відправити',
        reset: 'Очистити'
    }
};
const form = document.getElementById('formcard');
const themeSelect = document.getElementById('theme-select');
const langSelect = document.getElementById('lang-select');
form.addEventListener('submit', function(event) {
    event.preventDefault();
});
function applyLanguage(lang) {
    document.getElementById('h1')
        .textContent =
        translations[lang].h1;
    document.getElementById('p')
        .textContent =
        translations[lang].p;
    document.getElementById('name')
        .textContent =
        translations[lang].name;
    document.getElementById('name_holder')
        .placeholder =
        translations[lang].name_holder;
    document.getElementById('surname')
        .textContent =
        translations[lang].surname;
    document.getElementById('surname_holder')
        .placeholder =
        translations[lang].surname_holder;
    document.getElementById('email')
        .textContent =
        translations[lang].email;
    document.getElementById('password')
        .textContent =
        translations[lang].password;
    document.getElementById('birthday')
        .textContent =
        translations[lang].birthday;
    document.getElementById('phone')
        .textContent =
        translations[lang].phone;
    document.getElementById('country')
        .textContent =
        translations[lang].country;
    document.getElementById('ua')
        .textContent =
        translations[lang].ua;
    document.getElementById('pl')
        .textContent =
        translations[lang].pl;
    document.getElementById('ge')
        .textContent =
        translations[lang].ge;
    document.getElementById('usa')
        .textContent =
        translations[lang].usa;
    document.getElementById('sex')
        .textContent =
        translations[lang].sex;
    document.getElementById('male')
        .textContent =
        translations[lang].male;
    document.getElementById('female')
        .textContent =
        translations[lang].female;
    document.getElementById('skills')
        .textContent =
        translations[lang].skills;
    document.getElementById('skill_level')
        .textContent =
        translations[lang].skill_level;
    document.getElementById('name')
        .textContent =
        translations[lang].name;
    document.getElementById('file')
        .textContent =
        translations[lang].file;
    document.getElementById('comm')
        .textContent =
        translations[lang].comm;
    document.getElementById('comm_holder')
        .placeholder =
        translations[lang].comm_holder;
    document.getElementById('agree')
        .textContent =
        translations[lang].agree;
    document.getElementById('submit')
        .textContent =
        translations[lang].submit;
    document.getElementById('reset')
        .textContent =
        translations[lang].reset;
}
function applyTheme(theme) {
    document.body.classList.remove(
        'light',
        'dark'
    );
    document.body.classList.add(theme);
}
themeSelect.addEventListener( 'change', () => { 
    const theme = themeSelect.value;  
    applyTheme(theme);
    setCookie( 'theme' , theme );
});
langSelect.addEventListener( 'change', () => { 
    const lang = langSelect.value; 
    applyLanguage(lang); 
    setCookie( 'lang', lang ); 
});
const savedTheme = document.getCookie('theme');
const savedLang = document.getCookie('lang');

if (savedTheme) {
    applyTheme(savedTheme);
    themeSelect.value = savedTheme;
}
if (savedLang) { 
    applyLanguage(savedLang); 
    langSelect.value = savedLang; 
}
