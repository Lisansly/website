import { Anchor, Center, Text, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    position: "sticky",
    display: "flex",
    width: "100%",
    marginTop: 100,
    padding: theme.spacing.xs,
    paddingRight: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[3]
    }`,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[2],
  },
  text: {
    fontSize: 12.5,
  },
  link: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.gray[0]
        : theme.colors.dark[9],
  },
}));

const Footer = () => {
  const { classes } = useStyles();
  return (
    <Center className={classes.footer}>
      <Text className={classes.text}>
        Developed by{" "}
        <Anchor
          className={classes.link}
          target="_blank"
          href="https://github.com/Lisansly"
        >
          Lisansly
        </Anchor>{" "}
        ❤️
      </Text>
    </Center>
  );
};

export default Footer;
