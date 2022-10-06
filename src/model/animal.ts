export interface Animal {
    animal_id: number
    animal_name: string
    animal_desc: string
    animal_avatar: string
    animal_price: string
    animal_short:string
}

export interface AnimalList{
    animals:[Animal]|any,
    loading: boolean,
    error: boolean,
    total: number
}