import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ProductList() {

    const [productList, SetProductList] = useState([]);
    const navigate = useNavigate();

    async function getProductList() {
        const response = await axios.get("http://localhost:8080/products");
        setProductLsit(response.data);
    }

    async function onDeleteClicked(id){
        const response = await axios.delete(`http://localhost:8080/products/${id}`);
        setProductList(productList.filter((product) => product.id !== id));
    }

    async function onUpdateClicked(id){
        navigate('/produt-update' + id);
    }

    useEffect(() => {
        getProductList();
    }, []);


    return (
        <div>
            {
                productList.map((data) => {
                    return (
                        <div>
                        <div>
                            Id: {data.id}
                        </div>
                        <div>
                            Name: {data.name}
                        </div>
                        <div>
                            Price: {data.price}
                        </div>
                        <div>
                            Rating: {data.rating}
                        </div>
                        <div>
                            Category: {data.category}
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