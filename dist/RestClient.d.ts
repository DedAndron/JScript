import type PostType from "./PostType.js";
declare class RestClient {
    private static readonly _URL;
    static getPostAsync(): Promise<void>;
    static addPostAsync(post: PostType): Promise<void>;
    static printPostAsync(post: PostType): Promise<void>;
    static createPostFormAsync(): Promise<HTMLFormElement>;
    static deletePostAsync(postId: number): Promise<void>;
}
export default RestClient;
//# sourceMappingURL=RestClient.d.ts.map