import CloudBasedLicensing from "./cloud_based_licensing/CloudBasedLicensing";
import { Icon, IconCloudComputing } from "@tabler/icons-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

export type TabProps = {
  component: JSX.Element;
  label: string;
  path: string;
  icon: Icon;
};

const Dashboard = () => {
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
    <div style={{ minHeight: "100vh", display: "flex" }}>
      <Sidebar tabValue={tabValue} tabs={tabs} navigate={navigate} />
      {tabs.find((tab) => tab.path === tabValue)?.component}
    </div>
  );
};

export default Dashboard;
