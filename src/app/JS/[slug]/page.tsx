import { allDocs } from "contentlayer/generated";
import { format, parseISO } from "date-fns";

export const generateStaticParams = async () =>
  allDocs.map((doc) => ({ slug: doc._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`);
  return { title: post.title };
};

const DocLayout = ({ params }: { params: { slug: string } }) => {
  const doc = allDocs.find((doc) => doc._raw.flattenedPath === params.slug);
  if (!doc) throw new Error(`Doc not found for slug: ${params.slug}`);

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
