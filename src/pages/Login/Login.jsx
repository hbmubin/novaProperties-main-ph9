import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser, user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (user) {
      toast.error("already login");
      return;
    }
    loginUser(email, password)
      .then(() => {
        toast.success("successfully login");
        e.target.reset();
        setTimeout(
          () => navigate(location?.state ? location.state : "/"),
          1000
        );
      })
      .catch(() => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>Nova/Login</title>
      </Helmet>
      <Toaster></Toaster>
      <form
        onSubmit={handleLogin}
        className="card-body max-w-lg bg-white rounded-2xl shadow-sm"
      >
        <h2 className="text-center font-bold text-4xl mb-6">Login </h2>

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
            name="password"
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
