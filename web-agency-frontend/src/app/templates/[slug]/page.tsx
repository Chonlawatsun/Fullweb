// src/app/templates/[slug]/page.tsx

interface TemplatePageProps {
  params: {
    slug: string;
  };
}

export default async function TemplatePage(props: {
  params: { slug: string };
}) {
  const slug = props.params.slug;

  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "");
  const url = `/templates/${safeSlug}/index.html`;

  return (
    <div className="w-full h-screen">
      <iframe src={url} className="w-full h-full border-0" />
    </div>
  );
}
