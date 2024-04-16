import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { loginUser, user, googleLogin, githubLogin, setLoading } =
    useContext(AuthContext);
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
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
          e.target.reset();
        }, 1000);
      })
      .catch(() => {
        toast.error("Invalid email or password");
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    if (user) {
      toast.error("already login");
    } else if (!user) {
      googleLogin().then(() => {
        toast.success("successfully login");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      });
    }
  };
  const handleGithubLogin = () => {
    if (user) {
      toast.error("already login");
    } else if (!user) {
      githubLogin().then(() => {
        toast.success("successfully login");
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1000);
      });
    }
  };
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="flex justify-center items-center"
    >
      <Helmet>
        <title>Nova/Login</title>
      </Helmet>
      <Toaster></Toaster>
      <div className="card-body max-w-lg bg-white rounded-2xl shadow-sm">
        <form onSubmit={handleLogin} className="">
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
          </div>
          <div className="form-control mt-4">
            <button className="btn bg-sky-400 hover:bg-sky-500 text-white rounded-full">
              Login
            </button>
          </div>
        </form>
        <div>
          <div className="flex  gap-2 mt- ml-3">
            <h2>new here?</h2>
            <Link
              className="text-blue-500 underline font-semibold"
              to="/register"
            >
              Register
            </Link>
          </div>
          <div className="flex justify-center items-center mt-4 mb-2 gap-4 font-semibold">
            <hr className="flex-1" />
            <div>or</div>
            <hr className="flex-1" />
          </div>
          <h2 className="text-center font-semibold">Sign in with</h2>
          <div className="flex justify-center gap-6 mt-4">
            <button
              className="hover:scale-110 hover:bg-neutral-200 p-2 rounded-full duration-300"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={35}></FcGoogle>
            </button>
            <button
              className="hover:scale-110 hover:bg-neutral-200 p-2 px-3 rounded-full duration-300"
              onClick={handleGithubLogin}
            >
              <FaGithub size={30}></FaGithub>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
