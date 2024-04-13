import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { IoSaveOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const { user, updateUser } = useContext(AuthContext);
  const [updateName, setUpdateName] = useState(user.displayName);
  const [updatePhoto, setUpdatePhoto] = useState(user.photoURL);
  const [photoSaving, setPhotoSaving] = useState(false);
  const [nameSaving, setNameSaving] = useState(false);

  const handleUpdatePhoto = (event) => {
    setUpdatePhoto(event.target.value);
  };
  const handleUpdateName = (event) => {
    setUpdateName(event.target.value);
  };
  const handleName = (e) => {
    e.preventDefault();
    setNameSaving(true);
    setTimeout(() => {
      setNameSaving(false);
      toast.success("Name successfully updated");
    }, 1000);
    const name = e.target.name.value;
    updateUser(name, user.photoURL);
  };
  const handlePhoto = (e) => {
    e.preventDefault();
    setPhotoSaving(true);
    setTimeout(() => {
      setPhotoSaving(false);

      toast.success("Photo URL successfully updated");
    }, 1000);
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
          <Toaster></Toaster>
          <form onSubmit={handlePhoto} className="form-control w-full mb-6">
            <label className="label ml-2">
              <span className="label-text font-semibold text-lg">
                Photo URL
              </span>
            </label>
            <div className="flex items-center gap-2 ">
              <input
                onChange={handleUpdatePhoto}
                type="text"
                name="photo"
                value={updatePhoto}
                className="input input-bordered flex-1  rounded-full"
                required
              />
              <button className="cursor-pointer btn  p-2 rounded-full">
                {photoSaving ? (
                  <span className="loading loading-spinner p-4 loading-sm"></span>
                ) : (
                  <IoSaveOutline size={30}></IoSaveOutline>
                )}
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
                onChange={handleUpdateName}
                value={updateName}
                className="input input-bordered flex-1  rounded-full"
                required
              />
              <button className="cursor-pointer btn  p-2 rounded-full">
                {nameSaving ? (
                  <span className="loading loading-spinner p-4 loading-sm"></span>
                ) : (
                  <IoSaveOutline size={30}></IoSaveOutline>
                )}
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
