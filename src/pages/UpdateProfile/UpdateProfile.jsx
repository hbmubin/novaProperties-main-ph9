import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoSaveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RiProfileLine } from "react-icons/ri";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
  const { user, updateUser, setLoading } = useContext(AuthContext);

  const handleName = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    updateUser(name, user.photoURL);
  };
  const handlePhoto = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
    updateUser(user.displayName, photo);
  };
  return (
    <div className="flex justify-center mt-10">
      <Helmet>
        <title>Nova/Update Profile</title>
      </Helmet>
      <div className="card min-w-[500px] bg-base-100 shadow-sm">
        <div className="card-body items-center text-center">
          <form onSubmit={handlePhoto} className="form-control w-full mb-6">
            <label className="label ml-2">
              <span className="label-text font-semibold text-lg">
                Photo URL
              </span>
            </label>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                name="photo"
                placeholder={user.photoURL}
                className="input input-bordered flex-1  rounded-full"
              />
              <button className="cursor-pointer btn  p-2 rounded-full">
                <IoSaveOutline size={30}></IoSaveOutline>
              </button>
            </div>
          </form>
          <form onSubmit={handleName} className="form-control w-full">
            <label className="label ml-2">
              <span className="label-text font-semibold text-lg">Name</span>
            </label>
            <div className="flex items-center gap-2 ">
              <input
                type="text"
                name="name"
                placeholder={user.displayName}
                className="input input-bordered flex-1  rounded-full"
              />
              <button className="cursor-pointer btn  p-2 rounded-full">
                <IoSaveOutline size={30}></IoSaveOutline>
              </button>
            </div>
          </form>
          <Link
            className="mt-6 font-semibold text-blue-500 underline"
            to="/userprofile"
          >
            See User Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
