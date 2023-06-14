import EditLisanceKeysButton from "./EditLisanceKeysButton";
import BackButton from "../BackButton";

import {
  CopyButton,
  Center,
  Badge,
  Group,
  Paper,
  Text,
  Box,
} from "@mantine/core";

type ManageProjectProps = {
  projectName: string | undefined;
};

const ManageProject = (props: ManageProjectProps) => {
  return (
    <Box w={"100%"} m={"xs"}>
      <Center>
        <Group display="grid" spacing="xl" maw={"1000px"}>
          <Group>
            <BackButton path="/dashboard/cloud-based-licensing" />
            <Box>
              <Text fw={700}>{props.projectName}</Text>
              <Text c="dimmed" size="xs">
                have 12 lisance keys
              </Text>
            </Box>
          </Group>
          <Paper p="md" radius="sm" withBorder maw="500px">
            <Group position="apart" mb="md">
              <Box>
                <Text fw={700}>Lisance Keys</Text>
              </Box>
              <EditLisanceKeysButton />
            </Group>
            <Group>
              <CopyButton value="https://mantine.dev">
                {({ copied, copy }) => (
                  <Badge
                    color={copied ? "teal" : "blue"}
                    sx={{ cursor: "pointer" }}
                    variant="light"
                    onClick={copy}
                    radius={"sm"}
                    w={"100%"}
                    p={"md"}
                  >
                    {copied
                      ? "Copied lisance key"
                      : " 42h6srh6-24h6sr5h6256-ash62456h246-h2645h246"}
                  </Badge>
                )}
              </CopyButton>
            </Group>
          </Paper>
        </Group>
      </Center>
    </Box>
  );
};

export default ManageProject;
