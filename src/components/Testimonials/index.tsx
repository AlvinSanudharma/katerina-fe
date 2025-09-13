import { getAllTestimonials } from "./actions";
import { TTestimonial } from "./types";
import Image from "next/image";
import Slider from "@/components/Slider";
import Star from "@/assets/image/star.svg";

export function ContentTestimonial({ data }: { data: TTestimonial }) {
  return (
    <div className="h-full rounded-3xl overflow-hidden relative border p-3 flex flex-col gap-y-3">
      <span className="text-color1 flex gap-x-1">
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </span>

      <p className="italic text-sm font-semibold leading-6 line-clamp-2">
        “{data.message}”
      </p>

      <div className="flex gap-x-3 items-center">
        <figure className="w-9 flex-none aspect-square relative rounded-full overflow-hidden">
          <Image
            fill
            className="w-full h-full object-cover object-center"
            src={`${process.env.HOST_API}/${data.photo}`}
            alt={data.name}
            sizes="(max-width: 768px) 100vw"
          />
        </figure>
        <span className="font-semibold">{data.name}</span>
      </div>
    </div>
  );
}

export function WrapperTestimonials({ data }: { data: TTestimonial[] }) {
  return (
    <Slider
      spaceBetween={20}
      swiperClassName="!h-[156px] !px-4"
      swiperSliderClassName="!w-[280px]"
    >
      {data.map((item) => {
        return <ContentTestimonial data={item} key={item.id} />;
      })}
    </Slider>
  );
}

async function Testimonials() {
  const { data }: { data: TTestimonial[] } = await getAllTestimonials();

  if (data.length === 0) return "Tidak ada data";

  return <WrapperTestimonials data={data} />;
}

export default Testimonials;
