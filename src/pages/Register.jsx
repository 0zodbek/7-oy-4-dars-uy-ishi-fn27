import React, {useRef} from "react";
import https from "../../axios";

function Register() {
  const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    https.post('auth/local/register',{
      username
    })
  return (
    <div>
      <form
        method="post"
        action="/register"
        className="mx-auto my-20 card w-96 p-8  shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <div className="form-control">
          <label htmlFor="username" className="label">
            <span className="label-text capitalize">username</span>
          </label>
          <input
            type="text"
            name="username"
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
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="email"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password" className="label">
            <span className="label-text capitalize">password</span>
          </label>
          <input type="password" id="password" className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"  />
        </div>
        <div className="mt-4">
          <button onClick={()=>{alert("salom")}} className="rounded-lg bg-blue-500 text-white text-lg btn btn-primary btn-block">
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
