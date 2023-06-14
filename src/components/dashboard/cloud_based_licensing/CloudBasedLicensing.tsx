import { Box, Center, Group, Pagination } from "@mantine/core";
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
        <Box w={"100%"} m={"xs"}>
          <Center>
            <Group display="grid" spacing="xl" maw={"1000px"}>
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
        </Box>
      ) : (
        <ManageProject projectName={props.projectName} />
      )}
    </>
  );
};

export default CloudBasedLicensing;
