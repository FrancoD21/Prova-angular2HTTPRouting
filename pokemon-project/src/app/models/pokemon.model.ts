// --- 1. MODELLI PER LA LISTA DEI TIPI ---
// (URL: https://pokeapi.co/api/v2/type)
export interface PokemonType {
  name: string;
  url: string;
}

export interface TypeResponse {
  results: PokemonType[];
}

// --- 2. MODELLI PER LA LISTA POKEMON PER TIPO ---
// (URL: https://pokeapi.co/api/v2/type/{id})
export interface PokemonListItem {
  pokemon: {
    name: string;
    url: string;
  };
}

export interface PokemonListResponse {
  pokemon: PokemonListItem[];
}

// --- 3. MODELLI PER IL DETTAGLIO DEL POKEMON ---
// (URL: https://pokeapi.co/api/v2/pokemon/{id})
export interface PokemonDetail {
  name: string;           
  base_experience: number; 
  sprites: {
    front_default: string; 
  };
}