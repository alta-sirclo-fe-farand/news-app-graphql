import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import client from "../utils/apollo-client";
import { GET_USERS_BY_PK, DELETE_USERS_BY_PK } from "../utils/queries";
import SimpleLayout from "../components/layout/simple";
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

export async function handleEdit() {
  console.log("edit terjadi");
}

export async function handleDelete() {
  const { data } = await client.mutate({
    mutation: DELETE_USERS_BY_PK,
    variables: { id: 1 }
  });
  console.log(data);
}

export default function Profile({ user }: User) {
  return (
    <SimpleLayout>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className="row justify-content-center">
        <div className="col-md-4" key={user.id}>
          <div className="card mb-4 shadow-sm">
            <div className="card-body">
              <h3>{user.name}</h3>
              <h5>{user.email}</h5>
              <button
                type="button"
                className="btn btn-sm btn-outline-primary mb-2"
                onClick={() => handleEdit()}>Edit Profile</button> <br />
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleDelete()}>Delete Account</button>

            </div>
          </div>
        </div>
      </div>
    </SimpleLayout>
  );
}
