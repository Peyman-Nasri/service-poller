import React, { useEffect, useState } from "react";
import { v4 as shortId } from "uuid";

import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Alert,
  Snackbar,
} from "@mui/material";
import { Stack } from "@mui/system";

function Input({ data, setData, updateData }) {
  // states
  const [url, setUrl] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  // switch to edit mode after receiving updateData
  useEffect(() => {
    if (updateData) {
      const { url } = updateData;

      setUrl(url);
      setIsEditMode(true);
    }
  }, [updateData]);

  //add service
  const addService = () => {
    if (!url) setShowAlert(true);
    else {
      const task = {
        id: shortId(),
        url: url,
        date: new Date(),
      };
      setUrl("");
      

      setData([...data, task]);

      localStorage.setItem("url", JSON.stringify([...data, task]));
    }
  };

  //edit service
  const editService = () => {
    if (!url ) setShowAlert(true);
    else {
      const newEntry = {
        id: updateData.id,
        url: url,
        date: new Date(),
      };

      const indexOfNewElement = data.findIndex(
        (urlList) => urlList.id === updateData.id
      );
      let newData = [...data];
      newData[indexOfNewElement] = newEntry;

      setData(newData);
      setUrl("");
      setIsEditMode(false);

      localStorage.setItem("url", JSON.stringify(newData));
    }
  };

  //clear history
  const clearLocalStorage = () => {
    localStorage.clear();
    setData([]);
  };

  // Render
  return (
    <>
      <Card>
        <CardContent>
          <Stack>
            <TextField
              id="outlined-basic"
              autoComplete="off"
              label="URL"
              variant="outlined"
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Divider style={{ margin: "0.5em 0" }} />
    
            {isEditMode ? (
              <Button variant="contained" color="secondary" onClick={editService}>
                Edit Service
              </Button>
            ) : (
              <Button variant="contained" onClick={addService}>
                Add Service
              </Button>
            )}

            <Divider style={{ margin: "0.5em 0" }} />

            <Button variant="outlined" onClick={clearLocalStorage}>
              Clear History
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <Snackbar
        open={showAlert}
        onClose={() => setShowAlert(false)}
        sx={{ width: "100%" }}
        spacing={2}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowAlert(false)} severity="error">
          Please fill out the field
        </Alert>
      </Snackbar>
    </>
  );
}

export default Input;
