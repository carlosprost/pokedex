export interface Pokemon{
    id: number
    name: string,
    order: number,
    sprites: sprites
}

interface sprites{
    back_default:string,
    front_default:string,
    other: otherSprites

}

interface otherSprites{
    dream_world: dreamWorldSprites,
    home: homeSprites,



}

interface dreamWorldSprites{
    front_default: string,
    front_female: string

}

interface homeSprites{
    front_default: string,
    front_shiny: string

}

