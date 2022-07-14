import { config } from 'dotenv';

config();

export default {
    PORT: process.env.PORT,
    API_TOKEN: process.env.API_TOKEN
}