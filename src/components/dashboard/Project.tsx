import { Paper, Text, createStyles } from "@mantine/core";
import { NavigateFunction } from "react-router-dom";

export type ProjectProps = {
  keyCount: number;
  name: string;
  path: string;
};

const Project = ({
  projectsCount,
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
      [theme.fn.largerThan("md")]: {
        width: `calc(100% / ${
          projectsCount === 4 ? 2 : projectsCount <= 3 ? 1 : 3
        } ${
          projectsCount >= 5 ? " - 11px" : projectsCount >= 4 ? " - 8px" : ""
        })`,
      },
      [theme.fn.smallerThan("md")]: {
        width: "100%",
      },
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
      withBorder
      className={classes.project}
      onClick={() => navigate(props.path)}
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
