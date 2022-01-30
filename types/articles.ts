export type Articles = {
  articles: ArticlesType[];
};

export type Article = {
  article: ArticlesType;
};

interface ArticlesType {
  id: number;
  image: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  comments_aggregate: {
    aggregate: {
      count: number;
    };
  };
}
