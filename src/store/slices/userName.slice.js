import { createSlice } from '@reduxjs/toolkit';
// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const userNameSlice = createSlice({
		name: 'userName',
        initialState: "",
        reducers: {
        getUserName: (state, action) =>{
            const name = action.payload
            return name;
        }
    }
})

export const { getUserName } = userNameSlice.actions;
export default userNameSlice.reducer;