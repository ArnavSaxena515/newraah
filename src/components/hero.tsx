"use client"
import React, {useEffect} from "react";
import {Spotlight} from "@/components/ui/spotlight";
import {
    TextGenerateEffect
} from "@/components/ui/text-generate-effect";
// import MagicButton from "@/components/ui/magic-button";
// import {FaLocationArrow} from "react-icons/fa6";
import {
    DotBackground
} from "@/components/ui/dot_background";
import MagicButton from "@/components/ui/magic-button";
import {FaRocket} from "react-icons/fa6";
import WaitlistForm from "@/components/waitlistform";
import Navbar from "@/components/navbar";
// import NewraahSvgComponent
//     from "@/components/newraah_svg_component";
// import Image from "next/image";
// import  NewraahIcon from '../../public/newraah_icon.svg';
// import SvgComponent from "../../public/


const Hero = () => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [isVisible, setIsVisible] = React.useState(false);
    const dialogRef = React.useRef<HTMLDialogElement>(null);

    const open = () => {
        setIsOpen(true);
    };

    const close = () => {
        setIsVisible(false);
        setTimeout(() => {
            setIsOpen(false);
            dialogRef.current?.close();
        }, 300); // match animation
    };

    useEffect(() => {
        if (isOpen && dialogRef.current) {
            dialogRef.current.showModal();
            setTimeout(() => setIsVisible(true), 20); // start animation
        }
    }, [isOpen]);


    return (<div className="pb-0 pt-15">
        <div className="overflow-hidden">
            <div
                className="relative w-full flex items-center justify-center">
                <Navbar />
            </div>
            <Spotlight
                className="top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"/>

            <Spotlight
                className="-top-10 left-full transform -translate-x-1/2 h-[80vh] w-[50vh]"
                fill="purple"/>

            <Spotlight
                className="-top-28 left-full md:left-1/3 lg:left-80 transform -translate-x-1/2 md:translate-x-0 h-[80vh] w-[50vh]"
                fill="blue"/>
        </div>


        <div>
            <DotBackground/>
        </div>


        <div className="flex justify-center relative z-10">

            <div
                className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw]  flex flex-col items-center justify-center ">


                <div
                    className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                    {/*<NewraahSvgComponent/>*/}
                    <h1 className="uppercase text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-blue-100">
                        Newraah
                    </h1>
                </div>

                <TextGenerateEffect words={"Your" +
                    " Swiss Army Knife For Job" +
                    " Hunting"}
                                    className="text-center md:text-5xl lg:text-6xl"/>
                <div
                    className="md:text-2xl lg:text-2xl text-center text-gray-400 lg:mb-0 mb-7">
                    NewRaah helps you build standout
                    resumes, reach the right people, and
                    track every job application — all in one
                    place.
                </div>

                <MagicButton icon={<FaRocket/>}
                             handleClick={open}
                             title={"Join Our" +
                                 " Waitlist"}
                             position={"right"}
                             otherClasses={"m"}/>

                {isOpen && (
                    <dialog
                        ref={dialogRef}
                        onClick={(e) => e.target === dialogRef.current && close()}
                        className="fixed top-0 left-0 w-screen h-screen bg-transparent p-0 z-50 border-none open:block"
                    >
                        <div
                            className={`absolute top-1/2 left-1/2 w-full max-w-md transform 
              -translate-x-1/2 -translate-y-1/2 
              transition-all duration-300 ease-out
              ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              bg-gray-950 rounded-lg shadow-2xl p-6`}
                        >
                            <WaitlistForm/>
                            <button
                                onClick={close}
                                className="mt-4 text-sm text-gray-500 underline"
                            >
                                Close
                            </button>
                        </div>
                    </dialog>
                )}
                <br/>
            </div>

        </div>

    </div>)
}

export default Hero;