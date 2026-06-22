"use client";

import { TCity } from "@/components/Cities/types";
import { TCategory } from "@/components/Categories/types";
import { useFormState } from "react-dom";
import { navigateFilterCategories } from "@/components/Categories/actions";

type Props = {
  categorySlug: string;
  categories: TCategory[];
  cities: TCity[];
};

function FormFilterCategories({ categorySlug, categories, cities }: Props) {
  const [, formAction] = useFormState(navigateFilterCategories, {
    message: "",
    field: "",
  });
  return (
    <form>
      <h6 className="text-xl font-semibold">Set Filter (2)</h6>
      <div className="flex flex-col gap-y-4">
        <h6 className="text-sm font-semibold">Category</h6>
        {categories.map((category) => {
          return (
            <label
              htmlFor={`${category.id}-${category.slug}`}
              className="flex gap-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="categories"
                id={`${category.id}-${category.slug}`}
                className="hidden peer"
              />
              <span className="radio p-1 rounded-full border border-color2 w-6 aspect-square peer-checked:[&>span]:opacity-100">
                <span className="aspect-square h-full block rounded-full opacity-0 bg-color2 transition-all duration-300"></span>
              </span>
              <span className="">{category.name}</span>
            </label>
          );
        })}
      </div>
    </form>
  );
}

export default FormFilterCategories;
