import Hero from "@/components/hero";
// import {FaHouse} from "react-icons/fa6";
// import {FaContao, FaInfo} from "react-icons/fa";
import {
    FeaturesCarousel
} from "@/components/ui/features_carousel";
import React from "react";
import Footer from "@/components/footer";

// const navItems = [
//     {
//         name: "Home",
//         link: "/",
//         icon: <FaHouse/>,
//     },
//     {
//         name: "About",
//         link: "/about",
//         icon: <FaInfo/>,
//     },
//     {
//         name: "Contact",
//         link: "/contact",
//         icon: <FaContao/>,
//     },
// ];

export default function Home() {
    return (
        <main
            className="bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                {/*<FloatingNav navItems={navItems}/>*/}
                <Hero/>
                <section id="features">
                    <FeaturesCarousel/>
                </section>


            </div>
            <p className="text-sm text-gray-400 mt-2 italic">
                Built with ❤️ by a solo founder who
                knows what it&apos;s like to get ignored by
                recruiters.
                This is for every job seeker tired of
                shouting into the void.
            </p>
            <Footer/>
        </main>

    );
}

