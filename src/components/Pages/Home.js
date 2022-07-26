import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    console.log(result);
    setUser(result.data.reverse());
  };

  const deleteUser =async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();

  }

  return (
    <div className="Container p-2">
      <div className="py-2 text-center">
        <h1>STUDENT MANAGEMENT ERP</h1>

        <h2 >Home Page</h2>
        <table class="table">
          <thead className="thead-dark">
            <tr className="bg-dark text-white">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">RollNo</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">City</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.rollno}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>

                <td>
                    <Link className="btn btn-primary m-2" exact to={`/users/${user.id}`}>View</Link>
                    <Link className="btn btn-outline-primary m-2" exact to={`/users/edit/${user.id}`}>Edit</Link>
                    <Link className="btn btn-danger m-2" exact to="/" onClick={() => deleteUser(user.id)}>Delete</Link>
                    <Link className="btn btn-outline-primary m-2" exact to={`/users/update/${user.id}`}>Update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
