export const getFeatures = () => {
  let query = `
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }}
    `;
  return query;
};
