const FeaturedSection = () => {
    return (
        <div className="pb-40">
            <h1 className="text-3xl font-bold text-center">Featured Products</h1>
            <p className="text-center font-medium max-w-4xl mx-auto text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque iusto cumque aut facere consectetur dolore quaerat, dignissimos repudiandae quisquam recusandae.</p>

            <div className="mt-24">
                <div className="grid grid-cols-3 gap-6">
                    <div className="transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-105">
                        <div className="card bg-base-100 shadow-xl">
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Shoes!
                                    <div className="badge badge-secondary">NEW</div>
                                </h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturedSection;