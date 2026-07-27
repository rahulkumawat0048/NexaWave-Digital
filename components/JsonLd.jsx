import { getAllSchemas } from '@/lib/seo-data';

export default function JsonLd() {
  const schemas = getAllSchemas();
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
