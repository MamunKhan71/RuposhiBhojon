import Lottie from "lottie-react";
import firstStep from '../assets/lottie/give.json'
import secondStep from '../assets/lottie/helpPlanet.json'
import thirdStep from '../assets/lottie/helpPoor.json'
const WhyRuposhi = () => {
    return (
        <div className="space-y-24">
            <h1 className="text-center font-bold text-3xl">Why RuposhiBhojon?</h1>
            <div className="flex gap-4 items-center justify-between">
                <div className="text-center">
                    <Lottie className="h-48" animationData={firstStep} loop={true} />
                    <h1 className="text-2xl font-bold">Give and get items</h1>
                    <p className="max-w-96">Avoid buying new by sharing and finding items locally.
                    </p>
                </div>
                <div className="text-center">
                    <Lottie className="h-48" animationData={secondStep} loop={true} />
                    <h1 className="text-2xl font-bold">Help the planet</h1>
                    <p className="max-w-96">Give your items a second life. Less waste = less damage to the planet.
                    </p>
                </div>
                <div className="text-center">
                    <Lottie className="h-48" animationData={thirdStep} loop={true} />
                    <h1 className="text-2xl font-bold">Help each other</h1>
                    <p className="max-w-96">Build community and save money by sharing with fellow locals.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default WhyRuposhi;