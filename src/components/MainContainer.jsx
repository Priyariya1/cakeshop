import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";
import { Carousel } from "react-responsive-carousel";

const MainContainer = () => {
    const [{ foodItems, cartShow }, dispatch] = useStateValue();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {}, [scrollValue, cartShow]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-auto ">
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={true} >
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="1.webp" />
                    
                </div>
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="2.webp" />
                    
                </div>
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="3.webp" />
                    
                </div>
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="4.jpg" />
                    
                </div>
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="5.webp" />
                    
                </div>
                <div>
                    <img className="max-h-[80vh] max-w-xl" src="6.avif" />
                    
                </div>
            </Carousel>
            <HomeContainer />

            <section className="w-full my-6">
                <div className="flex items-center justify-between w-full">
                    <p className="relative text-2xl font-semibold capitalize transition-all duration-100 ease-in-out text-headingColor before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600">
                        Our fresh & healthy Cakes
                    </p>

                    <div className="items-center hidden gap-3 md:flex">
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="flex items-center justify-center w-8 h-8 bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
                            onClick={() => setScrollValue(-200)}
                        >
                            <MdChevronLeft className="text-lg text-white" />
                        </motion.div>
                        <motion.div
                            whileTap={{ scale: 0.75 }}
                            className="flex items-center justify-center w-8 h-8 transition-all duration-100 ease-in-out bg-orange-300 rounded-lg cursor-pointer hover:bg-orange-500 hover:shadow-lg"
                            onClick={() => setScrollValue(200)}
                        >
                            <MdChevronRight className="text-lg text-white" />
                        </motion.div>
                    </div>
                </div>
                <RowContainer
                    scrollValue={scrollValue}
                    flag={true}
                    data={foodItems?.filter((n) => n.category === "Butter Cake")}
                />
            </section>

            <MenuContainer />

            {cartShow && <CartContainer />}
        </div>
    );
};

export default MainContainer;
