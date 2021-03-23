export async function fetchProducts(): Promise<any> {
    const response = await fetch('http://192.168.0.2:3000/products');
    const json = await response.json();
    return json;
}
