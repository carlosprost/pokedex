export interface Pokemon{
    id: number
    name: string,
    abilities: abilities[],
    base_experience: number,
    moves: moves[],
    height: number,
    order: number,
    sprites: sprites,
    stats: stats[],
    types: types[],
    weight: number
}

interface moves{
    move: move,
    version_group_details: versionGroupDetails[]
}

interface move{
    name: string,
    url: string
}

interface versionGroupDetails{
    level_learned_at: number,
    move_learn_method: moveLearnMethod,
    version_group: versionGroup
}

interface moveLearnMethod{
    name: string,
    url: string
}

interface versionGroup{
    name: string,
    url: string
}

interface abilities{
    ability: ability,
    is_hidden: boolean,
    slot: number
}

interface ability{
    name: string,
    url: string
}

interface types{
    slot: number,
    type: type
}

interface type{
    name: string,
    url: string
}

interface stats{
    base_stat: number,
    effort: number,
    stat: stat

}

interface stat{
    name: string,
    url: string
}

interface sprites{
    back_default:string,
    back_female:string,
    back_shiny:string,
    back_shiny_female:string,
    front_default:string,
    front_female:string,
    front_shiny:string,
    front_shiny_female:string,
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

