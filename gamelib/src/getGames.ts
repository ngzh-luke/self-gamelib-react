import axios from "axios";

const BASE_URL = "https://www.freetogame.com/api/games";



export const getAllGames = async () => {
    const response = await axios.get(`${BASE_URL}`).then((response) => {
        console.log(response.data);
    });
    // const resData = response.json();
    // return resData;
    return response;
}

export const g = ()=>{

};
