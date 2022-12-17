import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function AddProduct() {
    const nevigate = useNavigate();
    const [categoryList, setcategoryList] = useState([]);
    const [product, setProduct] = useState({
        name: "",
        price: null,
        rating: "",
        category: Object,
    });

    async function getCategories() {
        const response = await axios.get(`http://localhost:8080/categories`);
        setcategoryList(response.data);
    }

    const onValueChanged = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setProduct({ ...product, [name]: value })
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.post(`http://localhost:8080/products/${id}`, product);
        nevigate('/');
    }

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <div>
            <form
                style={{ width: "50%", margin: "auto", marginTop: "30px" }}
                onSubmit={onFormSubmit}>
                <h3>Add Product</h3>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={onValueChanged}
                        placeholder="Enter product name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={onValueChanged}
                        placeholder="Enter price"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <input
                        type="number"
                        className="form-control"
                        id="rating"
                        name="rating"
                        value={product.rating}
                        onChange={onValueChanged}
                        placeholder="Enter rating"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Category</label>
                    <select
                        className="form-control"
                        id="category"
                        name="category"
                        value={product.category.id}
                        onChange={onValueChanged}
                    >
                        {categoryList.map((item) => {
                            return (
                                <option key={item.id} value={item.id}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Add
                </button>
            </form>
        </div>
    );
}
export default AddProduct;