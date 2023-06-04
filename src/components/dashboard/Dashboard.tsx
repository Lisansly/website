import CloudBasedLicensing from "./CloudBasedLicensing";
import { createStyles } from "@mantine/core";
import { useParams } from "react-router-dom";
import { SideBar } from "./SideBar";

const useStyles = createStyles((theme) => ({
  dashboard: {
    [theme.fn.smallerThan("sm")]: {
      marginLeft: "67.5px",
    },
    [theme.fn.largerThan("sm")]: {
      marginLeft: "310px",
    },
  },
}));

const Dashboard = () => {
  const { tabValue, projectName } = useParams();
  const { classes } = useStyles();
  const tabs = [
    {
      path: "cloud-based-licensing",
      component: <CloudBasedLicensing projectName={projectName} />,
    },
  ];

  return (
    <>
      <SideBar tabValue={tabValue} />
      <div className={classes.dashboard}>
        {tabs.find((tab) => tab.path === tabValue)?.component}
      </div>
    </>
  );
};

export default Dashboard;
