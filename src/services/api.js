const API_URL = 'https://restcountries.com/v3.1/all';

export async function fetchCountries() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('No se pudo obtener los datos de la API');
    }
    return response.json();
  } catch (error) {
    throw error;
  }
}
