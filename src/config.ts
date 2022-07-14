import { config } from 'dotenv';

config();

export default {
    API_PORT: process.env.PORT,
    API_TOKEN: process.env.API_TOKEN
}