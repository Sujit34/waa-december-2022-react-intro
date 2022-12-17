import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { getAddresses } from "../../redux/AddressReducer";


function ProductList() {    
    
    const addressState = useSelector((state) => state.addressReducer);

    const dispatch = useDispatch(); 
    const navigate = useNavigate();

    async function onUpdateClicked(id){
        navigate('/address-update/'+ id);
    }

    async function onDeleteClicked(id){
        dispatch(delete(id));
    }

    useEffect(()=>{
        dispatch(getAddresses());
    },[])

    return (
        <div>
            {
                addressState.addressList.map((data) => {
                    return (
                        <div>
                        <div>
                            Id: {data.id}
                        </div>
                        <div>
                            Street: {data.street}
                        </div>
                        <div>
                            Zip: {data.zip}
                        </div>
                        <div>
                            City: {data.city}
                        </div>
                        <div>
                            State: {data.state}
                        </div>
                        <input 
                            type="button" 
                            value="Update" 
                            onClick={() => { onUpdateClicked(data.id)}} />
                        <input 
                            type="button" 
                            value="Delete" 
                            onClick={() => { onDeleteClicked(data.id)}} />
                    </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;