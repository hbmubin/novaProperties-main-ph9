import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <form className="card-body max-w-lg bg-white rounded-2xl shadow-sm">
        <h2 className="text-center font-bold text-4xl mb-6">Login !</h2>

        <div className="form-control">
          <label className="label ml-2">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered  rounded-full"
            required
          />
        </div>
        <div className="form-control">
          <label className="label ml-2">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered rounded-full"
            required
          />
          <div className="flex  gap-2 mt-6 ml-3">
            <h2>new here?</h2>
            <Link
              className="text-blue-500 underline font-semibold"
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-sky-400 hover:bg-sky-500 text-white rounded-full">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
