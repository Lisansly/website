import { Group, Paper, createStyles } from "@mantine/core";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";
import { useState } from "react";
import Button from "../Button";

type UpdateFormProps = {
  passwordInputs?: any[];
  textInputs?: any[];
  onSubmit: any;
  form: any;
};

const useStyles = createStyles((theme) => ({
  paper: {
    borderRadius: theme.fn.radius("lg"),
    marginTop: 100,
    padding: 30,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[9]
        : theme.colors.gray[0],
    width: "100%",
    maxWidth: 420,
  },
}));

const UpdateForm = (props: UpdateFormProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { classes } = useStyles();

  const onSubmit = async (values: any) => {
    setLoading(true);
    await props.onSubmit(values);
    setLoading(false);
  };

  return (
    <Group position="center">
      <Paper
        onSubmit={props.form.onSubmit((values: any) => onSubmit(values))}
        className={classes.paper}
        component="form"
      >
        {props.textInputs?.map((input) => (
          <TextInput
            validation={input.validation}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.label}
          />
        ))}
        {props.passwordInputs?.map((input) => (
          <PasswordInput
            validation={input.validation}
            placeholder={input.placeholder as string}
            label={input.label as string}
            key={input.label}
          />
        ))}
        <Button loading={loading} fullWidth mt="xl">
          Save
        </Button>
      </Paper>
    </Group>
  );
};

export default UpdateForm;
