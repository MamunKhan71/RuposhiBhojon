import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useContext } from "react";
const PasswordReset = () => {
    const { sendResetEmail } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
    } = useForm()

    const handlePasswordReset = (data) => {
        const email = data.email
        console.log(email);
        Swal.fire({
            title: "Are you sure to reset your password?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    sendResetEmail(email)
                        .then(() => {
                            Swal.fire({
                                title: `Email sent, check your email`,
                            });
                        }).catch((error) => {
                            const errorCode = error.code;
                            Swal.fire({
                                title: errorCode,
                            });
                        });
                } catch (error) {
                    console.log(error);
                }
            } else if (result.isDenied) {
                Swal.fire("Email could not be sent", "", "info");
            }
        });
    }
    return (
        <div>
            <main id="content" role="main" className="w-full  max-w-md mx-auto p-6">
                <div className="mt-7 bg-white  rounded-xl shadow-lg border-2 border-indigo-300">
                    <div className="p-4 sm:p-7">
                        <div className="text-center">
                            <h1 className="block text-2xl font-bold dark:">
                                Forgot password?
                            </h1>
                            <p className="mt-2 text-sm text-gray-600 ">
                                Remember your password?
                                <Link to={'/login'}
                                    className="text-primary decoration-2 font-bold"
                                >
                                    Login here
                                </Link>
                            </p>
                        </div>
                        <div className="mt-5">
                            <form onSubmit={handleSubmit(handlePasswordReset)}>
                                <div className="grid gap-y-4">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-bold ml-1 mb-2"
                                        >
                                            Email address
                                        </label>
                                        <div className="relative">
                                            <input {...register('email')}
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-primary focus:ring-primary shadow-sm"
                                                required=""
                                                aria-describedby="email-error"
                                            />
                                        </div>
                                        <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                            Please include a valid email address so we can get back to you
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="py-3 text-white px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary"
                                    >
                                        Reset password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default PasswordReset;