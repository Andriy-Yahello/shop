interface FeedBackModelInterface{
    id: number;
    productId: number;
    description: string;
}

export class FeedBackModel implements FeedBackModelInterface{
    constructor(
        public id: number = null,
        public productId: number = null,
        public description: string = ''
        ) {
            this.id = id,
            this.productId = productId,
            this.description = description;
        }
}