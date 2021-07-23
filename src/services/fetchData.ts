import { DB_HOST, DB_PORT } from "@env";
import axios from "axios";

export async function fetchData(endpoint: string, token?: string): Promise<any> {

  return axios.get(`http://${DB_HOST}/${endpoint}`)
    .then((response) => response.data);
}
