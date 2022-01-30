import Navbar from "../navbar/navbar";
import React from "react";

export default function SimpleLayout(props: {
  preContainer?: any;
  children?:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) {
  return (
    <>
      <Navbar />
      <main role="main">
        {props.preContainer && props.preContainer}
        <div className="album py-5 bg-light">
          <div className="container">{props.children}</div>
        </div>
      </main>
    </>
  );
}
