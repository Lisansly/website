import {
  ActionIcon,
  CopyButton,
  Group,
  Paper,
  ScrollArea,
  Tabs,
  Text,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";

type CommandProps = {
  value: string;
  normalText: string;
  coloredText: string;
  coloredTextColor: string;
};

const commands: CommandProps[] = [
  {
    value: "dotnet",
    normalText: "package Lisansly",
    coloredText: "dotnet add ",
    coloredTextColor: "blue",
  },
  {
    value: "go",
    normalText: "https://github.com/Lisansly/go-sdk",
    coloredText: "go get ",
    coloredTextColor: "",
  },
  {
    value: "npm",
    normalText: "@lisansly/js",
    coloredText: "npm install ",
    coloredTextColor: "yellow",
  },
  {
    value: "yarn",
    normalText: "@lisansly/js",
    coloredText: "yarn add ",
    coloredTextColor: "yellow",
  },
];

type InstallCommandProps = {
  coloredTextColor: string;
  coloredText: string;
  normalText: string;
};

const InstallCommand = (props: InstallCommandProps) => {
  return (
    <Paper
      sx={(theme) => ({
        padding: theme.spacing.xs,
        paddingLeft: theme.spacing.md,
        paddingBlock: 9,
        [theme.fn.smallerThan("xs")]: {
          maxWidth: "calc(100vw - 55px)",
        },
      })}
    >
      <ScrollArea scrollbarSize={4}>
        <Group spacing={9} w="max-content">
          <Text c={props.coloredTextColor} ff={"monospace"}>
            {props.coloredText}
          </Text>
          <Text ff={"monospace"}>{props.normalText}</Text>
          <CopyButton
            value={props.coloredText + props.normalText}
            timeout={2000}
          >
            {({ copied, copy }) => (
              <Tooltip
                label={copied ? "Copied" : "Copy"}
                withArrow
                position="right"
              >
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
        </Group>
      </ScrollArea>
    </Paper>
  );
};

const InstallCommands = () => {
  return (
    <Tabs defaultValue="dotnet" mt={"xl"} w={"max-content"}>
      <Tabs.List>
        {commands.map((command) => (
          <Tabs.Tab value={command.value} key={command.value}>
            {command.value}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {commands.map((command) => (
        <Tabs.Panel value={command.value} pt="xs" key={command.value}>
          <InstallCommand
            coloredTextColor={command.coloredTextColor}
            coloredText={command.coloredText}
            normalText={command.normalText}
          />
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default InstallCommands;
