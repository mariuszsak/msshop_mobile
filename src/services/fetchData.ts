export async function fetchData(endpoint: string): Promise<any> {
    const response = await fetch(`http://192.168.0.2:3000/${endpoint}`);
    return await response.json();
}
