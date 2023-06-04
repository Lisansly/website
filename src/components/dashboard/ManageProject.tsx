import { Badge, Box, CopyButton, Group, Paper, Text } from "@mantine/core";
import BackButton from "./BackButton";
import EditLisanceKeysButton from "./EditLisanceKeysButton";

type ManageProjectProps = {
  projectName: string | undefined;
};

const ManageProject = (props: ManageProjectProps) => {
  return (
    <Box p={"xs"}>
      <Box display={"flex"} mb={"xl"}>
        <Group>
          <BackButton />
          <Box>
            <Text fw={700}>{props.projectName}</Text>
            <Text c={"dimmed"} size={"xs"}>
              have 12 lisance keys
            </Text>
          </Box>
        </Group>
      </Box>
      <Paper p={"md"} radius={"sm"} withBorder maw={"500px"}>
        <Group position="apart" mb={"md"}>
          <Box>
            <Text fw={700}>Lisance Keys</Text>
          </Box>
          <EditLisanceKeysButton />
        </Group>
        <Group>
          <CopyButton value="https://mantine.dev">
            {({ copied, copy }) => (
              <Badge
                variant="light"
                sx={{ cursor: "pointer" }}
                radius={"sm"}
                w={"100%"}
                p={"md"}
                color={copied ? "teal" : "blue"}
                onClick={copy}
              >
                {copied
                  ? "Copied lisance key"
                  : " 42h6srh6-24h6sr5h6256-ash62456h246-h2645h246"}
              </Badge>
            )}
          </CopyButton>
        </Group>
      </Paper>
    </Box>
  );
};

export default ManageProject;