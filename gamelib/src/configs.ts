import { from } from "env-var";
const env = from(import.meta.env, {});

export const apiKey = env.get("VITE_RAPIDAPI").required().asString();
// console.log("API Key:", apiKey);
