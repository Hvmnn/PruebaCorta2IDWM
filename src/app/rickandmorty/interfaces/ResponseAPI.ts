export interface Character {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  location: Location;
  image:    string;
}

export interface Location {
  name: string;
  url:  string;
}

export interface ResponseApi_GetCharacters {
  results: Character[];
  info: {
    next: string | null;
    prev: string | null;
  }
}
