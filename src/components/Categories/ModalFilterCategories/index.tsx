import React from "react";
import { getAllCategories } from "@/components/Categories/actions";
import { TCategory } from "../types";
import { TCity } from "@/components/Cities/types";
import { getAllCities } from "@/components/Cities/actions/actions";
import FormFilterCategories from "./Form";

type Props = {
  categorySlug: string;
};

async function ModalFilterCategories({ categorySlug }: Props) {
  const { data: categories }: { data: TCategory[] } = await getAllCategories();
  const { data: cities }: { data: TCity[] } = await getAllCities();

  return (
    <FormFilterCategories
      categories={categories}
      cities={cities}
      categorySlug={categorySlug}
    />
  );
}

export default ModalFilterCategories;
