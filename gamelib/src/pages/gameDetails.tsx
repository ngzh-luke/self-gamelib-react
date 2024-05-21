export interface GameDetailsProps {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: {
    id: number;
    image: string;
  }[];
}

const GameDetails = (game: GameDetailsProps) => {
  return (
    <>
      <h1>{game.title}</h1>
      <h3>{game.id}</h3>
    </>
  );
};
export default GameDetails;
