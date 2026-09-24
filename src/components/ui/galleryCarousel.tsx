"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { urlFor } from "@/sanity/lib/image";
import type { GalleryAlbum } from "@/sanity/lib/queries";

type GalleryCarouselProps = {
  albums: GalleryAlbum[];
};

export function GalleryCarousel({ albums }: GalleryCarouselProps) {
  const autoplay = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );

  const slides = albums.flatMap((album) =>
    album.images.map((image) => ({
      key: `${album._id}-${image._key}`,
      image,
      alt: image.alt || album.title,
    })),
  );

  return (
    <Carousel
      opts={{ loop: true, align: "center" }}
      plugins={[autoplay.current]}
    >
      <CarouselContent>
        {slides.map(({ key, image, alt }) => (
          <CarouselItem key={key} className='basis-[min(55rem,70%)]'>
            <div className='relative aspect-[16/10] w-full overflow-hidden rounded-round'>
              <Image
                src={urlFor(image).width(1200).url()}
                alt={alt}
                fill
                sizes='80vw'
                className='object-cover'
                draggable={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
