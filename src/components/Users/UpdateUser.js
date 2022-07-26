import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


const UpdateUser = () => {
  let navigate = useNavigate();
  const {id} = useParams();
  const [user, setUser] = useState({
    name: "",
    rollno: "",
    email: "",
    phone: "",
    city: ""
  });

  const { name, rollno, email, phone, city } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`, user);
    navigate("/");
  };
  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}` );
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your rollno"
              name="rollno"
              value={rollno}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone"
              maxLength={10}
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type=""
              className="form-control form-control-lg"
              placeholder="Enter Your city"
              name="city"
              value={city}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <button className="btn btn-warning btn-block">Update User</button>
        </form>
      </div>
    </div>
  );
};


export default UpdateUser;
