import { CiLogout } from "react-icons/ci";
import { Link, Outlet } from "react-router-dom";
const Profile = () => {
    return (
        <div>
            <div className="bg-primary opacity-5 w-1/2 h-[600px] mx-auto rounded-xl blur-3xl absolute bottom-24 -z-10 left-1/2 -translate-x-1/2">

            </div>
            <div className="flex items-center justify-center w-full">
                <div className="backdrop-blur-3xl w-full flex justify-center gap-5 px-3 md:flex-row">
                    <aside className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
                        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
                            <h2 className="pl-3 mb-4 text-2xl font-semibold">Settings</h2>
                            <Link to={`profile-settings`}
                                className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full"
                            >
                                Profile Settings
                            </Link>
                            <Link
                                to={'account-settings'}
                                className="flex items-center px-3 py-2.5 font-semibold  hover:text-indigo-900 hover:border hover:rounded-full"
                            >
                                Account Settings
                            </Link>
                            <Link to={`notifications`}
                                className="flex items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
                            >
                                Notifications
                            </Link>
                            <a
                                className="flex gap-2 items-center px-3 py-2.5 font-semibold hover:text-indigo-900 hover:border hover:rounded-full  "
                            >
                               <CiLogout /> Logout 
                            </a>
                        </div>
                    </aside>
                    <div className="w-full py-1 basis-2/5 flex items-center justify-center">
                       <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;