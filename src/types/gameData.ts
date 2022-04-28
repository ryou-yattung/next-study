type GameData = {
  id: number;
  name: string;
  genre: string[];
  developers: string[];
  publishers: string[];
  releaseDates: {
    Japan: string;
    NorthAmerica: string;
    Europe: string;
    Australia: string;
  };
};

export default GameData;
