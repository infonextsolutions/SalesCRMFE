import axios from "axios";
import React from "react";

const Update = () => {
  return <div></div>;
};

export default Update;

export async function getServerSideProps({ query, ...params }: any) {
  const response = await axios.get(
    "https://sales365.trainright.fit/api/leads/update"
  );
  return {
    props: {
      // TODO: Can do better error handling here by passing another property error in the component
      data: {},
    }, // will be passed to the page component as props
  };
}