import { Doc } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import Link from "next/link";

function DocCard(doc: Doc) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={doc.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {doc.title}
        </Link>
      </h2>
      <time dateTime={doc.date} className="mb-2 block text-xs text-gray-600">
        {format(parseISO(doc.date), "LLLL d, yyyy")}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: doc.body.html }}
      />
    </div>
  );
}

export default DocCard;
