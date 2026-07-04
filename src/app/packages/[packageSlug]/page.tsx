import { getPackageDetails } from "@/components/Packages/actions";
import { TPackageDetails } from "@/components/Packages/types";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import ComposeHeader from "./ComposeHeader";
import Slider from "@/components/Slider";
import Image from "next/image";
import Notes from "@/assets/image/notes.svg";
import People from "@/assets/image/people.svg";
import StarClashy from "@/assets/image/star-clashy.svg";
import PinPoint from "@/assets/image/pin-point.svg";
import Truck from "@/assets/image/truck.svg";
import BadgeCheckMark from "@/assets/image/badge-checkmark.svg";
import { ContentBonus } from "@/components/Bonuses";
import { ContentTestimonial } from "@/components/Testimonials";
import Link from "next/link";

type Request = {
  params: {
    packageSlug: string;
  };
};

export async function generateMetadata(
  { params }: Request,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const cateringPackage: { data: TPackageDetails } = await getPackageDetails(
    params.packageSlug,
  );

  return {
    title: `${cateringPackage.data.name}`,
    description: cateringPackage.data.about,
  };
}

async function PackageDetailsPage({ params }: Request) {
  const cateringPackage: { data: TPackageDetails } = await getPackageDetails(
    params.packageSlug,
  );

  const currentTier = cateringPackage.data.tiers.length
    ? cateringPackage.data.tiers.reduce((min, current) =>
        current.price < min.price ? current : min,
      )
    : null;

  return (
    <>
      <ComposeHeader />
      <section className="relative">
        <Slider
          spaceBetween={20}
          hasPagination
          swiperClassName="!h-[550px]"
          swiperSliderClassName="!w-full"
        >
          {cateringPackage.data.photos.map((item) => {
            return (
              <figure className="w-full h-full absolute" key={item.id}>
                <Image
                  fill
                  className="w-full h-full object-cover object-center"
                  src={`${process.env.HOST_API}/${item.photo}`}
                  alt={String(item.id)}
                  sizes="(max-width: 768px) 100vw"
                />
              </figure>
            );
          })}
        </Slider>
        <div className="flex left-0 right-0 gap-x-4 mx-4 bg-white shadow-[0px_12px_30px_0px_#07041517] p-4 -translate-y-1/2 rounded-3xl justify-between absolute top-full z-20">
          <span className="flex flex-col gap-y-3">
            <h1 className="text-xl font-bold">{cateringPackage.data.name}</h1>
            <span className="flex gap-x-3">
              <span className="flex gap-x-1">
                <span className="text-color2">
                  <Notes />
                </span>
                <span className="text-gray2">
                  {cateringPackage.data.category.name}
                </span>
              </span>

              <span className="flex gap-x-1">
                <span className="text-color2">
                  <People />
                </span>
                <span className="text-gray2">{currentTier?.quantity}</span>
              </span>
            </span>
          </span>
          <span className="bg-color1 flex flex-col items-center justify-center px-2 gap-y-2 rounded-2xl text-white">
            <StarClashy />

            <span className="">4.5/5</span>
          </span>
        </div>
      </section>
      <section className="relative z-10 mt-16">
        <h2 className="font-semibold px-4 mb-3">About Package</h2>
        <p className="px-4">{cateringPackage.data.about}</p>
      </section>

      <section className="relative z-10">
        <h2 className="font-semibold px-4 mb-3">All Bonuses For You</h2>
        <Slider
          spaceBetween={20}
          swiperClassName="!h-[153px] !px-4"
          swiperSliderClassName="!w-[190px]"
        >
          {cateringPackage.data.bonuses.map((bonus) => {
            return <ContentBonus data={bonus} key={bonus.id} />;
          })}
        </Slider>
      </section>

      <section className="relative z-10">
        <h2 className="font-semibold px-4 mb-3">Catering Details</h2>
        <div className="grid grid-cols-2 gap-3 px-4">
          <span className="flex gap-x-3">
            <span className="w-[52px] aspect-square rounded-full bg-color2 text-white items-center justify-center flex">
              <PinPoint />
            </span>
            <span className="flex flex-col">
              <span className="text-gray2">City</span>
              <span className="font-semibold">
                {cateringPackage.data.city.name}
              </span>
            </span>
          </span>

          <span className="flex gap-x-3">
            <span className="w-[52px] aspect-square rounded-full bg-color2 text-white items-center justify-center flex">
              <People />
            </span>
            <span className="flex flex-col">
              <span className="text-gray2">Portion</span>
              <span className="font-semibold">
                {currentTier?.quantity || 0} People
              </span>
            </span>
          </span>

          <span className="flex gap-x-3">
            <span className="w-[52px] aspect-square rounded-full bg-color2 text-white items-center justify-center flex">
              <Notes />
            </span>
            <span className="flex flex-col">
              <span className="text-gray2">Category</span>
              <span className="font-semibold">
                {cateringPackage.data.category.name}
              </span>
            </span>
          </span>

          <span className="flex gap-x-3">
            <span className="w-[52px] aspect-square rounded-full bg-color2 text-white items-center justify-center flex">
              {/* TODO: TRUCK */}
              <Truck />
            </span>
            <span className="flex flex-col">
              <span className="text-gray2">Delivery</span>
              <span className="font-semibold">Free 100%</span>
            </span>
          </span>
        </div>
      </section>
      <section className="relative">
        <h2 className="font-semibold mb-3 px-4">Testimonials</h2>
        <Slider
          spaceBetween={20}
          hasPagination
          swiperClassName="!h-[156px] !px-4"
          swiperSliderClassName="!w-[280px]"
        >
          {cateringPackage.data.testimonials.map((testimonial) => {
            return (
              <ContentTestimonial data={testimonial} key={testimonial.id} />
            );
          })}
        </Slider>
      </section>
      <section className="relative">
        <h2 className="font-semibold mb-3 px-4">Kitchen</h2>
        <span className="flex justify-between items-center gap-x-3 px-4">
          <figure className="w-14 aspect-square rounded-full overflow-hidden relative">
            <Image
              fill
              className="w-full h-full object-cover object-center"
              src={`${process.env.HOST_API}/${cateringPackage.data.kitchen.photo}`}
              alt={cateringPackage.data.kitchen.name}
              sizes="(max-width: 768px) 100vw"
            />
          </figure>
          <span className="flex flex-col">
            <span className="flex gap-x-2">
              <h3 className="font-semibold">
                {cateringPackage.data.kitchen.name}
              </h3>
              <span className="text-color3">
                <BadgeCheckMark />
              </span>
            </span>
            <span className="text-sm text-gray2">
              {" "}
              Sejak tahun {cateringPackage.data.kitchen.year}{" "}
            </span>
          </span>
          <span className="mx-auto"></span>
          <Link
            href=""
            className="bg-gray1 px-3 font-semibold text-sm py-1 flex rounded-full"
          >
            Profile
          </Link>
        </span>
      </section>
    </>
  );
}

export default PackageDetailsPage;
