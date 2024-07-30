import https from "../https/index";

export const getIndex = () => https.get('/index');
export const getHot = () =>https.get('/movie/theater')     