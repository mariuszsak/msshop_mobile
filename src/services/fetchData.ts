import { DB_HOST, DB_PORT } from "@env";

export async function fetchData(endpoint: string, token?: string): Promise<any> {
  const response: Response = await fetch(
    `http://${DB_HOST}/${endpoint}`, {
      headers: {
        Authorization: "Bearer " + token
      }
    }
  );
  return response.json();
}
