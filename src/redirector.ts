import * as Koa from "koa";

export class Redirector {
    private koa = new Koa();
    private port : number;
    
    constructor() {
        this.setup();
    }

    private setup() : void {
        this.koa.use( async (ctx) => {
            ctx.redirect('http://127.0.0.1:80');
        });        
    }

    public listen(port : number) {
        this.koa.listen(port);
    }

}