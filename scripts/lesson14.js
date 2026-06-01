// const cl = console.log;
// const url = 'http://localhost:3000/posts';
// const posts = document.getElementById('posts');
// async function getPosts(url){
//     const response = await fetch(url);
//     const data = await response.json();
//     cl(data);
// }
// try {
//     getPosts(url);
// }catch (error) {
//     cl(error);
// }

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(post => {
//             // posts.textContent += `id: ${post.id}, title: ${post.title}, views: ${post.views}\n`;
//             cl(`id: ${post.id}, title: ${post.title}, views: ${post.views}`);
//         });
//     })
const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const result = document.getElementById("weather-result");

const apiKey = "ee93f9071d4e5bcfe33d13037ecada64";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}</h2>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } 
  catch (error) {
    result.innerHTML = `
      <p>${error.message}</p>
    `;
  }
});