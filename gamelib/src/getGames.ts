import axios from "axios";
import * as configsJs from "./configs";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

export const getAllGames = async () => {
  const options = {
    method: "GET",
    url: `${BASE_URL}/filter`,
    params: {
      tag: "3d.mmorpg.fantasy.pvp",
      platform: "pc",
    },
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
  // const resData = response.json();
  // return resData;
};

export const g = () => {};
