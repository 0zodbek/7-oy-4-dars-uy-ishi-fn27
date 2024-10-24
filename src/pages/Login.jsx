import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TokenContext,UserContext } from "../App";
function Login() {
  const {token ,settoken} = useContext(TokenContext)
  const {user, setUser} = useContext(UserContext)
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setLoading(true);

    const user = {
      identifier: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://strapi-store-server.onrender.com/api/auth/local", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);

        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", JSON.stringify(data.jwt));
          settoken(data.jwt)
          setUser(data)
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit} // Use onSubmit to handle form submission
        className="mx-auto mt-28 card w-96 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text capitalize">email</span>
          </label>
          <input
            type="email"
            name="identifier"
            ref={emailRef} // Attach ref to input
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text capitalize">password</span>
          </label>
          <input
            type="password"
            name="password"
            ref={passwordRef} // Attach ref to input
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="password"
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 text-white uppercase text-base rounded-lg btn-block"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Loading..." : "Login"}
          </button>
        </div>
        <button
          disabled
          className="btn bg-[#483D8B] hover:bg-[#403680] rounded-lg text-white text-base uppercase btn-block"
        >
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <a
            className="ml-2 link link-hover link-primary capitalize"
            href="/register"
          >
            register
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;