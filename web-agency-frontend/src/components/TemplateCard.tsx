import Link from "next/link";

interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function TemplateCard({ title, description, image, link }: TemplateCardProps) {
  return (
    <Link href={link}>
      <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition cursor-pointer">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 bg-white">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
}
