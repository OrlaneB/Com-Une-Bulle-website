export default class Prestation {
    type: string;
    client:string;
    preview:string;
    sector:string="";
    intro:string="";
    review:string="";
    
    constructor(type:string,client:string,preview:string) {
        this.type=type;
        this.client=client;
        this.preview=preview
    }
}