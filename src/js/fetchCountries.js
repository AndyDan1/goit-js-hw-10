export function fetchCountries(name) {
  const searchParams = 'name,capital,population,flags,languages';
  const url = `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`;
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.ok);
    }
    return response.json();
  });
}
