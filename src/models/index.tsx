export interface ICities {
  cityName: string;
  country: string;
  emoji: string;
  date: Date;
  notes: string;
  position: { lat: number; lng: number };
  id: number;
}

export interface IPosition {
  lat: number;
  lng: number;
}

export interface ICurrentCity {
  cityName: string;
  emoji: string;
  date: Date;
  notes: string;
}
