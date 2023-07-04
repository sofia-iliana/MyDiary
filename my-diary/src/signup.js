import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function goToLogin() {
    navigate("/");
  }

  function signup() {
    axios
      .post("http://localhost:1212/user/signup", {
        email: email,
        username: username,
        password: password,
      })
      .then(({ data }) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate("/newEntry");
        } else {
          alert(data.msg);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signup();
        }}
      >
        Signup
      </button>
      <p>
        Do you have an account?{" "}
        <a
          onClick={() => {
            goToLogin();
          }}
        >
          login here
        </a>
      </p>
    </div>
  );
}

//export default signup;
