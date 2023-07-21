import React from "react";
import { AppShell } from "@mantine/core";

import Content from "@layout/Content";
import Navbar from "@layout/Navbar";
import Header from "@layout/Header";

// Application layout (navbar, footer, menu...)
const Main = () => {
  return (
    <AppShell navbar={<Navbar />} header={<Header />}>
      {/* Main component, shows content depending on route */}
      <Content />
    </AppShell>
  );
};

export default Main;
