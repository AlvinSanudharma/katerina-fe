import React from "react";
import { getAllCategories } from "@/components/Categories/actions";
import { TCategory } from "../types";
import { TCity } from "@/components/Cities/types";
import { getAllCities } from "@/components/Cities/actions/actions";
import FormFilterCategories from "./Form";

type Props = {
  categorySlug: string;
  citySlug: string;
};

async function ModalFilterCategories({ categorySlug, citySlug }: Props) {
  const { data: categories }: { data: TCategory[] } = await getAllCategories();
  const { data: cities }: { data: TCity[] } = await getAllCities();

  return (
    <FormFilterCategories
      categories={categories}
      cities={cities}
      categorySlug={categorySlug}
      citySlug={citySlug}
    />
  );
}

export default ModalFilterCategories;
