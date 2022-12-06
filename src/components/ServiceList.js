import ServiceListItem from "./ServiceListItem";
import { Grid } from "@mui/material";

//add to list
function ServiceList({ data, deleteUrlList, editUrlList }) {
  return (
    <>
      <Grid container direction="column" rowGap={2}>
        {data.map((urlData) => (
          <ServiceListItem
            key={urlData.id}
            urlData={urlData}
            deleteUrlList={deleteUrlList}
            editUrlList={editUrlList}
          />
        ))}
      </Grid>
    </>
  );
}

export default ServiceList;