import{configureStore, createSlice} from "@reduxjs/toolkit";
const state = {
    fullName : " ",
    mobileNo :null,
};
const userSlice = createSlice({
    name : 'user',
    initialState : state,
    reducers :{
        updateMobileNo : (state,action) =>{
            state.mobileNo = action.payload
        },
        updateFullName : (state,action) =>{
            state.fullName = action.payload
        },
        reset: (state) =>{
            return{
                fullName :"",
                mobileNo : null,
            }
        }
    }
});
const store = configureStore ({
    reducer : {
        user : userSlice.reducer
    }
});
export default store;
export const {updateFullName,updateMobileNo,reset} = userSlice.actions;