export async function fetchData(endpoint: string, token: string): Promise<any> {
    const response: Response = await fetch(
        `http://192.168.0.2:3000/${endpoint}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
      }
    );
    return response.json();
}
