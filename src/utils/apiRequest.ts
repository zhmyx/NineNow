import axios from 'axios';

export async function get<T>(url: string): Promise<T> {
  try {
    const headers = { Accept: 'application/json' };
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (error) {
    throw new Error(`Failed to request ${url}: ${error}`);
  }
}
