import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import client from "../../utils/apollo-client";
import { GET_ARTICLES_BY_PK } from "../../utils/queries";
import SimpleLayout from "../../components/layout/simple";
import { Article } from "../../types/articles";

export async function getServerSideProps({ params }: any) {
  const { data } = await client.query({
    query: GET_ARTICLES_BY_PK,
    variables: { id: params.id },
  });

  return {
    props: {
      article: data.articles_by_pk,
    },
  };
}

export default function DetailArticle({ article }: Article) {
  const [comment, setComment] = useState("");
  
  return (
    <SimpleLayout>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className="container">
        <div className="card mb-4 shadow-sm">
          <Image
            src={article.image}
            alt={article.title}
            width={500}
            height={500}
          />
          <div className="card-body">
            <h3>{article.title}</h3>
            <p className="card-text">{article.content}</p>
            <p>{article.comments_aggregate.aggregate.count} Comments</p>
            <form>
              <textarea className="form-control mb-2" placeholder="Add your comment here"
                onChange={(e) => setComment(e.target.value)}/>
              <button type="submit" className="btn btn-primary btn-sm">Add Comment</button>
            </form>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
