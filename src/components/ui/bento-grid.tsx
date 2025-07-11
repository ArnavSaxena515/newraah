import {cn} from "@/lib/utils";
import {
    BackgroundGradientAnimation
} from "@/components/ui/background-gradient-animation";
import {GridGlobe} from "@/components/ui/grid-globe";
import React from "react";


export const BentoGrid = ({
                              className, children,
                          }: {
    className?: string; children?: React.ReactNode;
}) => {
    return (<div
        className={cn("grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className,)}
    >
        {children}
    </div>);
};

export const BentoGridItem = ({
                                  className,
                                  id,
                                  title,
                                  description,
                                  img,
                                  imgClassName,
                                  titleClassName,
                                  spareImg,
                              }: {
    className?: string;
    id: number;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {


    return (<div
        className={cn("row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4", className)}
        style={{
            background: "rgb(4,7,29)",
            backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
    >
        {/* add img divs */}
        <div
            className={`${id === 7 && "flex" +
            " justify-center"} h-full`}>
            <div className="w-full h-full absolute">
                {img && (<img
                    src={img}
                    alt={img}
                    className={cn(imgClassName, "object-cover object-center ")}
                />)}
            </div>
            <div
                className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"} `}
            >
                {spareImg && (<img
                    src={spareImg}
                    alt={spareImg}
                    width={220}
                    className="object-cover object-center w-full h-full"
                />)}
            </div>

            {id === 7 && (<BackgroundGradientAnimation>
                <div
                    className="absolute z-50 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
            </BackgroundGradientAnimation>)}

            <div
                className={cn(titleClassName, " absolute group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}
            >
                <div
                    className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                    {description}
                </div>
                {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
                {/* remove mb-2 mt-2 */}
                <div
                    className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                >
                    {title}
                </div>

            </div>
            {id === 2 && <GridGlobe/>}

            {/*{id === 3 && <div*/}
            {/*    className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">*/}

            {/*    <div*/}
            {/*        className="flex flex-col gap-2 lg:gap-8">*/}
            {/*        {['React.js', 'Next.js', 'Typescript'].map((item) => (*/}
            {/*            <span key={item}*/}
            {/*                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">*/}
            {/*                {item}*/}
            {/*            </span>*/}

            {/*        ))}*/}

            {/*    </div>*/}

            {/*    <div*/}
            {/*        className="flex flex-col gap-2 lg:gap-8">*/}
            {/*        {['Flutter', 'Node.js', 'MongoDB'].map((item) => (*/}
            {/*            <span key={item}*/}
            {/*                  className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">*/}
            {/*                {item}*/}
            {/*            </span>*/}

            {/*        ))}*/}
            {/*    </div>*/}

            {/*</div>}*/}
        </div>
    </div>);
};