import { Button, Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const Asgn = () => {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const result = await axios.get("http://localhost:4222/MahaData");
    setData(result.data);
  };

  useEffect(() => {
    getApi();
  }, []);

  const handleDelete = (item) => {
    const filt = data.filter((elem) => elem !== item);
    setData(filt);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} align="center">
        <h1>Cities of Maharashtra and Telengana</h1>
      </Grid>
      {data.map((item) => (
        <Grid item xs={3}>
          <Card
            className="hov"
            align="center"
            sx={{ bgcolor: item.Mah == true ? "Green" : "Coral" }}
          >
            <CardContent>
              <h1>{item.city}</h1>
              <h1>{item.state}</h1>
              <Button
                className="btn"
                onClick={() => handleDelete(item)}
                variant="contained"
                color="secondary"
              >
                <DeleteIcon />
                Delete
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Asgn;
