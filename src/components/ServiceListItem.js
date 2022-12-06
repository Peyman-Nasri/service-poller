import { Delete, Edit } from "@mui/icons-material";
import dayjs from "dayjs";
import { Grid, Paper } from "@mui/material";

const ServiceListItem = ({
    deleteUrlList,
    editUrlList,
    urlData: { url, date, id },
}) => {

  return (
    <>
      <Paper>
        <Grid container padding="1em">
          <Grid item xs={4}>
            <b>{url}</b>
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={1}>
            <Edit style={{ cursor: "pointer" }} onClick={() => editUrlList(id)} />
          </Grid>
          <Grid item xs={1}>
            <Delete
              style={{ cursor: "pointer" }}
              onClick={() => deleteUrlList(id)}
            />
          </Grid>

          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            {dayjs(date).format("D MMM YYYY")}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ServiceListItem;
