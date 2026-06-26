import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/dashboardService";
import "../styles/login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin(e) {

    e.preventDefault();

    try {

      setLoading(true);

      const data = await login(username, password);

      localStorage.setItem(
        "token",
        data.access_token
      );

      navigate("/");

    } catch (err) {

      console.error(err);

      setError("Invalid username or password");

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>SOAR Engine</h1>

        <h3>Security Operations Center</h3>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e)=>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
          >

            {loading ? "Signing In..." : "Login"}

          </button>

        </form>

        {error &&

          <p className="login-error">
            {error}
          </p>

        }

      </div>

    </div>

  );

}

export default Login;