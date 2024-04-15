import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MainProfile = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    password: "",
    birth: "",
    age: "",
    gender: "",
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);

  const callAPI = async () => {
    const response = await axios.get(
      "http://localhost:8000/user/detail-profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("🚀 ~ callAPI ~ response:", response.data);
    setUser(response.data);
  };
  useEffect(() => {
    callAPI();
  }, []);

  const handleEdit = () => {
    setEdit(!edit);
  };
  const handleSubmit = async () => {
    const response = await axios.put(
      "http://localhost:8000/user/edit-profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("🚀 ~ handleSubmit ~ response:", response);
    console.log("🚀 ~ handleSubmit ~ create token:", response.data);
    if (response.data.message) {
      toast.error(response.data.message);
    } else {
      toast.success("Update successfully");
      setEdit(!edit);
    }
  };
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };
  return (
    <div id="main_content_profile">
      <h3>{user.name}'s Account</h3>
      <Button onClick={handleEdit}>edit</Button>
      <Button onClick={handleLogOut}>logout</Button>
      {edit && (
        <div>
          <div>
            <p>password</p>
            <p>
              Must be at least 8 characters long, include at least 1 letter and
              1 number.
            </p>
            <input
              type="password"
              name="password"
              value={formData.password || ""}
              onChange={(e) => handleChange(e, "password")}
            />
          </div>
          <div>
            <p>User Name: </p>
            <input
              placeholder={user.name}
              type="text"
              name="name"
              value={formData.name || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>age: </p>
            <input
              placeholder={user.age}
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Address: </p>
            <input
              placeholder={user.address}
              type="text"
              name="address"
              value={formData.address || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Mobile Phone (optional):</p>
            <input
              placeholder={user.phone}
              type="tel"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>Gender</p>
            <select
              id="select_gender"
              name="gender"
              value={formData.gender || ""}
              onChange={handleChange}
            >
              <option value="other">Other</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <p>Date of Birth</p>
            <input
              placeholder={user.birth}
              type="date"
              name="birth"
              value={formData.birth || ""}
              onChange={handleChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Apply
          </button>
        </div>
      )}
      {!edit && (
        <div>
          <p>email: {user.email}</p>
          <p>username: {user.name}</p>
          <p>phone: {user.phone}</p>
          <p>gender: {user.gender}</p>
          <p>birth: {user.birth}</p>
          <p>age: {user.age}</p>
          <p>address: {user.address}</p>
          <NavLink id="continue_shopping" to="/">
            Continue Shopping
          </NavLink>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default MainProfile;
