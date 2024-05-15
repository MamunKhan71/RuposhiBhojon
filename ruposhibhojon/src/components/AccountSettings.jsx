import { GrConnect, GrLink  } from "react-icons/gr";
import { FaSquareGithub, FaSquareFacebook } from "react-icons/fa6";
import { Helmet } from "react-helmet";
const AccountSettings = () => {
    return (
        <div className="md:p-4 w-full">
            <Helmet>
                <title>RuposhiBhojon | Account Settings</title>
            </Helmet>
            <div className="w-full mt-8 sm:rounded-lg space-y-4">
                <h2 className="text-2xl text-center font-bold sm:text-xl">Account Settings</h2>
                <hr />
                <div className="w-full space-y-4">
                    <h1 className="font-bold">Social Contacts</h1>
                    <div className="flex justify-between items-center w-full">
                        <FaSquareFacebook className="text-5xl" />
                        <div>
                            <h1 className="font-semibold">Facebook</h1>
                            <p>https://fb.com/mkmamun111</p>
                        </div>
                        <button className="btn bg-primary btn-sm text-white"><GrLink />Connected</button>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center w-full">
                        <FaSquareGithub className="text-5xl" />
                        <div>
                            <h1 className="font-semibold">GitHub</h1>
                            <p>https://fb.com/mkmamun111</p>
                        </div>
                        <button className="btn bg-black text-white btn-sm"><GrConnect />Connect</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountSettings;