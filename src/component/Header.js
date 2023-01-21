import React from "react"
import { navigation } from "../data"


const Header = ()=> {
    return (
        <header className="fixed py-8 w-full z-50">
            <div className="container mx-auto">
                <div className="text-white bg-none flex justify-between items-center">
                    <div>
                        <h1 className="text-white">ChocoAgro</h1>
                    </div>
                    <div>
                        <ul className="flex gap-x-5 lg:gap-x-10">
                            {navigation.map((item, index)=>{
                                return(
                                    <li key={index}>
                                        <a className='hover:border-b' href=''>{item.name}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header