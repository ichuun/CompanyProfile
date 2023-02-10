import React from "react";
import Products from '../assets/product.png'

const Product = () => {
    return (
        <section className="h-[750px] w-full lg:h-[500px]" id='product'>
            <div className="container mx-auto flex flex-col lg:flex-row ">
                <div className="mb-[50px] lg:basis-1/2 lg:gap-x-{20px}">
                    <h1 className="text-center mb-[20px] text-2xl font-bold">Our Product</h1>
                    <p className="">Coconut Charcoal Briquette is a briquette charcoal with coconut shell as the raw material.
                        One of the main functions of Coconut Charcoal Briquette is for sisha or hookah burner.
                        Moreover, people also use the lower grade for barbecue purposes.</p>
                    <br></br>
                    <p className="text-lg text-center mb-[10px]">Product Spesification</p>
                    <div className="flex justify-left">
                        <ul>
                            <li>Moisture: Max 6%</li>
                            <li>Fix Carbon: 75% - 78%</li>
                            <li>Calorie: 7500-8000</li>
                            <li>Ash Content: 1.8% - 2.5%</li>
                            <li>Volatile Matter: Max 15%</li>
                            <li>Burn Time: up tp 2.5 hours</li>
                        </ul>
                    </div>
                </div>
                <div className="lg: lg:basis-1/2">
                    <img src={Products} alt='' />
                </div>

            </div>
        </section>
    )
}

export default Product;