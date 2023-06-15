import { ActionIcon, Group, Paper, Text } from "@mantine/core";
import { IconTool } from "@tabler/icons-react";

type LicenseKeyProps = {
  value: string;
};

const LicenseKey = (props: LicenseKeyProps) => {
  return (
    <Paper withBorder px={"xs"} py={"5px"} display={"flex"}>
      <Group spacing={"xs"} w={"100%"}>
        <Text size={"sm"} style={{ wordBreak: "break-all" }}>
          {props.value}
        </Text>
        <ActionIcon ml={"auto"}>
          <IconTool size={"1rem"} />
        </ActionIcon>
      </Group>
    </Paper>
  );
};

export default LicenseKey;
