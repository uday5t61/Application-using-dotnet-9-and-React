import { List, ListItem, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:5000/api/activities")
      .then((response) => setActivities(response.data));

    //   fetch("http://localhost:5000/api/activities")
    //     .then((response) => response.json())
    //     .then((data) => setActivities(data));
  }, []);

  //console.log(activities);
  const title = "Welcome to Reactivities!";
  return (
    <>
      <Typography variant="h3">{title}</Typography>
      <List>
        {activities.map((activities) => (
          <ListItem key={activities.id}>
            <ListItemText>{activities.title}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default App;
