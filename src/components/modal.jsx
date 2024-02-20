import { motion, AnimatePresence } from "framer-motion";
import React from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(true);
    return (
        <>
            <AnimatePresence>
                {showModal ? (
                    <>
                        <motion.div initial={{ opacity: 0.6 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                                <div className="relative w-auto max-w-3xl mx-auto my-6">
                                    <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                                        <div className="relative p-2 bg-blue-200 rounded-lg">
                                            <img src="11.jpg" className="rounded-lg " />
                                            <button
                                            onClick={()=>setShowModal(false)}
                                            className="absolute flex items-center justify-center w-10 h-10 text-xl transition-all duration-100 bg-white rounded-full shadow-xl -top-5 -right-5 hover:scale-105">✕</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
                    </>
                ) : null}
            </AnimatePresence>
        </>
    );
}
