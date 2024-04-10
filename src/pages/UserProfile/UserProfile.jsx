import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { MdOutlineModeEdit } from "react-icons/md";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="avatar mx-auto mt-6">
          <div className="w-44 rounded-full">
            <img src={user.photoURL} alt={user.displayName} />
          </div>
        </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user.displayName} </h2>
          <p>{user.email}</p>
          <div className="card-actions px-4 py-2 rounded-full cursor-pointer mt-4 outline outline-1 outline-neutral-200 hover:bg-neutral-100 duration-300">
            <Link className=" flex items-center gap-2" to="/updateprofile">
              Update Profile<MdOutlineModeEdit></MdOutlineModeEdit>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
