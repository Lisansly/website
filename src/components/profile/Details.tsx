import {
  Box,
  Center,
  Group,
  Paper,
  Text,
  ThemeIcon,
  Tooltip,
  createStyles,
} from "@mantine/core";
import Avatar from "../Avatar";
import { AuthStateUserObject } from "react-auth-kit/dist/types";
import { IconQuestionMark } from "@tabler/icons-react";
import Button from "../Button";
import { NavigateFunction } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: theme.fn.radius("lg"),
    margin: theme.spacing.xs,
    marginTop: 100,
    padding: 30,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    width: "100%",
    maxWidth: 400,
  },
  avatar: {
    top: -60,
    position: "relative",
    marginBottom: -20,
  },
  icon: {
    top: -67.5,
    left: 42.5,
    position: "relative",
    marginBottom: -20,
    borderRadius: theme.radius.xl,
  },
}));

type DetailsProps = {
  userData: () => AuthStateUserObject | null;
  navigate: NavigateFunction;
};

const Details = (props: DetailsProps) => {
  const { classes } = useStyles();
  return (
    <Group position="center">
      <Paper className={classes.paper}>
        <Box className={classes.avatar}>
          <Avatar size="100px" />
        </Box>
        <Center>
          <Tooltip
            label="Your avatar is determined by your name, the only way to change 
             your avatar is to change your name. Avatars are generated using
             DiceBear's API."
            events={{ hover: true, focus: true, touch: true }}
            withArrow
            maw={220}
            multiline
            radius={"md"}
            fz={13}
          >
            <ThemeIcon className={classes.icon}>
              <IconQuestionMark size={"1.1rem"} />
            </ThemeIcon>
          </Tooltip>
        </Center>

        <Text ta="center" size={"xl"} fw={500}>
          {props.userData()?.name}
        </Text>
        <Text ta="center" c="dimmed" size={"md"}>
          {props.userData()?.email}
        </Text>
        <Button
          fullWidth
          mt="30px"
          onClick={() => props.navigate("/profile/edit")}
        >
          Edit
        </Button>
      </Paper>
    </Group>
  );
};

export default Details;
