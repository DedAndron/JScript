class User{
    #login;
    #age;
    constructor(login, age){
        this.#login = login;
        this.#age = age;
    }
    get login(){
        return this.#login;
    }
    set login(login){
        this.#changeAge();
        this.#login = login;
    }
    #changeAge(){
        this.#age++;
    }
    toString(){
        return `Login: ${this.#login}, Age: ${this.#age}`;
    }
    show(){
        return this.#login;
    }
    static showInfo(){
        console.log(`I'm a ${this.#login}`);
    }
}
export default User;