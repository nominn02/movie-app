import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { MovieCarouselItem } from "./MovieCarouselItem";

export const MovieCarousel = () => {
  return (
    <Carousel
      className=" relative"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <MovieCarouselItem />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent >
      <CarouselPrevious className="invisible lg:visible absolute left-10 to-50%" />
      <CarouselNext className="invisible lg:visible absolute right-10 to-50%" />
    </Carousel>
  );
};
