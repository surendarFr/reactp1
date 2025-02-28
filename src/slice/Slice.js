import {createSlice} from "@reduxjs/toolkit"
const initialState={
    users:[
        
    ]
};
export const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUsers:(state,action)=>
            { state.users=[...state.users,action.payload]
},
           

        deleteUsers:(state,action)=>{
            state.users=state.users.filter((val,index)=>
                index!==action.payload

            )
        }
       
    },
});
export const {setUsers,deleteUsers}=userSlice.actions;
export default userSlice.reducer;