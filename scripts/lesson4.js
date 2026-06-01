// let regex = /^\+\d{3}\(\d{2}\)-\d{2}-\d{3}-700$/;
// alert('Phone number format: +XXX(XX)-XX-XXX-700');
// let phone = prompt('Enter phone number (+XXX(XX)-XX-XXX-700):');
// while (true) {
//     if (regex.test(phone)) {
//         alert('Success');
//         break;
//     } else {
//         alert('Error! Invalid phone number format.');
//         phone = prompt('Enter phone number:');
//     }
// // }
// import User from "./User.js";
// import Button from "./Button.js";
// const users = [
//     new User("Andron"),
//     new User("Zahar"),
//     new User("Dmitry")
// ]
// const p = document.getElementById("name");
// for (let i = 0; i < users.length; i++) {
//     p.innerText += users[i].show() + "\n";
// }
// const user = new User("Andron", 20);
// user.login = "Zahar";
// console.log(user.toString());
// const button = new Button(50, 100, "Click me", 16, "blue", "white");
// const button2 = new Button(60, 120, "Submit", 18, "green", "black");
// const button3 = new Button(40, 80, "Cancel", 14, "red", "white");
// Button.showCounter();
// button.show();
// button2.show();
// button3.show();

class PrintMachine {
    constructor(fontSize, fontColor, fontFamily) {
        this.fontSize = fontSize;
        this.fontColor = fontColor;
        this.fontFamily = fontFamily;
    }
    print(text) {
        document.write(`
        <p style="
          font-size:${this.fontSize};
          color:${this.fontColor};
          font-family:${this.fontFamily};
        ">
          ${text}
        </p>
      `);
    }
};
const machine = new PrintMachine("24px", "blue", "Arial");
machine.print("Hello, this is a test of printMachine!");


class NewsFeed {
    constructor() {

      this.news = [];
    }
    get newsCount() {

      return this.news.length;
    }

    showNews() {

      document.write("<h2>News Feed</h2>");

      this.news.forEach((item, index) => {

        document.write(`
          <div style="
            border:1px solid black;
            padding:10px;
            margin:10px 0;
          ">
            <h3>${index + 1}. ${item.title}</h3>

            <p>${item.text}</p>

            <p>
              <b>Date:</b> ${item.date}
            </p>

            <p>
              <b>Tags:</b> ${item.tags.join(", ")}
            </p>
          </div>
        `);

      });
    }

    addNews(newsItem) {

      this.news.push(newsItem);
    }

    removeNews(title) {

      this.news = this.news.filter(
        item => item.title !== title
      );
    }

    sortByDate() {

      this.news.sort((a, b) => {

        return new Date(b.date) - new Date(a.date);

      });
    }

    searchByTag(tag) {

      return this.news.filter(item =>
        item.tags.includes(tag)
      );
    }
  }

  const feed = new NewsFeed();

  feed.addNews({
    title: "News 1",
    text: "A new game has been released.",
    date: "2025-05-10",
    tags: ["games", "gaming"]
  });

  feed.addNews({
    title: "News 2",
    text: "A new JavaScript version has been released.",
    date: "2026-01-15",
    tags: ["javascript", "programming"]
  });

  feed.addNews({
    title: "News 3",
    text: "A new movie has been released.",
    date: "2024-12-01",
    tags: ["movies", "entertainment"]
  });

  document.write(
    "<h2>Number of news items: "
    + feed.newsCount +
    "</h2>"
  );

  feed.sortByDate();

  feed.showNews();

  const foundNews = feed.searchByTag("javascript");

  document.write("<h2>Search by tag: javascript</h2>");

  foundNews.forEach(item => {

    document.write(`
      <p>
        <b>${item.title}</b> -
        ${item.text}
      </p>
    `);

  });
  feed.removeNews("News 3");


  document.write(
    "<h2>After removal:</h2>"
  );

  feed.showNews();