// src/app/templates/[slug]/page.tsx

import { notFound } from "next/navigation";

interface TemplatePageProps {
  params: {
    slug: string;
  };
}

// ✅ ต้อง destructure params ข้างในตัวฟังก์ชัน
export default async function TemplatePage(props: { params: { slug: string } }) {
  const { slug } = props.params;

  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const url = `/templates/${safeSlug}/index.html`;

  return (
    <div className="w-full h-screen">
      <iframe src={url} className="w-full h-full border-0" />
    </div>
  );
}

