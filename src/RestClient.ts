import type PostType from "./PostType.js";
class RestClient{
    private static readonly _URL: string = "";
    public static async getPostAsync():Promise<void>{
        const response = await fetch(RestClient._URL)
        const data = await response.json();
        console.log(data);
    }
    public static async addPostAsync(post: PostType): Promise<void>{
        const response = await fetch(RestClient._URL, {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
        const data = await response.json();
        console.log(data)
    }
    public static async printPostAsync(post: PostType): Promise<void> {
        const postList = document.getElementById("post-list") as HTMLUListElement;
        const listItem = document.createElement("li");
        listItem.textContent = `Title: ${post.title}, Views: ${post.views}`;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        postList.appendChild(listItem);
        postList.appendChild(deleteButton);
        deleteButton.addEventListener("click", async () => {
            await RestClient.deletePostAsync(post.id!);
            postList.removeChild(listItem);
            postList.removeChild(deleteButton);
        });
    }
    public static async createPostFormAsync(): Promise<HTMLFormElement> {
        const form = document.getElementById("post-form") as HTMLFormElement;
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const title = formData.get("title") as string;
            const views = Number(formData.get("views"));
            const post: PostType = { title, views };
            await RestClient.addPostAsync(post);
        });
        return form;
    }
    public static async deletePostAsync(postId: number): Promise<void> {
        const deleteButton = document.getElementById("delete-button") as HTMLButtonElement;
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