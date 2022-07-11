import * as dotenv from "dotenv";
import { createConnection } from "typeorm"; 
import {hotel_csv} from "./hotelOrm";

dotenv.config();

createConnection ({
url: process.env.DATABASE_URL,
entities: [hotel_csv],
type: "postgres",
extra: {
    ssl: {
      rejectUnauthorized: false
    }
}
});