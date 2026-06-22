import RestClient from "./RestClient.js";
for (let i = 1; i <= 10; i++) {
    RestClient.getPostAsync();
    const post = {
        title: "My New Post[" + i + "]",
        views: Math.floor(Math.random() * 1000),
    };
    RestClient.addPostAsync(post);
    RestClient.printPostAsync(post);
}
//# sourceMappingURL=index.js.map