import { Paper, Skeleton, Text, createStyles } from "@mantine/core";
import { NavigateFunction } from "react-router-dom";

export type ProjectProps = {
  keyCount: number;
  name: string;
  path: string;
};

const Project = ({
  navigate,
  loading,
  props,
}: {
  navigate: NavigateFunction;
  props: ProjectProps;
  loading: boolean;
}) => {
  const useStyles = createStyles((theme) => ({
    paper: {
      padding: theme.spacing.lg,
      paddingRight: 110,
      paddingBottom: 125,
      transition: "all 200ms ease",
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[0],

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
    <Skeleton visible={loading}>
      <Paper
        withBorder
        onClick={() => navigate(props.path)}
        className={classes.paper}
      >
        <Text size="xl" className={classes.name}>
          {props.name}
        </Text>
        <Text size="sm" c="dimmed">
          have {props.keyCount} lisance keys
        </Text>
      </Paper>
    </Skeleton>
  );
};

export default Project;
