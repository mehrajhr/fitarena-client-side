import React from "react";
import { Link, useNavigate } from "react-router";
import UseAuth from "../Hooks/UseAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signWithGoogle, signInEmail , setUser} = UseAuth();
  const navigate = useNavigate();
  const handleEmailLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInEmail(email, password)
      .then((res) => {
        if (res.user) {
          setUser(res.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  const handleGoogleLogin = () => {
    signWithGoogle()
      .then((res) => {
        if (res.user) {
          setUser(res.user);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold">Login now!</h1>
          <form onSubmit={handleEmailLogin} className="fieldset">
            {/* email input field */}
            <div>
              <label className="input validator join-item">
                <input name="email" type="email" placeholder="Email" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
            </div>

            {/* password input field */}
            <label className="input validator">
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength="6"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                title="Must be more than 6 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            <p className="validator-hint hidden">
              Must be more than 6 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-neutral mt-4"
            />
          </form>
          <p>
            Don't have an account? Please{" "}
            <Link to="/register" className="btn btn-link">
              Register
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-white text-black border-[#e5e5e5] hover:bg-blue-950 hover:text-white"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
