import { Paper, Text, createStyles } from "@mantine/core";
import { NavigateFunction } from "react-router-dom";

export type ProjectProps = {
  keyCount: number;
  name: string;
  path: string;
};

const Project = ({
  navigate,
  props,
}: {
  projectsCount: number;
  navigate: NavigateFunction;
  props: ProjectProps;
}) => {
  const useStyles = createStyles((theme) => ({
    project: {
      padding: theme.spacing.lg,
      height: "200px",
      transition: "all 200ms ease",
      "&:hover": {
        cursor: "pointer",
        boxShadow: `0px 2px 30px 0px ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[5]
            : theme.colors.gray[2]
        }`,
        borderColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[2]
            : theme.colors.gray[5],
      },
    },
    name: {
      fontWeight: 600,
      wordBreak: "break-word",
    },
  }));
  const { classes } = useStyles();
  return (
    <Paper
      onClick={() => navigate(props.path)}
      className={classes.project}
      withBorder
    >
      <Text size="xl" className={classes.name}>
        {props.name}
      </Text>
      <Text size="sm" c="dimmed">
        have {props.keyCount} lisance keys
      </Text>
    </Paper>
  );
};

export default Project;
