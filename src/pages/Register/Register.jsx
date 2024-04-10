import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
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

  return (
    <div className="flex justify-center items-center ">
      <Toaster />
      <Helmet>
        <title>Nova/Register</title>
      </Helmet>
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-lg bg-white rounded-2xl shadow-sm"
      >
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
          <div className="flex  gap-2 mt-6 ml-3">
            <h2>already have an account</h2>
            <Link className="text-blue-500 underline font-semibold" to="/login">
              Login
            </Link>
          </div>
        </div>
        <div className="form-control mt-2">
          <button className="btn bg-sky-400 hover:bg-sky-500 text-white rounded-full">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
