const cl = console.log;
const form = document.forms.formcard;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
});