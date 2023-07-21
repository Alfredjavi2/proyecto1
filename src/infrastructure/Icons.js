import {
  IconLogout,
  IconMoonStars,
  IconSun,
  IconHome2 as IconHome,
  IconBrandAppleArcade,
  IconUser,
  IconMapPin,
  IconEdit,
  IconShoppingBag,
  IconUsers,
  IconArticle,
  IconTruckLoading,
  IconChevronLeft,
  IconChevronRight,
  IconDeviceFloppy,
  IconEye,
  IconChevronDown,
} from "@tabler/icons";

import Icon from "@/components/_basics/Icon";

const Icons = (function () {
  return {
    icon_logout: IconLogout,
    icon_moonStars: IconMoonStars,
    icon_sun: IconSun,
    icon_game: IconBrandAppleArcade,
    icon_home: IconHome,
    icon_user: IconUser,
    icon_mapPin: IconMapPin,
    icon_edit: IconEdit,
    icon_shopping: IconShoppingBag,
    icon_users: IconUsers,
    icon_order: IconArticle,
    icon_provider: IconTruckLoading,
    icon_CheLeft: IconChevronLeft,
    icon_CheRight: IconChevronRight,
    icon_save: IconDeviceFloppy,
    icon_eye: IconEye,
    icon_CheDown: IconChevronDown,
  };
})();

export default Icons;
export { Icon as MyIcon };
