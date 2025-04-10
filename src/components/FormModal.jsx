"use client"

const FormModal = ({show,closeModal}) => {
    if (!show) return null;

    return (
        <>
            {/* Modal */}
            {show && (
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center overflow-y-auto overflow-x-hidden h-full backdrop-blur-sm"
                >
                    <div className="relative p-4 w-full max-w-md">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Sign in to our platform
                                </h3>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            {/* Modal body */}
                            <div className="p-4 md:p-5">
                                <form className="space-y-4" action="#">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Your password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            required
                                        />
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-purple-600"
                                                />
                                            </div>
                                            <label
                                                htmlFor="remember"
                                                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-sm text-purple-700 hover:underline dark:text-purple-500"
                                        >
                                            Lost Password?
                                        </a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                                    >
                                        Login to your account
                                    </button>
                                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                        Not registered?{" "}
                                        <a
                                            href="#"
                                            className="text-purple-700 hover:underline dark:text-purple-500"
                                        >
                                            Create account
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                )} 
        </>
    );
};

export default FormModal;
