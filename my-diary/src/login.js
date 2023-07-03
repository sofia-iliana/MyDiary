import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function goToSignup() {
    navigate("/signup");
  }
  return (
    <div>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>Login</button>
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
