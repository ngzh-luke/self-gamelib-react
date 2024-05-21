import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Cookies from "universal-cookie";
import GameDetails from "./pages/gameDetails";
import * as getGames from "./getGames";
import { useEffect, useState } from "react";
import { GameDetailsProps } from "./pages/gameDetails";

export const AppNavigator = () => {
  const [game, setGame] = useState<GameDetailsProps>(Object);
  const cookies = new Cookies(null, { path: "/" });
  const selected: number = cookies.get("selected");
  useEffect(() => {
    const data = getGames.getGameDetailsByID(selected);
    data.then((results: GameDetailsProps) => {
      setGame(results);
      console.log("game: ", typeof results, results);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" index element={<App />}></Route>
        <Route
          path={`details/id=${selected}`}
          element={
            <GameDetails
              id={game.id}
              title={game.title}
              thumbnail={""}
              status={""}
              short_description={""}
              description={""}
              game_url={""}
              genre={""}
              platform={""}
              publisher={""}
              developer={""}
              release_date={""}
              freetogame_profile_url={""}
              minimum_system_requirements={{
                os: "",
                processor: "",
                memory: "",
                graphics: "",
                storage: "",
              }}
              screenshots={[]}
            ></GameDetails>
          }
        ></Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};
