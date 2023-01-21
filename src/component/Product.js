import React from "react";
import Products from '../assets/product.png'

const Product = () => {
    return(
        <section className="h-[700px] w-full">
            <div className="container mx-auto flex flex-col lg:flex-row ">
                <div className="mb-[50px] lg:basis-1/2 lg:gap-x-{20px}">
                    <h1 className="text-center mb-[20px] text-2xl">Our Product</h1>
                    <p className="text-lg">Coconut Charcoal Briquette is a briquette charcoal with coconut shell as the raw material. 
                        One of the main functions of Coconut Charcoal Briquette is for sisha or hookah burner. 
                        Moreover, people also use the lower grade for barbecue purposes.</p>
                    <br></br>
                    <p>There are many benefits to use coconut charcoal compare to other type of charcoal. 
                        Firstly, coconut charcoal briquette have relatively higher burning point and longer burning time compare to the other type of charcoal. 
                        Furthermore, it produces less smokes and natural scent which is a best choice for your sisha/hookah companion. 
                        Moreover, you can also use coconut charcoal briquette to cook your food, such as barbeque. Because it has higher burning point, 
                        thus it will not easily make your food become over burnt. Due to these tremendous benefits compare to other type of charcoal, the demand of coconut charcoal briquette is keep increasing over the years.</p>
                </div>
                <div className="lg: lg:basis-1/2">
                    <img src={Products} alt='' />
                </div>

            </div>
        </section>
    )
}

export default Product;