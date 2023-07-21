import RegionsDetailLogic from "./RegionsDetail.logic";

const RegionsDetail = () => {
  const { data } = RegionsDetailLogic();
  return (
    <>
      <h1>City: {data?.region.city}</h1>
      <h1>State: {data?.region.state}</h1>
    </>
  );
};

export default RegionsDetail;
