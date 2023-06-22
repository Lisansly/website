import CloudBasedLicensing from "./cloud_based_licensing/CloudBasedLicensing";
import { Icon, IconCloudComputing } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDocumentTitle } from "@mantine/hooks";
import { Box } from "@mantine/core";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

export type TabProps = {
  component: JSX.Element;
  label: string;
  path: string;
  icon: Icon;
};

const Dashboard = () => {
  useDocumentTitle("Dashboard | Lisansly");
  const { tabValue, projectName } = useParams();
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
      label: "Cloud Based Licensing",
      path: "cloud-based-licensin2g",
      icon: IconCloudComputing,
    },
  ];

  useEffect(() => {
    if (!tabs.some((tab) => tab.path === tabValue)) {
      navigate("/dashboard/cloud-based-licensing");
    }
  }, [tabValue]);

  return (
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Sidebar tabValue={tabValue} tabs={tabs} navigate={navigate} />
      <Box
        sx={(theme) => ({
          backgroundImage: theme.fn.gradient({
            from: theme.colors.violet[9],
            to: theme.colors.blue[7],
          }),
          zIndex: -2,
          position: "absolute",
          width: "40%",
          top: "30%",
          left: "10%",
          height: "50%",
        })}
      />
      {tabs.find((tab) => tab.path === tabValue)?.component}
    </div>
  );
};

export default Dashboard;
