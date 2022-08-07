import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { users } from "../../db";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const found = users.some((e) => e.username === username && e.password);

    if (found) {
      window.localStorage.setItem("isAuth", true);
      // window.localStorage.setItem("username", username);
      navigate("/");
      window.location.reload(false);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="w-1/2 mt-10 bg-[#F58F00] rounded-xl">
        <h1 className="p-5 text-center font-bold rounded-t-xl text-3xl bg-[#FFCC85]">
          Login
        </h1>
        <form className="flex flex-col p-5 space-y-5 " onSubmit={handleSubmit}>
          <TextField
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            value={password}
            required
          />
          <input
            type="submit"
            value="Login"
            className="rounded-lg px-4 py-2 text-[#fff] bg-[#5E39C4] hover:bg-[#9881DA] transition duration-200 shadow-md cursor-pointer"
          />
        </form>
        <div className="flex flex-col items-center px-5 pb-5">
          <h1>Don't have an account yet?</h1>
          <Link className="underline text-[#5E39C4] font-bold" to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;