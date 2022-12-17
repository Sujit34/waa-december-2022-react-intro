import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAddresses = createAsyncThunk("address/getAddresses", async () => {
    const response = await axios.get("http://localhost:8080/addresses");
    return response.data;
});

export const getAddressById = createAsyncThunk("address/getAddressById:id", async (id) => {
    const response = await axios.get(`http://localhost:8080/addresses/${id}`);
    return response.data;
});

export const deleteAddress = createAsyncThunk("address/deleteAddress", async (id) => {
    const response = await axios.delete(`http://localhost:8080/address/${id}`);
})

export const updateAddress = createAsyncThunk("address/updateAddress", async (id, address) => {
    const response = await axios.put(`http://localhost:8080/addresses/${id}`, address);
})

const addressSlice = createSlice({
    name: "address",
    initialState: {
        addressList: [], address: {
            street: "",
            zip: "",
            city: ""

        }
    },
    reducers: {        
            
            onValueChanged: (state, action) => {

                state.person = {
          
                  ...state.person,
          
                  [action.payload.name]: action.payload.value,
          
                };       
              
            
        }
    },
    extraReducers: (builder) => {
        //getAddresses
        builder.addCase(getAddresses.fulfilled, (state, action) => {
            state.addressList = action.payload;
            state.status = "success";
        }),
        builder.addCase(getAddresses.rejected, (state, action) => {
            state.status = "failed";
        }),
        builder.addCase(getAddresses.pending, (state, action) => {
            state.status = "loading";
        });

        //getAddressById
        builder.addCase(getAddressById.fulfilled, (state, action) => {
            state.addressList = action.payload;
            state.status = "success";
        }),
        builder.addCase(getAddressById.rejected, (state, action) => {
            state.status = "failed";
        }),
        builder.addCase(getAddressById.pending, (state, action) => {
            state.status = "loading";
        });


        //updateAddress
        builder.addCase(updateAddress.fulfilled, (state, action) => {
            state.status = "success";
        }),
        builder.addCase(updateAddress.rejected, (state, action) => {
            state.status = "failed";
        }),
        builder.addCase(updateAddress.pending, (state, action) => {
            state.status = "loading";
        });

        //deleteAddress
        builder.addCase(deleteAddress.fulfilled, (state, action) => {
            state.status = "success";
        }),
        builder.addCase(deleteAddress.rejected, (state, action) => {
            state.status = "failed";
        }),
        builder.addCase(deleteAddress.pending, (state, action) => {
            state.status = "loading";
        });

    }
})

export default addressSlice.reducer;