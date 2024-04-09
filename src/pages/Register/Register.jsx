import { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const regularExpression =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    const email = e.target.email.value;
    if (password.length < 6) {
      toast.error("Password must be 6 character or longer");
    } else if (!regularExpression.test(password)) {
      toast.error(
        "password should contain atleast one number and one special character"
      );
      return;
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className="card-body max-w-lg bg-white rounded-2xl shadow-sm"
      >
        <h2 className="text-center font-bold text-4xl mb-6">Register </h2>

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
            onChange={handlePassword}
            type="password"
            placeholder="password"
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
