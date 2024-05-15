import { Bs1CircleFill, Bs2CircleFill , Bs3CircleFill,Bs4CircleFill   } from "react-icons/bs";
const WorkSteps = () => {
    return (
        <div className="lg:flex justify-between items-center">
            <div className="flex-1 lg:flex items-center justify-center w-full">
                <img className="h-full lg:h-[700px] w-full lg:w-3/4 object-cover rounded-xl" src="/src/assets/pexels-ivan-samkov-7213605.jpg" alt="" />
            </div>

            <div className="w-full flex-1">
                <div className="w-full flex items-center justify-start">
                    <ol className=" overflow-hidden space-y-8">
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
                            <div className="flex items-center justify-center gap-8 w-full">
                                <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-xl relative z-10 border border-gray-50 w-full">
                                    <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                                        <span className="text-primary p-3">
                                            <Bs1CircleFill className="text-4xl"/>
                                        </span>
                                    </div>
                                    <div className=" flex items-start rounded-md justify-center flex-col">
                                        <h6 className="text-2xl font-bold text-black mb-0.5">
                                            Prepare
                                        </h6>
                                        <p className="text-sm font-normal text-gray-500">
                                            Staff set aside food for an Olio volunteer to collect.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
                            <div className="flex items-center justify-center gap-8 w-full">
                                <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-xl relative z-10 border border-gray-50 w-full">
                                    <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                                        <span className="text-primary p-3">
                                        <Bs2CircleFill className="text-4xl"/>
                                        </span>
                                    </div>
                                    <div className=" flex items-start rounded-md justify-center flex-col">
                                        <h6 className="text-2xl font-bold text-black mb-0.5">
                                        Collect
                                        </h6>
                                        <p className="text-sm font-normal text-gray-500">
                                        An Olio volunteer collects your food and lists it on the Olio app, for people nearby to request.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-gray-200 after:inline-block after:absolute after:-bottom-12 after:left-1/2">
                            <div className="flex items-center justify-center gap-8 w-full ">
                                <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-xl relative z-10 border border-gray-50 w-full">
                                    <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                                        <span className="text-primary p-3">
                                        <Bs3CircleFill className="text-4xl"/>
                                        </span>
                                    </div>
                                    <div className=" flex items-start rounded-md justify-center flex-col">
                                        <h6 className="text-2xl font-bold text-black mb-0.5">
                                        Share
                                        </h6>
                                        <p className="text-sm font-normal text-gray-500">
                                        Locals in the area collect food directly from your Olio volunteer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="relative flex-1 ">
                            <div className="flex items-center justify-center gap-8 w-full ">
                                <div className="flex items-center gap-6 bg-gray-50 p-6 rounded-xl relative z-10 border border-gray-50 w-full">
                                    <div className="rounded-lg bg-gray-200 flex items-center justify-center">
                                        <span className="text-primary p-3">
                                        <Bs4CircleFill className="text-4xl"/>
                                        </span>
                                    </div>
                                    <div className=" flex items-start rounded-md justify-center flex-col ">
                                        <h6 className="text-2xl font-bold text-black mb-0.5">
                                        Report
                                        </h6>
                                        <p className="text-sm font-normal text-gray-500">We share impact stats and real-life testimonials from people your food has helped.</p>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ol>
                </div>

            </div>


        </div>
    );
};

export default WorkSteps;