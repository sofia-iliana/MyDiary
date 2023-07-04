import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function goToSignup() {
    navigate("/signup");
  }

  function login() {
    axios
      .post("http://localhost:1212/user/login", {
        email: email,
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
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        Login
      </button>
      <p>
        If you don't have an account,{" "}
        <a
          onClick={() => {
            goToSignup();
          }}
        >
          signup here
        </a>
      </p>
    </div>
  );
}

export default Login;
