export async function fetchData(endpoint: string, token?: string): Promise<any> {
    const response: Response = await fetch(
        `http://85a888e1adcc.ngrok.io/${endpoint}`, {
            headers: {
                Authorization: 'Bearer ' + token
            }
      }
    );
    return response.json();
}
