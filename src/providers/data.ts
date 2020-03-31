const API_PATH = "https://covid19.mathdro.id/api/";

export async function get<T>(url: string): Promise<T> {
    const result = await fetch(API_PATH + url);
    return await result.json();
}