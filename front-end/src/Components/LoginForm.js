// import { useState } from "react";
import "./LoginForm.scss";

function LoginForm(props) {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const toggleForm = () => {
    console.log("hello");
    const container = document.querySelector(".loginsection__container");
    container.classList.toggle("active");
  };
  return (
    <section className="d-flex justify-content-center align-items-center loginsection">
      <div className="loginsection__container">
        <div className="loginsection__container__curview signinbx">
          <div className="loginsection__container__curview__imgbx">
            <img
              src="https://images.unsplash.com/photo-1656925545880-64c167c195c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              alt="truckimgsignup"
            />
          </div>
          <div className="d-flex justify-content-center align-items-center loginsection__container__curview__formbx signinbx__formbx">
            <form>
              {/* bootstrap control form? come back to this */}
              <h2 className="text-uppercase">Sign In</h2>
              <input type="text" name="username" placeholder="username"></input>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
              <button
                className="mt-1 header1__content__browse"
                type="submit"
                name="submit"
              >
                log in
              </button>
              <p className="text-uppercase signup">
                Don't have an account?
                <button type="button" onClick={() => toggleForm()}>
                  Sign Up.
                </button>
              </p>
            </form>
          </div>
        </div>
        <div className="loginsection__container__curview signupbx">
          <div className="d-flex justify-content-center align-items-center loginsection__container__curview__formbx signupbx__formbx">
            <form>
              <h2 className="text-uppercase">Create An Account</h2>
              <input type="text" name="username" placeholder="username"></input>
              <input
                type="password"
                name="password"
                placeholder="password"
              ></input>
              <input
                type="password"
                name="password"
                placeholder="confirm password"
              ></input>
              <button
                className="mt-1 header1__content__browse"
                type="submit"
                name="submit"
              >
                Create
              </button>
              <p className="signup">
                Already have an account with YumTrucks?
                <button type="button" onClick={() => toggleForm()}>
                  Sign In.
                </button>
              </p>
            </form>
          </div>
          <div className="loginsection__container__curview__imgbx signupbx__imgbx">
            <img
              src="https://images.unsplash.com/photo-1570441262588-2f5027a5e169?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=710&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
