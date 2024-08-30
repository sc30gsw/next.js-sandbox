import fetcher from "@/lib/fetcher";

export const usePokemonData = (id: string) => {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const result = fetcher(endpoint);
  return result;
};
