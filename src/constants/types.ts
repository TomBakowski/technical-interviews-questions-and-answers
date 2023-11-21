type MdnUrl = {
  label: string;
  url: string;
};

type TechnicalQuestionObject = {
  question: string;
  shortDescription: string;
  category: string;
  tags: string[];
  slug: string;
  markupFilePath: string;
  mdnUrls: MdnUrl[];
};

export type { MdnUrl, TechnicalQuestionObject };
