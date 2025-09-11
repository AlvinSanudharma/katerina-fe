import { TCategory } from "@/components/Categories/types";

export type TShow = "popular" | "newest";

export type TPackage = {
  id: number;
  name: string;
  slug: string;
  is_popular: 0 | 1;
  thumbnail: string;
  about: string;
  city: {};
  category: TCategory;
  kitchen: {};
  tiers: [];
};
