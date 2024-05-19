import axios from "axios";
import * as configsJs from "./configs";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api";

export const getGamesByTags = async (tag: string, platform: string) => {
  // Filter games by multiple tags
  const options = {
    method: "GET",
    url: `${BASE_URL}/filter`,
    params: {
      tag: tag, // "3d.mmorpg.fantasy.pvp",
      platform: platform, // "pc",
    },
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGamesByPlatform = async (platform: string) => {
  // Games by platform
  const options = {
    method: "GET",
    url: `${BASE_URL}/games`,
    params: { platform: platform }, // "pc"
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGamesByCategoryOrTag = async (category: string) => {
  // Games by category or tag
  const options = {
    method: "GET",
    url: `${BASE_URL}/games`,
    params: {
      category: category, // "shooter",
    },
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGamesByPlatformAndCategoryAndSorted = async (
  platform: string,
  category: string,
  sortBy: string
) => {
  // Games by platform & category & sorted
  const options = {
    method: "GET",
    url: `${BASE_URL}/games`,
    params: {
      platform: platform, // "browser",
      category: category, // "mmorpg",
      "sort-by": sortBy, // "release-date",
    },
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getGameDetailsByID = async (gameID: number) => {
  // Return details from a specific game
  const options = {
    method: "GET",
    url: `${BASE_URL}/game`,
    params: { id: gameID.toFixed() }, // '234'
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSortedGames = async (sortBy: string) => {
  // Get sorted games
  const options = {
    method: "GET",
    url: `${BASE_URL}/games`,
    params: {
      "sort-by": sortBy, // 'alphabetical'
    },
    headers: {
      "X-RapidAPI-Key": configsJs.apiKey,
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllGames = async function () {
  // Get all games!

  const options = {
    method: "GET",
    url: `${BASE_URL}/games`,
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
};
