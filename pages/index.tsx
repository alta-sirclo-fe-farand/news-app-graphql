import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import client from "../utils/apollo-client";
import { GET_ARTICLES } from "../utils/queries";
import SimpleLayout from "../components/layout/simple";
import { Articles } from "../types/articles";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ARTICLES,
  });

  return {
    props: {
      articles: data.articles,
    },
  };
}

export default function Home({ articles }: Articles) {
  return (
    <SimpleLayout>
      <Head>
        <title>News Home Page</title>
      </Head>
      <div className="row">
        {articles.map((item: any) => (
          <div className="col-md-4" key={item.id}>
            <div className="card mb-4 shadow-sm">
              <Link href={`/article/${item.id}`}>
                <a>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                  />
                </a>
              </Link>
              <div className="card-body">
                <h3>{item.title}</h3>
                <p className="card-text">
                  {item.content.substring(0, 102 - 2) + ".."}
                </p>
                <p>{item.comments_aggregate.aggregate.count} Comments</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SimpleLayout>
  );
}
