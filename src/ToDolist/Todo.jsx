import { Button } from "@mui/material";
import React, { useState } from "react";

const Todo = () => {
  const [activity, SetActivity] = useState("");

  return (
    <>
      <div>
        <div style={{ backgroundColor: "darkblue", textAlign: "center" }}>
          <h1>TODO LIST</h1>
          <input
            onChange={(e) => SetActivity(e.target.value)}
            type="text"
            placeholder="Add Activity"
            value={activity}
          />
          <Button variant="contained">Add</Button>
        </div>
      </div>
    </>
  );
};

export default Todo;
