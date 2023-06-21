import { IconMail, IconPassword } from "@tabler/icons-react";
import PasswordInput from "../PasswordInput";
import TextInput from "../TextInput";
import { useState } from "react";
import Button from "../Button";
import {
  PinInput,
  Stepper,
  Anchor,
  Center,
  Group,
  Modal,
  Text,
  rem,
} from "@mantine/core";

const ForgotPassword = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [active, setActive] = useState<number>(0);
  return (
    <Group mt={"md"}>
      <Anchor
        onClick={() => setOpened(true)}
        underline={false}
        size={"sm"}
        ml={"auto"}
      >
        Forgot your password?
      </Anchor>
      <Modal
        transitionProps={{ transition: "slide-down" }}
        withCloseButton={false}
        opened={opened}
        radius={"lg"}
        size={"md"}
        overlayProps={{
          color: "gray",
          opacity: 0.55,
          blur: 3,
        }}
        onClose={() => {
          setOpened(false);
        }}
      >
        <Stepper
          active={active}
          styles={{
            stepBody: {
              display: "none",
            },
            step: {
              padding: 0,
            },
            stepIcon: {
              borderWidth: rem(4),
            },
            separator: {
              marginLeft: rem(-2),
              marginRight: rem(-2),
              height: rem(10),
            },
          }}
        >
          <Stepper.Step icon={<IconMail size={"1.2rem"} />}>
            <TextInput
              label="Email"
              placeholder="example@mail.com"
              key="email"
            />
            <Button fullWidth onClick={() => setActive(1)}>
              Send Code
            </Button>
          </Stepper.Step>
          <Stepper.Step icon={<IconPassword size={"1.4rem"} />}>
            <Center>
              <PinInput
                type="number"
                oneTimeCode
                length={6}
                size="lg"
                mt={"sm"}
                mb={"sm"}
              />
            </Center>
            <PasswordInput label="New Password" placeholder="New Password" />
            <PasswordInput
              label="Confirm new password"
              placeholder="Confirm new password"
            />

            <Button fullWidth onClick={() => setActive(2)}>
              Reset Password
            </Button>
          </Stepper.Step>
          <Stepper.Completed>
            <Text ta={"center"} size={"xl"} fw={700} mt={"sm"} mb={50}>
              Password reset successfully!
            </Text>
            <Button
              fullWidth
              onClick={() => {
                setOpened(false);
                setActive(0);
              }}
            >
              Close
            </Button>
          </Stepper.Completed>
        </Stepper>
      </Modal>
    </Group>
  );
};

export default ForgotPassword;
