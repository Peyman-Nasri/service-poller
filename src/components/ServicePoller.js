import Input from "./Input";
import ServiceList from "./ServiceList"
import { useState } from "react";
import { Divider } from "@mui/material";

//render the page
function ServicePoller() {
  //states
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("url")) || []
  );
  const [updateData, setUpdateData] = useState();

  //edit URL from list
  const editUrlList = (selectedId) => {
    const { url, id } = data.find(({ id }) => id === selectedId);
    setUpdateData({ url, id });
  };

  //delete URL from list
  const deleteUrlList = (id) => {
    const newUrl = data.filter(({ id: urlId }) => urlId !== id);
    setData(newUrl);
  };

  return (
    <>
      {/* rendering a new URL service */}
      <Input data={data} setData={setData} updateData={updateData} />

          <Divider style={{ margin: "1em 0" }} />
          
      {/* displaying the list of sevices */}
      <ServiceList data={data} deleteUrlList={deleteUrlList} editUrlList={editUrlList} />
    </>
  );
}

export default ServicePoller;
