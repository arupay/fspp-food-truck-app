import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import axios from "axios";
import "./LoginForm.scss";
const API = process.env.REACT_APP_API_URL;

function LoginForm(props) {
  const { login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toggleForm = () => {
    const container = document.querySelector(".loginsection__container");
    container.classList.toggle("active");
    setEmail("");
    setConfirm("");
    setPassword("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    if (!confirm.length) {
      await login(email, password)
        .then((res) => {
          console.log(res, error);
          toast.success("Logged in successfully!");
          setTimeout(() => {
            navigate("/trucks");
          }, 2000);
        })
        .catch((err) => {
          setError(err.toString());
          if (err.code === "auth/invalid-email") {
            toast.error("Invalid Email ID");
          }
          if (err.code === "auth/user-not-found") {
            toast.error("Please check your email");
          }
          if (err.code === "auth/wrong-password") {
            toast.error("Please check your password");
          }
          if (err.code === "auth/too-many-requests") {
            toast.error("Too many attempts, please try again later.");
          }
        });
    } else {
      if (password !== confirm) {
        setError("Passwords must match!");
      } else {
        axios
          .post(`${API}/users/`, { email, username })
          .then(() => {})
          .catch((error) => console.error("catch", error));
        await register(email, password)
          .then((res) => {
            toast.success("Registered successfully!");
            setTimeout(() => {
              navigate("/trucks");
            }, 2000);
          })
          .catch((err) => {
            setError(err.toString());
          });
      }
    }
  };
  return (
    <section className="d-flex justify-content-center align-items-center loginsection">
      <div className="loginsection__container">
        <div className="loginsection__container__curview signinbx">
          <div className="loginsection__container__curview__imgbx">
            <img
              src="https://restaurantclicks.com/wp-content/uploads/2022/05/food-trucks-nyc.jpg"
              alt="truckimgsignup"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center loginsection__container__curview__formbx signinbx__formbx">
            <form onSubmit={handleSubmit} id="loginform">
              {/* bootstrap control form? come back to this */}
              <h2 className="text-uppercase">Sign In</h2>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                placeholder="email"
                required
              ></input>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
                required
              ></input>
              <button
                className="mt-1 header1__content__browse"
                type="submit"
                name="submit"
              >
                log in
              </button>
              <p className="signup">
                Don't have an account?
                <button
                  type="button"
                  className="text-uppercase"
                  onClick={() => toggleForm()}
                >
                  Join.
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="loginsection__container__curview signupbx">
          <div className="d-flex justify-content-center align-items-center loginsection__container__curview__formbx signupbx__formbx">
            <form onSubmit={handleSubmit}>
              <h2 className="text-uppercase">Create An Account</h2>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="email"
                required
              ></input>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                placeholder="username"
                required
              ></input>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                placeholder="password"
                required
              ></input>
              <input
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                type="password"
                name="confirm"
                placeholder="confirm password"
                required
              ></input>
              <button
                className="mt-1 header1__content__browse"
                type="submit"
                name="submit"
              >
                JOIN
              </button>
              {error && (
                <p className="error">
                  <strong>Error: </strong> {error}
                </p>
              )}
              <p className="signup">
                Already have an account with YumTrucks?
                <button
                  className="text-uppercase"
                  type="button"
                  onClick={() => toggleForm()}
                >
                  Sign In.
                </button>
              </p>
            </form>
          </div>
          <div className="loginsection__container__curview__imgbx signupbx__imgbx">
            <img
              src="https://media.timeout.com/images/105423519/image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
