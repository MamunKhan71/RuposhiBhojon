import { Helmet } from "react-helmet";

const Notifications = () => {
    return (
        <div className="md:p-4">
            <Helmet>
                <title>RuposhiBhojon | Notification Settings</title>
            </Helmet>
            <div className="w-full mt-8 sm:rounded-lg space-y-4">
                <h2 className="text-2xl text-center font-bold sm:text-xl">Notifications</h2>
                <hr />
                <div className="flex flex-col items-center justify-center">
                    <div
                        id="notification-card-1"
                        className="mt-3 rounded-md flex gap-3 justify-between p-3 "
                    >
                        <img
                            src="/src/assets/favicon.png"
                            alt="notification user avatar"
                            className="w-12 h-12"
                        />
                        <div id="notification-card-details" className="ml-2 space-x-1 text-sm flex-auto">
                            <a href="#" className="font-bold hover:text-blue">
                              Mr. Jhankar Mahbub
                            </a>
                            <span>donated to your recent post</span>
                            <a
                                href="#"
                                className="font-bold cursor-pointer hover:text-blue"
                            >
                                Fresh Cheese Cake with salad!
                            </a>
                        </div>
                    </div>
                    <div
                        id="notification-card-1"
                        className="mt-3 rounded-md flex gap-3 justify-between p-3 "
                    >
                        <img
                            src="/src/assets/favicon.png"
                            alt="notification user avatar"
                            className="w-12 h-12"
                        />
                        <div id="notification-card-details" className="ml-2 space-x-1 text-sm flex-auto">
                            <a href="#" className="font-bold hover:text-blue">
                               Md. Mamun
                            </a>
                            <span>donated to your recent post</span>
                            <a
                                href="#"
                                className="font-bold cursor-pointer hover:text-blue"
                            >
                                Chicken Vegetable Pasta with Pran Tomato Sauce
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Notifications;