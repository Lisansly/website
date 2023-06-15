import {
  Box,
  Center,
  Group,
  Pagination,
  SimpleGrid,
  Skeleton,
} from "@mantine/core";
import NewProjectButton from "./NewProject";
import Project, { ProjectProps } from "./Project";
import { useNavigate } from "react-router-dom";
import ManageProject from "./ManageProject";
import { useState } from "react";
import SearchInput from "../../SearchInput";

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
];

type CloudBasedLicensingProps = {
  projectName: string | undefined;
};

const CloudBasedLicensing = (props: CloudBasedLicensingProps) => {
  const navigate = useNavigate();
  const [loading] = useState(false);
  return (
    <>
      {props.projectName === undefined ? (
        <Box w={"100%"} m={"xs"} mt={"md"}>
          <Center>
            <Group display="grid" spacing="xl">
              <Group style={{ display: "flew", flexWrap: "nowrap" }}>
                <SearchInput placeholder="Search Project" />
                <NewProjectButton />
              </Group>
              <Box mih={"70vh"}>
                <SimpleGrid
                  cols={3}
                  spacing="lg"
                  breakpoints={[
                    { maxWidth: "md", cols: 3, spacing: "md" },
                    { maxWidth: "sm", cols: 2, spacing: "sm" },
                    { maxWidth: "xs", cols: 1, spacing: "sm" },
                  ]}
                >
                  {projects.map((project, index) => (
                    <Project
                      navigate={navigate}
                      loading={loading}
                      props={project}
                      key={index}
                    />
                  ))}
                </SimpleGrid>
              </Box>
              <Skeleton visible={loading}>
                <Center>
                  <Pagination total={3} />
                </Center>
              </Skeleton>
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
