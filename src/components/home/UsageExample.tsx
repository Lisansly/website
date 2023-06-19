import { Center, Tabs, createStyles } from "@mantine/core";
import { Prism } from "@mantine/prism";

const examples = [
  {
    language: "javascript",
    code: `function helloWorld() {
    console.log("Hello, World!");
}
helloWorld();`,
  },
  {
    language: "go",
    code: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
  },
  {
    language: "clike",
    code: `using System;
namespace HelloWorld
{
    class Hello
    {
        static void Main()
        {
            Console.WriteLine("Hello, World!");
        }
    }
}`,
  },
];

const useStyles = createStyles((theme) => ({
  tabs: {
    margin: theme.spacing.xs,
    height: "300px",
    width: "400px",
    [theme.fn.smallerThan("xs")]: {
      maxWidth: "300px",
    },
  },
}));

const UsageExample = () => {
  const { classes } = useStyles();
  return (
    <Tabs
      variant="pills"
      defaultValue="clike"
      radius={12}
      className={classes.tabs}
    >
      <Center>
        <Tabs.List>
          <Tabs.Tab value="clike">C#</Tabs.Tab>
          <Tabs.Tab value="go">Go</Tabs.Tab>
          <Tabs.Tab value="javascript">JavaScript</Tabs.Tab>
        </Tabs.List>
      </Center>

      {examples.map((example) => (
        <Tabs.Panel value={example.language} key={example.language} mt="xs">
          <Prism
            withLineNumbers
            language="go"
            style={{ zIndex: 0 }}
            radius={"lg"}
          >
            {example.code}
          </Prism>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

export default UsageExample;
