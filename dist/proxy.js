"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
class Proxy {
    /*
        public constructor(redirector: Redirector, reaper : Reaper) {
            this.redirector = redirector;
            this.reaper = reaper;
        }
    */
    constructor() {
        this.koa = new Koa();
        this.setup();
    }
    setup() {
        this.koa.use((ctx) => __awaiter(this, void 0, void 0, function* () {
            ctx.redirect('http://jccsub2web.newgen.corp');
        }));
    }
    listen(port) {
        this.koa.listen(port);
    }
}
exports.Proxy = Proxy;
//# sourceMappingURL=proxy.js.map