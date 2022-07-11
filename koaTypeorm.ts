import * as koa from "koa"
import './connectDb';
import {hotel_csv} from "./hotelOrm"

const server = new koa();

server.use( async ctx =>{
    const data = await hotel_csv.find()
    ctx.response.body = data;
})
server.listen(process.env.PORT || 3000, ()=> console.log("server is started"));