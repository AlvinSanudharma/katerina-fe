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
import { ContentBonus } from "@/components/Bonuses";

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
    </>
  );
}

export default PackageDetailsPage;
