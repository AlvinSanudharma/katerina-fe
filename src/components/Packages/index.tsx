import Link from "next/link";
import { getPackages } from "./actions";
import { TPackage, TShow } from "./types";
import Image from "next/image";
import Slider from "@/components/Slider";
import Notes from "@/assets/image/notes.svg";
import People from "@/assets/image/people.svg";

type Props = {
  show: TShow;
};

// export function ContentCategory({ data }: { data: TCategory }) {
//   return (
//     <div className="flex flex-col items-center gap-y-2 relative">
//       <figure className="w-16 aspect-square relative">
//         <Image
//           fill
//           className="w-full h-full object-cover object-center"
//           src={`${process.env.HOST_API}/${data.photo}`}
//           alt={data.name}
//           sizes="(max-width: 768px) 100vw"
//         />
//       </figure>
//       <span className="">{data.name}</span>
//       <Link
//         href={`/categories/${data.slug}`}
//         className="absolute inset-0"
//       ></Link>
//     </div>
//   );
// }

export function ContentPopular({ data }: { data: TPackage[] }) {
  if (data.length === 0) return "Tidak ada data";

  return (
    <Slider
      spaceBetween={20}
      swiperClassName="!h-[260px] !px-4"
      swiperSliderClassName="!w-[240px]"
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="h-full rounded-3xl overflow-hidden relative border"
        >
          <figure className="w-full h-full absolute">
            <Image
              fill
              className="w-full h-full object-cover object-center"
              src={`${process.env.HOST_API}/${item.thumbnail}`}
              alt={item.name}
              sizes="(max-width: 768px) 100vw"
            />
          </figure>

          <div className="absolute left-2 bottom-2 right-2 flex flex-col bg-white rounded-2xl p-3">
            <span className="font-semibold">{item.name}</span>
            <span className="flex gap-x-3">
              <span className="flex gap-x-1">
                <span className="text-color2">
                  <Notes />
                </span>
                <span className="text-gray2">{item.category.name}</span>
              </span>

              <span className="flex gap-x-1">
                <span className="text-color2">
                  <People />
                </span>
                <span className="text-gray2">125</span>
              </span>
            </span>
          </div>
          <Link
            href={`/packages/${item.slug}`}
            className="absolute inset-0"
          ></Link>
        </div>
      ))}
    </Slider>
  );
}
export function ContentNewest({ data }: { data: TPackage[] }) {
  return <></>;
}

async function Packages({ show }: Props) {
  const { data }: { data: TPackage[] } = await getPackages();

  if (show === "popular") {
    return (
      <ContentPopular data={data.filter((item) => item.is_popular === 1)} />
    );
  }

  // if (show === "newest") {
  //   return <ContentNewest data={data} />;
  // }

  return null;
}

export default Packages;
