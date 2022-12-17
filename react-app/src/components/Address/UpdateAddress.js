import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdateAddress() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const address = useSelector((state) => state.addressReducer);
  const dispatch = useDispatch();   

  useEffect(()=>{
    dispatch(getAddressById(id));
  })

  const onFormSubmit = async (event) => {
    event.preventDefault();
    dispatch(updateAddress(id,address));
    navigate('/');
}

onValueChanged = (event) => {
            
  const name = event.target.name;
  const value = event.target.value;
  dispatch(onValueChanged(name,value));
  
}

  
  return (
    <div style={{ width: "80%", margin: "auto", marginTop: "30px" }}>
      
      <form
        style={{ width: "50%", margin: "auto", marginTop: "30px" }}
        onSubmit={onFormSubmit()}
      >
        <h3>Update Address</h3>
        <div className="form-group">
          <label htmlFor="street">Street address</label>
          <input
            type="text"
            className="form-control"
            id="street"
            name="street"
            value={address.street}
            onChange={dispatch(onValueChanged())}
            placeholder="Enter street address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input
            type="number"
            className="form-control"
            id="zip"
            name="zip"
            value={address.zip}
            onChange={dispatch(onValueChanged())}
            placeholder="Enter zip code"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            className="form-control"
            id="city"
            name="city"
            value={address.city}
            onChange={dispatch(onValueChanged())}
            placeholder="Enter city"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateAddress;
