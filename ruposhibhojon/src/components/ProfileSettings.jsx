import { MdEditSquare } from "react-icons/md";

const ProfileSettings = () => {
    return (
        <div className="md:p-4">
            <div className="w-full mt-8 sm:rounded-lg space-y-4">
                <h2 className="text-2xl text-center font-bold sm:text-xl">Profile Settings</h2>
                <hr />
                <div className="flex flex-col items-start justify-start">
                    <div className="flex gap-4 items-center">
                        <img
                            className="object-cover w-28 h-28 p-1 rounded-xl ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                            alt="Bordered avatar"
                        />
                        <div>
                            <h1 className="text-2xl font-bold">Md. Mamun</h1>
                            <h1>01643091606</h1>
                        </div>
                    </div>
                    <div className="items-center border p-6 backdrop-blur-3xl sm:mt-14 rounded-xl">
                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="text-sm rounded-lg w-full p-2.5 bg-base-200"
                                    placeholder="Your name"
                                    defaultValue="Jane"
                                    required=""
                                />
                            </div>
                            <div className="w-full">
                                <label
                                    htmlFor="Photo Url"
                                    className="block mb-2 text-sm font-medium "
                                >
                                    Photo Url
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    className="text-sm rounded-lg w-full p-2.5 bg-base-200"
                                    placeholder="Photo Url"
                                    defaultValue="Ferguson"
                                    required=""
                                />
                            </div>
                        </div>
                        <div className="mb-2 sm:mb-6">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium "
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="text-sm rounded-lg w-full p-2.5 bg-base-200"
                                placeholder="your.email@mail.com"
                                required=""
                            />
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium "
                            >
                                Bio
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="block p-2.5 w-full text-sm bg-base-200"
                                placeholder="Write your bio here..."
                                defaultValue={""}
                            />
                        </div>
                        <div className="flex justify-end">
                            <a href="#_" className="rounded px-5 py-2.5 overflow-hidden group bg-primary relative hover:bg-gradient-to-r hover:from-primary hover:to-amber-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-primary transition-all ease-out duration-300 w-full text-center">
                                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                <span className="relative"><span className="inline-flex items-center gap-2 font-bold"><MdEditSquare />Update</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;