import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();
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
    await axios.post("http://localhost:3003/users", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
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

          <button className="btn btn-primary btn-block">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
