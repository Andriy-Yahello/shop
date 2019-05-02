export class OrderFormModel {
    constructor(
        public firstName = '',
        public lastName = '',
        public email = '',
        public phones = [],
        public sendProducts = false,
        public addressType = 'home',
        public street1?: string,
        public street2?: string,
        public city?: string,
        public zip?: string) { }
}
