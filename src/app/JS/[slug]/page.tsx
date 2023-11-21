import { allDocs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  console.log("tomek--- xxxx", params, allDocs);

  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === `JS/${params.slug}`
  );
  if (!doc) throw new Error(`Document not found for slug: ${params.slug}`);
  return { title: doc.title };
};

const DocLayout = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === `JS/${params.slug}`
  );
  if (!doc) throw new Error(`Document not found for slug: ${params.slug}`);

  return (
    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={doc.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(doc.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{doc.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: doc.body.html }}
      />
    </article>
  );
};

export default DocLayout;
