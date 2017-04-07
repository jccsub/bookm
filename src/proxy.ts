import {Reaper} from './reaper';
import {Redirector} from './redirector';
import * as Koa from 'koa';

export class Proxy {
    
    private reaper : Reaper;
    private redirector : Redirector;
    private koa = new Koa();
    

/*
    public constructor(redirector: Redirector, reaper : Reaper) {
        this.redirector = redirector;
        this.reaper = reaper;
    }
*/
    
    public constructor() {
        this.setup();
    }


    private setup() : void {
        this.koa.use( async (ctx) => {
            ctx.redirect('http://jccsub2web.newgen.corp');
        });        
    }

    public listen(port : number) {
        this.koa.listen(port);
    }
    

}