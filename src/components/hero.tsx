import React from "react";
import {Spotlight} from "@/components/ui/spotlight";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
// import MagicButton from "@/components/ui/magic-button";
// import {FaLocationArrow} from "react-icons/fa6";
import {DotBackground} from "@/components/ui/dot_background";

const Hero = () => {
    return (<div className="pb-0 pt-15">
        <div className="overflow-hidden">
            <Spotlight className="top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>

            <Spotlight className="-top-10 left-full transform -translate-x-1/2 h-[80vh] w-[50vh]" fill="purple"/>

            <Spotlight
                className="-top-28 left-full md:left-1/3 lg:left-80 transform -translate-x-1/2 md:translate-x-0 h-[80vh] w-[50vh]"
                fill="blue"/>
        </div>


        <div>
            <DotBackground/>
        </div>

        <div className="flex justify-center relative z-10">
            <div className="max-w-[89vh] md:max-w-2xl lg:max-w-[60vw]  flex flex-col items-center justify-center ">
                <h1 className="uppercase  lg:text-8xl text-6xl text-center  text-blue-100 ">
                Newraah
                    </h1>
                    <TextGenerateEffect words={"Your" +
                        " Swiss Army Knife For Job" +
                        " Hunting"} className="text-center md:text-5xl lg:text-6xl"/>
                {/*//todo create email signup*/}
                    {/*<a href="#about">*/}
                    {/*    <MagicButton title={"Show my work"} icon={<FaLocationArrow/>} position={"right"} otherClasses={""} />*/}
                    {/*</a>*/}
                </div>

            </div>

        </div>)
}

export default Hero;