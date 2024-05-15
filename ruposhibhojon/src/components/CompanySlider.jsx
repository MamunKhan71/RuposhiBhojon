import Marquee from "react-fast-marquee";
const CompanySlider = () => {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">Our Proud Partners</h1>
            <Marquee>
                <div className="flex gap-16 items-center grayscale">
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/pran.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/bdfood.png" alt="" />
                    </div>

                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/mojo.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/foodpanda.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/pathao.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/Shezan.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/ruchi.gif" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/kacchi bhai.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="/src/assets/logo/sultans.webp" alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default CompanySlider;