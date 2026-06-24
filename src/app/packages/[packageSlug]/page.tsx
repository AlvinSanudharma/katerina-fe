import { getPackageDetails } from "@/components/Packages/actions";
import { TPackage } from "@/components/Packages/types";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import ComposeHeader from "./ComposeHeader";

type Request = {
  params: {
    packageSlug: string;
  };
};

export async function generateMetadata(
  { params }: Request,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const cateringPackage: { data: TPackage } = await getPackageDetails(
    params.packageSlug,
  );

  return {
    title: `${cateringPackage.data.name}`,
    description: cateringPackage.data.about,
  };
}

async function PackageDetailsPage({ params }: Request) {
  const cateringPackage: { data: TPackage } = await getPackageDetails(
    params.packageSlug,
  );
  return (
    <>
      <ComposeHeader />
    </>
  );
}

export default PackageDetailsPage;
