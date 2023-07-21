import React, { useMemo } from "react";
import RegionsDetailLogic from "../RegionsDetail/RegionsDetail.logic";
import {
  Table,
  Text,
  PageTitle,
  Group,
  IconButton,
} from "@components/_exports";
import { Icons } from "@infra/_exports";

const RegionsTable = ({ data, isLoading }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "city",
        header: "Ciudad",
      },
      {
        accessorKey: "state",
        header: "Estado",
      },
      {
        accessorKey: "details",
        header: "Detalles",
        enableSorting: false, // disable sorting
        enableColumnActions: false, // disable actions
        enableColumnFilter: false, // disable filter,
        size: 30,
        Cell: ({ row }) => (
          <span>
            <IconButton
              variant="subtle"
              styles={(theme) => ({
                root: {
                  "&:not([data-disabled])": theme.fn.hover({
                    backgroundColor: "transparent",
                  }),
                },
              })}
              Icon={Icons.icon_eye}
              component="a"
              href={`/details/${row?.original?.id}`}
            />
          </span>
        ),
      },
    ],
    []
  );

  return (
    <>
      <PageTitle title="Regiones" />
      <Group position="apart" mb={15}>
        <Text fz="sm">Mis regiones</Text>
        <Text fz="sm" fw={700}>
          + AGREGAR REGIÓN
        </Text>
      </Group>
      <Table
        columns={columns}
        data={data?.regions || []}
        isLoading={isLoading}
      />
    </>
  );
};

export default RegionsTable;
