import { IPrice } from "./types";


export default class Tool {
    name:string;
    creator:string;
    price:IPrice;
    preview:string;
    mainImage:string;
    tags:string[];
    id:number


    constructor(name:string,creator:string,priceEUR:number,priceXPF:number,preview:string,mainImage:string,tags:string[],id:number){
        this.name=name;
        this.creator=creator;
        this.price={
            EUR:`${priceEUR}€`,
            XPF:`${priceXPF}XPF`
        };
        this.preview=preview;
        this.mainImage=mainImage;
        this.tags=tags;
        this.id=id;
    }
}