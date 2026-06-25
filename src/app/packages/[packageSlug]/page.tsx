import { getPackageDetails } from "@/components/Packages/actions";
import { TPackageDetails } from "@/components/Packages/types";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import ComposeHeader from "./ComposeHeader";
import Slider from "@/components/Slider";
import Image from "next/image";

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
      </section>
    </>
  );
}

export default PackageDetailsPage;
