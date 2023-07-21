import { Auth, Icons } from "@infra/_exports";
import paths from "./paths";

// Elements of the navigation menu
// Can change according to user role

const menu = [
  {
    isSection: true,
    label: paths.names.products,
    path: paths.products,
    icon: Icons.icon_shopping,
    subMenu: [
      { label: "Mis productos", path: "/" },
      { label: "Agregar Productos", path: "/" },
      { label: "Ver por proveedor", path: "/" },
    ],
  },
  {
    isSection: true,
    label: paths.names.customers,
    path: paths.customers,
    icon: Icons.icon_users,
    subMenu: [
      { label: "Mis clientes", path: "/" },
      { label: "Agregar Clientes", path: "/" },
    ],
  },
  {
    isSection: true,
    label: paths.names.providers,
    path: paths.providers,
    icon: Icons.icon_provider,
    subMenu: [
      { label: "Mis proveedores", path: "/" },
      { label: "Agregar Proveedores", path: "/" },
    ],
  },
  {
    label: paths.names.regions,
    path: paths.regions,
    icon: Icons.icon_mapPin,
  },
  {
    label: paths.names.orders,
    path: paths.orders,
    icon: Icons.icon_order,
  },
  {
    label: paths.names.profile,
    path: paths.profile,
    icon: Icons.icon_user,
  },
];

export default menu;
