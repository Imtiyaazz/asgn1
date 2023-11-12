import React from "react";
import { Hyundai } from "./components/Hyundai";
import { Maruti } from "./components/Maruti";
import Asgn from "./Asgn9/Asgn";
import { Card, CardContent } from "@mui/material";
import Parent from "./props/Parent";
import Todo from "./ToDolist/Todo";
import "./Asgn9/common.css";
import { Practice } from "./Adnan/Practice";

function App() {
  return (
    <div>
      {/* <Hyundai/>
      <Maruti/>
      <Hyundai/>
      <Maruti/>
      <Maruti/> */}
      {/* <Card sx={{ bgcolor: "aliceblue" }}>
        <CardContent>
          <Asgn /> */}
      {/* <Parent /> */}
      {/* <Todo /> */}
      {/* </CardContent>
      </Card> */}

      <Practice />
    </div>
  );
}

export default App;
