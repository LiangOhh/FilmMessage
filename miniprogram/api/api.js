import https from "../https/index";

export const getIndex = () => https.get('/index');     