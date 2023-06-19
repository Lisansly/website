import { Box, Image, useMantineTheme } from "@mantine/core";

const DashboardImage = () => {
  const theme = useMantineTheme();
  const imagePath = `/${theme.colorScheme}-dashboard.png`;
  return (
    <Box
      sx={(theme) => ({
        maxWidth: "1000px",
        width: "100%",
        border: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[3]
        }`,
        borderRadius: 10,
        [theme.fn.smallerThan("md")]: {
          display: "none",
        },
        margin: theme.spacing.xl,
      })}
    >
      <Image src={imagePath} width={"100%"} radius={10} />
    </Box>
  );
};

export default DashboardImage;
