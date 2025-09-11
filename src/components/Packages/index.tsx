import Link from "next/link";
import { getPackages } from "./actions";
import { TPackage, TShow } from "./types";
import Image from "next/image";

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

  return <></>;
}
export function ContentNewest({ data }: { data: TPackage[] }) {
  return <></>;
}

async function Packages({ show }: Props) {
  const { data }: { data: TPackage[] } = await getPackages();

  if (show === "popular") {
    return <ContentPopular data={data} />;
  }

  if (show === "newest") {
    return <ContentNewest data={data} />;
  }

  return null;
}

export default Packages;
