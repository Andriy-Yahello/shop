export class ConfigModel {
    constructor(
        public id:number, 
        public login: string, 
        public email: string){
            this.id = id;
            this.login = login;
            this.email = email;
    }
}
