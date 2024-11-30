import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image";
import Carousel1 from "/lib/assets/carousel/1.jpg"; // Ensure correct import path
import Carousel2 from "/lib/assets/carousel/2.jpg"; // Ensure correct import path
import Carousel3 from "/lib/assets/carousel/3.jpg"; // Ensure correct import path
import Carousel4 from "/lib/assets/carousel/4.jpg"; // Ensure correct import path
import Carousel5 from "/lib/assets/carousel/5.jpg"; // Ensure correct import path
import Carousel6 from "/lib/assets/carousel/6.jpg"; // Ensure correct import path
import Carousel7 from "/lib/assets/carousel/7.jpg"; // Ensure correct import path

export function CarouselImages() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: false })
    )
    const images = [
        Carousel1,
        Carousel2,
        Carousel3,
        Carousel4,
        Carousel5,
        Carousel6,
        Carousel7,
    ];
    return (
        <Carousel
            plugins={[plugin.current]}
            opts={{
                align: "start",
            }}
            className="w-full max-w-sm overflow-hidden mx-auto p-4"
        >
            <CarouselContent className="flex-nowrap gap-4">
                {images.map((imageSrc, index) => (
                    <CarouselItem
                        key={index}
                        className="flex-shrink-0 w-full sm:w-[75%] md:w-[50%] lg:w-[33.33%] box-border"
                    >
                        <Card>
                            <CardContent className="flex items-center justify-center p-2">
                                <Image
                                    src={imageSrc} // Image source
                                    alt={`Carousel item ${index + 1}`} // Alt text
                                    width={500} // Desired width
                                    height={500} // Desired height
                                    className="rounded-md object-cover w-full h-auto" // Ensures responsiveness
                                    sizes="(max-width: 640px) 100vw, 
                         (max-width: 768px) 75vw, 
                         (max-width: 1024px) 50vw, 
                         33.33vw" // Responsive sizes for better optimization
                                    priority={index === 0} // Prioritize the first image
                                />
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

