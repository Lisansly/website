import { Center, Group, Pagination } from "@mantine/core";
import NewProjectButton from "./NewProjectButton";
import Project, { ProjectProps } from "./Project";
import { useNavigate } from "react-router-dom";
import SearchProject from "./SearchProject";
import ManageProject from "./ManageProject";

const projects: ProjectProps[] = [
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
  {
    name: "Lisansly",
    keyCount: 12,
    path: "proje1",
  },
];

type CloudBasedLicensingProps = {
  projectName: string | undefined;
};

const CloudBasedLicensing = (props: CloudBasedLicensingProps) => {
  const navigate = useNavigate();
  return (
    <>
      {props.projectName === undefined ? (
        <Center p="xs">
          <Group display="grid" maw="1000px" spacing="xl">
            <Group sx={{ flexWrap: "nowrap", display: "flex" }}>
              <SearchProject />
              <NewProjectButton />
            </Group>
            <Group sx={{ flexWrap: "wrap", display: "flex" }}>
              {projects.map((project, index) => (
                <Project
                  projectsCount={projects.length}
                  navigate={navigate}
                  props={project}
                  key={index}
                />
              ))}
            </Group>
            <Center>
              <Pagination total={3} />
            </Center>
          </Group>
        </Center>
      ) : (
        <ManageProject projectName={props.projectName} />
      )}
    </>
  );
};

export default CloudBasedLicensing;
