import React from "react";
//Translations Español
import { MRT_Localization_ES } from "mantine-react-table/locales/es";
//Table
import { MantineReactTable } from "mantine-react-table";

const Table = ({ data = [], columns = [], isLoading = false }) => {
  return (
    <MantineReactTable
      localization={MRT_Localization_ES}
      initialState={{ density: 8 }}
      enableDensityToggle={false} //density toggle
      columns={columns}
      data={data}
      state={{ isLoading }}
    />
  );
};

export default Table;
