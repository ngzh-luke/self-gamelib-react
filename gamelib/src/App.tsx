import { useEffect, useState } from "react";
import * as getGames from "./getGames";
import searchIcon from "./assets/search.svg";
import GameCard from "./components/gameCard";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}

// const game1 = {
//   id: 243,
//   title: "PlanetSide 2",
//   thumbnail: "https://www.freetogame.com/g/243/thumbnail.jpg",
//   short_description:
//     "A free-to-play open-world FPS that pits three factions against each other in a never-ending war.",
//   game_url: "https://www.freetogame.com/open/planetside-2",
//   genre: "Shooter",
//   platform: "PC (Windows)",
//   publisher: "Daybreak Games",
//   developer: "Daybreak Games",
//   release_date: "2012-11-21",
//   freetogame_profile_url: "https://www.freetogame.com/planetside-2",
// };

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search input-group">
      <input
        type="text"
        className=""
        id="searchBoxInput"
        placeholder="Type something here to search"
        value={searchTerm}
        onChange={(term) => {
          setSearchTerm(term.target.value);
        }}
      ></input>
      <img src={searchIcon} className="search-icon " alt="search-icon" />
    </div>
  );
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    const data = getGames.getAllGames();
    data.then((results: Game[]) => {
      setGames(results);
      console.log("results: ", typeof results, results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(
  //   "games:\n",
  //   `type:${typeof games}`,
  //   `lenght:`,
  //   games?.length,
  //   `object:`,
  //   games
  // );

  return (
    <>
      <div id="title">
        <h1 className="prompt-regular animate">GameLib</h1>
        <h3
          className="alimamadongfangdakai"
          style={{
            marginRight: "2px",
            marginLeft: "8px",
          }}
        >
          by LukeCreated
        </h3>
        {SearchBar()}{" "}
      </div>
      <div className="cards">
        {games?.length > 0 && (
          <>
            {games.map((game) => (
              <GameCard
                key={game.id}
                thumbnail={game.thumbnail}
                title={game.title}
                game_url={game.game_url}
                genre={game.genre}
                platform={game.platform}
                id={game.id}
              ></GameCard>
            ))}
          </>
        )}
      </div>
      {games?.length <= 0 && (
        <>
          <div className="not-found">
            <br />
            <h2
              className="prompt-bold-italic"
              style={{
                color: "#e32214",
              }}
            >
              No games found!
            </h2>
          </div>
        </>
      )}
    </>
  );
}

export default App;
