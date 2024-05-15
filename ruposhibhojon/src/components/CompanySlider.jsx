import Marquee from "react-fast-marquee";
const CompanySlider = () => {
    return (
        <div>
            <h1 className="text-2xl lg:text-4xl font-bold text-center mb-12 lg:mb-24">Our Proud Partners</h1>
            <Marquee>
                <div className="flex gap-16 items-center grayscale">
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/MgKLbFB/pran.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/YWZSCqP/kacchi-bhai.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/hgRbrhD/mojo.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/89dcC9g/pathao.png" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/wMxQMKD/Shezan.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/6rjCfn9/ruchi.gif" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/VNmG1PJ/kacchi-bhai.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/RQfXzCq/sultans.webp" alt="" />
                    </div>
                    <div className="h-16">
                        <img className="h-full" src="https://i.ibb.co/C86nSX5/foodpanda.png" alt="" />
                    </div>
                </div>

            </Marquee>
        </div>
    );
};

export default CompanySlider;