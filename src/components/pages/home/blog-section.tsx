"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import blogPosts from "@/data/blog-data";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string; 
  category: string;
  image: string;
  link: string;
}

export default function BlogSection() {


  return (
    <section className="py-20 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-24">
        {/* Header */}
        <div className="text-center lg:mb-16 mb-8">
          <h2 className="text-3xl md:text-[60px] font-bold font-inter">
            The Latest
          </h2>
        </div>

        {/* Carousel with External Navigation */}
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            {/* Left Arrow - Responsive positioning */}
            <CarouselPrevious className="absolute lg:left-[-60px] left-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 hover:bg-transparent hover:pr-2 z-10" />

            {/* Right Arrow - Responsive positioning */}
            <CarouselNext className="absolute lg:right-[-60px] right-0 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 hover:bg-transparent hover:pl-2 z-10" />

            <CarouselContent className="-ml-6 select-none">
              {blogPosts.map((post) => (
                <CarouselItem
                  key={post.id}
                  className="pl-6 md:basis-1/3"
                >
                  <div className="h-full flex flex-col md:justify-between gap-3 py-3 px-4">
                    {/* Category Label on Top */}
                    <div className="relative">
                      <p className="px-3  text-[18px] lg:text-[26px] lg:font-medium absolute top-2 left-2 bg-primary/80 text-background rounded-lg w-fit ">
                        {post.category}
                      </p>
                      

                      {/* Image Container */}
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="w-full object-cover aspect-[4/3] rounded-[12px]"
                        width={500}
                        height={500}
                      />

                      <h3 className="pt-3 leading-[130%] font-medium text-[20px]  group-hover:text-primary transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="w-full mx-auto pt-2">
                      <Link
                        href="#"
                        className="w-full border-3 capitalize border-primary flex items-center justify-center mx-auto rounded-full px-4 py-1 text-center font-medium font-inter hover:cursor-[icons/arrow.svg]  gap-2 text-primary   hover:bg-primary hover:text-background transition-all duration-300 group/link"
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
