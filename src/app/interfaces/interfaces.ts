export interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export interface Heroe {
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}
