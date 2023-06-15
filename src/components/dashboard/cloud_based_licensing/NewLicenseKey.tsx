import { IconPlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import Button from "../../Button";

const NewLicenseKey = () => {
  const matches = useMediaQuery(`(max-width: 770px)`);
  return (
    <>
      <Button fullWidth={false}>
        {matches ? <IconPlus size="1rem" /> : "New License Key"}
      </Button>
    </>
  );
};

export default NewLicenseKey;
