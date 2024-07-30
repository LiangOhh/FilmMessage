import https from "../https/index";

export const getIndex = () => https.get('/index');
export const getHot = (parmas) =>https.get('/movie/theater',parmas)     