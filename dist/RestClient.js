class RestClient {
    static _URL = "";
    static async getPostAsync() {
        const response = await fetch(RestClient._URL);
        const data = await response.json();
        console.log(data);
    }
    static async addPostAsync(post) {
        const response = await fetch(RestClient._URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log(data);
    }
    static async printPostAsync(post) {
        const postList = document.getElementById("post-list");
        const listItem = document.createElement("li");
        listItem.textContent = `Title: ${post.title}, Views: ${post.views}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        postList.appendChild(listItem);
        postList.appendChild(deleteButton);
        deleteButton.addEventListener("click", async () => {
            await RestClient.deletePostAsync(post.id);
            postList.removeChild(listItem);
            postList.removeChild(deleteButton);
        });
    }
    static async createPostFormAsync() {
        const form = document.getElementById("post-form");
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const title = formData.get("title");
            const views = Number(formData.get("views"));
            const post = { title, views };
            await RestClient.addPostAsync(post);
        });
        return form;
    }
    static async deletePostAsync(postId) {
        const deleteButton = document.getElementById("delete-button");
        deleteButton?.addEventListener("click", async () => {
            const response = await fetch(`${RestClient._URL}/${postId}`, {
                method: "DELETE"
            });
            const data = await response.json();
            console.log(data);
        });
    }
}
export default RestClient;
//# sourceMappingURL=RestClient.js.map