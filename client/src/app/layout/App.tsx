import { Container, CssBaseline } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/ActivityDashboard";

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
  // const title = "Welcome to Reactivities!";
  return (
    <>
      <CssBaseline />
      <NavBar />
      {/* <Typography variant="h3">{title}</Typography> */}
      <Container maxWidth="xl" sx={{ marginTop: 3 }}>
        <ActivityDashboard activities={activities}></ActivityDashboard>
      </Container>
    </>
  );
}

export default App;
