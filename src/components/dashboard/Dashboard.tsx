import CloudBasedLicensing from "./cloud_based_licensing/CloudBasedLicensing";
import { Icon, IconCloudComputing } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { createStyles } from "@mantine/core";
import { SideBar } from "./SideBar";
import { useEffect } from "react";

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

export type TabProps = {
  component: JSX.Element;
  label: string;
  path: string;
  icon: Icon;
};

const Dashboard = () => {
  const { tabValue, projectName } = useParams();
  const { classes } = useStyles();
  const navigate = useNavigate();

  const tabs: TabProps[] = [
    {
      component: <CloudBasedLicensing projectName={projectName} />,
      label: "Cloud Based Licensing",
      path: "cloud-based-licensing",
      icon: IconCloudComputing,
    },
    {
      component: <CloudBasedLicensing projectName={projectName} />,
      label: "Cloud Based Licensing 2",
      path: "cloud-based-licensing-2",
      icon: IconCloudComputing,
    },
  ];

  useEffect(() => {
    if (!tabs.some((tab) => tab.path === tabValue)) {
      navigate("/dashboard/cloud-based-licensing");
    }
  }, [tabValue]);

  return (
    <>
      <SideBar tabValue={tabValue} tabs={tabs} />
      <div className={classes.dashboard}>
        {tabs.find((tab) => tab.path === tabValue)?.component}
      </div>
    </>
  );
};

export default Dashboard;
