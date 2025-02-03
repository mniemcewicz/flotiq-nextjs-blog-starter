import Image from "next/image";

type PageSummaryProps = {
  title: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
};

export default function PageSummary({
  title,
  description,
  imageUrl,
  imageAlt,
}: PageSummaryProps) {
  return (
    <div className="gap-8 max-w-5xl mx-auto flex items-start">
      {imageUrl && (
        <Image
          className="rounded-full h-auto"
          alt={imageAlt || ""}
          src={imageUrl}
          width={200}
          height={200}
        />
      )}
      <div className="my-auto">
        <h1>{title}</h1>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
}
