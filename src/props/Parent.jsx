import React, { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import { Card, CardContent, Grid } from "@mui/material";
import Child3 from "./Child3";
import Child4 from "./Child4";

const Parent = () => {
  const [data, setData] = useState(["East", "West", "North", "South"]);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Card>
          <CardContent>
            <Child1 item={item} />
            <Child2 item={item} />
            <Child3 item={item} />
            <Child4 item={item} />
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Parent;
