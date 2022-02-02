import { useState } from "react";
import SimpleLayout from "../components/layout/simple";
import client from "../utils/apollo-client";
import { POST_ARTICLES, GET_USERS_BY_PK } from "../utils/queries";
import { User } from "../types/users";

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_USERS_BY_PK,
    variables: { id: 1 }
  });
  return {
    props: {
      user: data.users_by_pk,
    },
  };
}

export async function handlePost(item: any) {
  const { data } = await client.mutate({
    mutation: POST_ARTICLES,
    variables: {
      title: item.title,
      image: item.image,
      content: item.content,
      name: item.author}
  });
  console.log(data);
}

export default function Write({ user }: User) {
  const [article, setArticle] = useState({
    title: "",
    image: "",
    content: "",
    author: ""
  });
  
  return (
    <SimpleLayout>
        <div className="d-flex justify-content-center">Write Form</div>
        <div className="container w-50">
          <div className="card px-2 py-2 shadow-sm">
            <form>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput">Title</label>
                <input type="text" className="form-control" id="formGroupExampleInput" 
                  onChange={(e) => setArticle({ ...article, title: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput2">Image (url)</label>
                <input type="text" className="form-control" id="formGroupExampleInput2"
                  onChange={(e) => setArticle({ ...article, image: e.target.value})} />
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput3">Content</label>
                <textarea className="form-control" id="formGroupExampleInput3"
                  onChange={(e) => setArticle({ ...article, content: e.target.value})}/>
              </div>
              <div className="form-group">
                <label htmlFor="formGroupExampleInput4">Author</label>
                <input type="text" className="form-control" id="formGroupExampleInput4" placeholder={user.name}
                  onChange={(e) => setArticle({ ...article, author: e.target.value})}/>
              </div>
              <button type="button" className="btn btn-primary mt-2"
                onClick={() => handlePost(article)}>Submit</button>
            </form>
          </div>
        </div>
    </SimpleLayout>
  );
}
