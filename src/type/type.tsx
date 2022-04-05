export interface IName {
    first: string
    middle: string
    last: string
}

export interface IImg {
    headShot?: string
    main: string
}

export interface ICreator {
    name: string
    url: string
}

export interface ICharacters {
    name: IName
    images: IImg
    gender: string
    species: string
    homePlanet: string
    occupation: string
    id: number
    age: string
}

export interface IInfo {
    synopsis: string
    yearsAired: string
    creators: ICreator[]
    id: number
}

export interface IBio {
    text?: string
    url: string
}

export interface ICast {
    name: string
    born: string
    died?: string
    bio: IBio
    id: number
}

export interface IEpisodes {
    number: string
    title: string
    writers: string
    originalAirDate: string
    desc: string
    id: number
}