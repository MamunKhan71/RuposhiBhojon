const Subscribe = () => {
    return (
        <>
            {/* Subscribe */}
            <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-[url('/src/assets/background.avif')] bg-cover">
                <div className="max-w-xl text-center mx-auto">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold">
                            Sign up to our newsletter
                        </h2>
                        <p>Get back to us very quickly!</p>
                    </div>
                    <form>
                        <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <div className="w-full">
                                <label htmlFor="hero-input" className="sr-only">
                                    Search
                                </label>
                                <input
                                    type="text"
                                    id="hero-input"
                                    name="hero-input"
                                    className="py-3 px-4 block w-full rounded-lg text-sm bg-base-200"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <a
                                className="w-full sm:w-auto whitespace-nowrap py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-primary text-white hover:bg-black disabled:opacity-50 disabled:pointer-events-none"
                                href="#"
                            >
                                Subscribe
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            {/* End Subscribe */}
        </>

    );
};

export default Subscribe;