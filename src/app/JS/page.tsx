import DocCardIndexItem from "@/components/DocCard/DocCardIndexItem";
import { allDocs } from "contentlayer/generated";
import { compareDesc } from "date-fns";

const JSPageIndex = () => {
  const docs = allDocs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="mx-auto max-w-xl py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        Technical Interviews
      </h1>
      <h2>Questions & Answers - Plain & Simple</h2>
      {docs.map((doc, idx) => (
        <DocCardIndexItem key={idx} {...doc} />
      ))}
    </div>
  );
};

export default JSPageIndex;
