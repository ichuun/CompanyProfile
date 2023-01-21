import React from "react";

const Hero = () => {
    return(
        <section className="bg-hero h-[600px] w-full flex justify-center">
            <div className="absolute pt-[250px] z-20 mx-auto container items-center text-center">
                <h1 className="text-6xl text-white font-semibold mb-[20px]">TRUSTED BRIQUETTES SUPPLIER</h1>
            </div>
            <div className="bg-black/60 absolute w-full h-[600px]"></div>
        </section>
    )
}

export default Hero;