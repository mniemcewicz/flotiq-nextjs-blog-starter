import moment from "moment";
import Image from "next/image";
import Link from "next/link";

import { flotiqApiClient } from "@/flotiq-api-client";
import { BlogpostHydrated } from "@flotiq/flotiq-api-sdk";

export default function BlogPostCard({
  title,
  slug,
  excerpt,
  headerImage,
  internal,
}: BlogpostHydrated) {
  return (
    <Link
      className="flex gap-4 bg-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
      href={`blogpost/${slug}`}
    >
      {headerImage?.length && (
        <Image
          alt={headerImage[0].alt || ""}
          src={flotiqApiClient.helpers.getMediaUrl(headerImage[0])}
          width={300}
          height={300}
        />
      )}
      <div className="flex flex-col p-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p>{excerpt}</p>
        <span className="mt-auto italic text-sm">
          {moment(internal.createdAt).format("Do MMMM yyyy")}
        </span>
      </div>
    </Link>
  );
}
