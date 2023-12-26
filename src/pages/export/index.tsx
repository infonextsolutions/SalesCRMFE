import axios from "axios";
import React from "react";

const Export = () => {
  return <div></div>;
};

export default Export;

export async function getServerSideProps({ query, ...params }: any) {
  // console.log(params.limit,params.page);
  const response = await axios.get(
    "https://sales365.trainright.fit/api/leads/upload"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}