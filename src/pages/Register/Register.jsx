import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const { createUser, googleLogin, user, githubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const regularExpression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      toast.error("Password must be 6 character or longer");
      return;
    }
    if (!regularExpression.test(password)) {
      toast.error(
        "password should contain atleast one number and one special character"
      );
      return;
    }
    createUser(email, password)
      .then((result) => {
        toast.success("successfully registered");
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            e.target.reset();
            navigate("/");
          })
          .catch();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleGoogleLogin = () => {
    if (user) {
      toast.error("already login");
    } else if (!user) {
      googleLogin().then(() => {
        toast.success("successfully login");
        setTimeout(() => {
          navigate("/");
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
          navigate("/");
        }, 1000);
      });
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <Toaster />
      <Helmet>
        <title>Nova/Register</title>
      </Helmet>
      <div className="card-body max-w-lg bg-white rounded-2xl shadow-sm">
        <form onSubmit={handleSubmit} className="">
          <h2 className="text-center font-bold text-4xl mb-6">Register </h2>

          <div className="form-control">
            <label className="label ml-2">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered  rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ml-2">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered  rounded-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label ml-2">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered rounded-full"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-sky-400 hover:bg-sky-500 text-white rounded-full">
              Register
            </button>
          </div>
        </form>
        <div>
          <div className="flex  gap-2 ml-3">
            <h2>already have an account</h2>
            <Link className="text-blue-500 underline font-semibold" to="/login">
              Login
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

export default Register;
