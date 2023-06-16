import {
  ActionIcon,
  Box,
  CopyButton,
  Group,
  Paper,
  Text,
  Tooltip,
  createStyles,
} from "@mantine/core";
import { IconCheck, IconCopy, IconTool } from "@tabler/icons-react";

type LicenseKeyProps = {
  value: string;
};

const useStyles = createStyles((theme) => ({
  paper: {
    paddingBlock: 5,
    paddingInline: theme.spacing.sm,
    display: "flex",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
  },
  text: {
    wordBreak: "break-all",
  },
}));

const LicenseKey = (props: LicenseKeyProps) => {
  const { classes } = useStyles();
  return (
    <Paper withBorder className={classes.paper}>
      <Group
        spacing={"xs"}
        style={{ display: "flex", width: "100%", flexWrap: "nowrap" }}
      >
        <Text size={"sm"} className={classes.text}>
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
