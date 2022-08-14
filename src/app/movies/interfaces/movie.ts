export interface Movie {
  _id?:                string;
  awards?:             Award[];
  cast?:            string[];
  fullplot?:           string;
  genres?:             string[];
  imdb?:               Imdb;
  languages?:          string[];
  plot?:               string;
  poster?:             string;
  title?:              string;
  writers?:            string[];
  year?:               number;
}

export interface Movies {
  _id?:                string;
  awards?:             Award[];
  cast?:               string[];
  countries?:          string[];
  directors?:          string[];
  fullplot?:           string;
  genres?:             string[];
  imdb?:               Imdb;
  languages?:          string[];
  lastupdated?:        string;
  lasupdated?:         string;
  num_mflix_comments?: number;
  plot?:               string;
  poster?:             string;
  rated?:              string;
  released?:           Date;
  runtime?:            number;
  title?:              string;
  tomatoes?:           Tomatoes;
  type?:               string;
  writers?:            string[];
  year?:               number;
}

export interface Tomatoes {
  viewer?:      Viewer;
  dvd?:         string;
	website?:     string;
	production?:  string;
  lastUpdated?: string;
}

export interface Viewer {
  rating?:     number;
  numReviews?: number;
  meter?:      number;
}

export interface Award {
  wins?:        number;
  nominations?: number;
  text?:        string;
}

export interface Imdb {
  rating?: number;
  votes?:  number;
  id?:     number;
}

export interface MenuItem {
  label: string;
  icon:  string;
  path:  string;
  command: (event?: any) => void;
}
