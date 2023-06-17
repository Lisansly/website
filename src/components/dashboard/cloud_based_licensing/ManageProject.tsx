import SearchInput from "../../SearchInput";
import BackButton from "../BackButton";
import { useState } from "react";
import {
  Pagination,
  Skeleton,
  Center,
  Group,
  Text,
  Box,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import NewLicenseKey from "./NewLicenseKey";
import LicenseKey from "./LicenseKey";

type ManageProjectProps = {
  projectName: string | undefined;
};

const keys = [
  "39d1c0af-350a-4d9f-802e",
  "39d1c0af-350a-4d9f-802a",
  "39d1c0af-350a-4d9f-802c",
  "39d1c0af-350a-4d9f-802f",
];

const ManageProject = (props: ManageProjectProps) => {
  const [loading] = useState(false);

  return (
    <Box w={"100%"} m={"xs"}>
      <Center>
        <Group display="grid" spacing="xl" maw={"1000px"}>
          <Group>
            <BackButton path="/dashboard/cloud-based-licensing" />
            <div>
              <Text fw={700}>{props.projectName}</Text>
              <Text c="dimmed" size="xs">
                have 12 lisance keys
              </Text>
            </div>
            <ActionIcon variant="default" ml={"auto"}>
              <IconEdit size="0.9rem" />
            </ActionIcon>
          </Group>
          <Group style={{ display: "flew", flexWrap: "nowrap" }}>
            <SearchInput placeholder="Search License Key" />
            <NewLicenseKey />
          </Group>
          <div style={{ minHeight: "63.4vh" }}>
            <SimpleGrid
              cols={3}
              spacing="lg"
              breakpoints={[
                { maxWidth: "md", cols: 3, spacing: "md" },
                { maxWidth: "sm", cols: 2, spacing: "sm" },
                { maxWidth: "xs", cols: 1, spacing: "sm" },
              ]}
            >
              {keys.map((key) => (
                <LicenseKey value={key} key={key} />
              ))}
            </SimpleGrid>
          </div>
          <Skeleton visible={loading}>
            <Center>
              <Pagination total={3} />
            </Center>
          </Skeleton>
        </Group>
      </Center>
    </Box>
  );
};

export default ManageProject;
