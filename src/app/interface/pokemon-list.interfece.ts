export interface PokeList {
    count: number,
    next: string,
    previous: string | null,
    results: Array<Object>
}