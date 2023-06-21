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
      borderRadius: theme.radius.lg,
      boxShadow: theme.shadows.xs,
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
        transform: "scale(1.05)",
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
      <Paper onClick={() => navigate(props.path)} className={classes.paper}>
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
