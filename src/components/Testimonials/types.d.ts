import { TCategory } from "@/components/Categories/types";
import { TCity } from "@/components/Cities/types";
import { TTier } from "@/components/Tiers/types";
import { TKitchen } from "@/components/Kitchen/types";
import { TPackage } from "@/components/Packages/types";

export type TTestimonial = {
  id: number;
  name: string;
  photo: string;
  message: string;
  catering_package: TPackage;
};
