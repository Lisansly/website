import {
  ActionIcon,
  Box,
  CopyButton,
  Group,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy, IconTool } from "@tabler/icons-react";

type LicenseKeyProps = {
  value: string;
};

const LicenseKey = (props: LicenseKeyProps) => {
  return (
    <Paper withBorder px={"xs"} py={"5px"} display={"flex"}>
      <Group
        spacing={"xs"}
        style={{ display: "flex", width: "100%", flexWrap: "nowrap" }}
      >
        <Text size={"sm"} style={{ wordBreak: "break-all" }}>
          {props.value}
        </Text>
        <Box ml={"auto"} display={"flex"}>
          <CopyButton value={props.value} timeout={2000}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? "Copied" : "Copy"} withArrow>
                <ActionIcon color={copied ? "blue" : "gray"} onClick={copy}>
                  {copied ? (
                    <IconCheck size="1rem" />
                  ) : (
                    <IconCopy size="1rem" />
                  )}
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
          <ActionIcon>
            <IconTool size={"1rem"} />
          </ActionIcon>
        </Box>
      </Group>
    </Paper>
  );
};

export default LicenseKey;
