import { getCategoryDetail } from "@/components/Categories/actions";
import { TCategory } from "@/components/Categories/types";
import React from "react";
import ComposeHeader from "./ComposeHeader";

type Request = {
  params: {
    categorySlug: string;
  };
};

async function PageCategoriesDetail({ params }: Request) {
  const { data }: { data: TCategory } = await getCategoryDetail(
    params.categorySlug
  );

  return (
    <>
      <ComposeHeader />
    </>
  );
}

export default PageCategoriesDetail;
