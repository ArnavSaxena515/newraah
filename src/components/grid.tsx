import React from 'react';
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {gridItems} from "@/data";

const Grid = () => {
    return (<section id="about">
        <BentoGrid className="pb-45">
            {gridItems.map((item) => {
                return <BentoGridItem key={item.id}
                                      id={item.id}
                                      title={item.title}
                                      description={item.description}
                                      className={item.className}
                                      img={item.img}
                                      imgClassName={item.imgClassName}
                                      titleClassName={item.titleClassName}
                                      spareImg={item.spareImg}/>;
            })}
        </BentoGrid>
    </section>)
}

export default Grid;