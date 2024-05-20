import openIcon from "../assets/open.svg";
import noIMG from "../assets/noimg.svg";

interface GameCardProps {
  thumbnail: string;
  title: string;
  game_url: string;
  genre: string;
  platform: string;
  id: number;
}

export default function GameCard(game: GameCardProps) {
  return (
    <>
      <div className="card" onClick={() => {}}>
        <div className="card-img">
          <img
            src={game.thumbnail == "" ? noIMG : game.thumbnail}
            loading="lazy"
            alt={game.title.concat("'s thumbnail")}
            style={{
              width: game.thumbnail == "" ? "222px" : "100%",
            }}
          />
        </div>
        <div className="card-info">
          <h2>{game.title}</h2>

          {game.game_url != "" && (
            <a
              href={game.game_url}
              target="_blank"
              rel="noopener noreferrer"
              className="alimamadongfangdakai"
            >
              {game.title.concat("'s URL")}
              <img
                src={openIcon}
                alt="open-icon"
                style={{
                  width: "20px",
                }}
              />
            </a>
          )}
          <p className="alimamadongfangdakai">
            <u>Genre:</u> {game.genre == "" ? "-" : game.genre}{" "}
          </p>
          <p className="alimamadongfangdakai">
            <u>Platform:</u> {game.platform == "" ? "-" : game.platform}
          </p>
        </div>
      </div>
    </>
  );
}
