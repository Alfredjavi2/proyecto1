import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    navbar: {
      padding: `0 ${theme.spacing.xs}px`,
      paddingBottom: `${theme.spacing.xs}px`,
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    link: {
      ...theme.fn.focusStyles(),
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: "#09868F",
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 700,

      "&:hover": {
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[8]
            : theme.colors.gray[2],
        color: "#09868F",

        [`& .${icon}`]: {
          color: "#09868F",
        },
      },
    },

    sub_link: {
      fontWeight: 500,
      color: "#000",
    },

    linkIcon: {
      ref: icon,
      color: "#09868F",
      marginRight: theme.spacing.sm,
      transition: "transform 200ms ease",
    },

    linkActive: {
      color: "#FD8B0A",
      [`& .${icon}`]: {
        color: "#FD8B0A",
      },
    },
    chevron: {
      transition: "transform 200ms ease",
    },

    border: {
      borderTop: `2px solid #479A66`,
    },
  };
});
