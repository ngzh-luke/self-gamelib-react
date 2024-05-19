import { useEffect } from "react";
import * as getGames from "./getGames";
import searchIcon from "./assets/search.svg";

function SearchBar() {
  return (
    <>
      <form action="" method="get" className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Type something here to search"
          value={undefined}
          onChange={() => {}}
          required
        ></input>
        <button type="submit">
          <img src={searchIcon} />
        </button>
      </form>
    </>
  );
}

function App() {
  useEffect(() => {
    const data = getGames.getAllGames();
    console.log(data);
  }, []);
  return (
    <div id="title">
      <h1 className="prompt-regular animate">GameLib</h1>
      <h3
        className="alidongfang"
        style={{
          marginRight: "1px",
          marginLeft: "10px",
        }}
      >
        by LukeCreated
      </h3>
      {SearchBar()}
      {}
    </div>
  );
}

export default App;
