import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {Animal, AnimalList} from "../model/animal"
import axios from "axios";

export const getAllAnimal = createAsyncThunk<[Animal] | undefined, void>(
    "get/animals",
   async () => {
    try {
        const response = await axios.get("https://633a7f85471b8c39556e4f68.mockapi.io/api/v1/animals")
        return response.data
    } catch (error:any) {
        console.log(error.message)
    }
   
   }
)


const initialState:AnimalList = {
    animals: [],
    loading: false,
    error: false,
    total:1
}

export const animalSlice = createSlice({
    name: 'animal',
    initialState,
    extraReducers:(builder) =>{
        builder.addCase(getAllAnimal.pending, (state: AnimalList): AnimalList => {
            state.loading = true;
            state.animals = [];
            state.error = false;
            state.total=1
            return state;
        })
        builder.addCase(getAllAnimal.fulfilled, (state: AnimalList, action:any): AnimalList => {
            state.loading = false;
            state.animals = action.payload;
            state.error = false;
            state.total= action.payload.length
            return state;
        })
        builder.addCase(getAllAnimal.rejected, (state: AnimalList): AnimalList => {
            state.loading = false;
            state.animals = [];
            state.error = false;
            state.total=1
            return state;
        })
        
        
    },
    reducers: {
        searchByName:(state:AnimalList,action:any)=>{
            state.loading = false;
            state.animals = 
                state.animals
                .filter((animal:Animal) => animal.animal_name.includes(action.payload.searchKey))
                .sort((animalA:Animal, animalB:Animal) => {
                        if(action.payload.sortBy==="-id")
                            return animalA.animal_id-animalB.animal_id
                        else return animalB.animal_id-animalA.animal_id
                    });
            state.error = false;
            state.total= state.animals
            .filter((animal:Animal) => animal.animal_name.includes(action.payload.searchKey))
            .sort((animalA:Animal, animalB:Animal) => {
                    if(action.payload.sortBy==="-id")
                        return animalA.animal_id-animalB.animal_id
                    else return animalB.animal_id-animalA.animal_id
                }).legth
            return state;
        },
        paginate:(state:AnimalList,action:any)=>{
            state.loading = false;
            state.animals = state.animals.slice((action.payload-1)*10,action.payload*10)
            state.error = false;
            return state;
        }
    }
})

export const {searchByName, paginate} = animalSlice.actions
export default animalSlice.reducer

