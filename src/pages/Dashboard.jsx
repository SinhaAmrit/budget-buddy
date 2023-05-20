import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helpers";
//loader
export function dashboardLoder() {
  const userName = fetchData("userName");
  return { userName };
}
const Dashboard = () => {
  const { userName } = useLoaderData();
  return (
    <div>
      Hello {userName}! Welcome to <u>Dashboard</u>
    </div>
  );
};
export default Dashboard;
