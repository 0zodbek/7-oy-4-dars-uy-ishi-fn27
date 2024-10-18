import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const user = {identifier: "test@test.com", password: "secret"}
  const [loading, setLoading] = useState(false);
 function handleDemoUser(event){
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
      localStorage.setItem("userr", JSON.stringify(data));
      localStorage.setItem("token", JSON.stringify(data.access_token));
      navigate("/");
    }
  })
  .catch((err) => {
    console.log(err);
  });
}
  return (
    <div>
      <form
        method="post"
        action="/login"
        className="mx-auto mt-28 card w-96  p-8 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <div className="form-control">
          <label htmlFor="email" className="label">
            <span className="label-text capitalize">email</span>
          </label>
          <input
            type="email"
            name="identifier"
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
            className="w-80 h-12 rounded-lg border p-4 border-solid border-gray-400"
            id="password"
          />
        </div>
        <div className="mt-4">
          <button type="submit" className="btn bg-blue-500 hover:bg-blue-600 text-white uppercase text-base rounded-lg btn-block">
            Login
          </button>
        </div>
        <button onClick={()=>{handleDemoUser()}} className="btn bg-[#483D8B] hover:bg-[#403680] rounded-lg text-white text-base uppercase btn-block">
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
