import Colors from "@infra/Colors";
import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      background: Colors.main_blue,
      div: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: Colors._pureWhite,
      },
    },
    burger: {
      [theme.fn.largerThan("sm")]: {
        display: "none",
      },
    },
  };
});
