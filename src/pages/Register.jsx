import React, { useRef } from "react";
import https from "../../axios";
import { json, useNavigate } from "react-router-dom";

function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const username = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await https.post('auth/local/register', {
        username,
        email,
        password
      });
      // console.log('Registration successful:', response.data);
      localStorage.setItem('token',JSON.stringify(response.data.jwt))
      navigate('/login')
      // You can redirect the user or show a success message here
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit} // Use onSubmit to handle form submission
        className="mx-auto my-20 card w-96 p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text capitalize">username</span>
          </label>
          <input
            type="text"
            name="username"
            ref={nameRef} // Attach ref to input
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="username"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text capitalize">email</span>
          </label>
          <input
            type="email"
            name="email"
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
            ref={passwordRef} // Attach ref to input
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="password"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="rounded-lg bg-blue-500 text-white text-lg btn btn-primary btn-block">
            register
          </button>
        </div>
        <p className="text-center">
          Already a member?
          <a className="ml-2 link link-hover link-primary capitalize" href="/login">
            login
          </a>
        </p>
      </form>
    </div>
  );
}

export default Register;