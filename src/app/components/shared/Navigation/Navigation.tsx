import React from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
// import { NAVIGATION_DEMO } from "@/data/navigation";
const NAVIGATION_DEMO: NavItemType[] = [
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Home",
  //   type: "dropdown",
  //   children: demoChildMenus,
  //   isNew: true,
  // },
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Five columns",
  //   type: "megaMenu",
  //   megaMenu: megaMenuDemo,
  // },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Features",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Berkel en Rodenrijs", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bleiswijk", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Capelle aan den IJssel", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay", name: "Taxi Botlek", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-map", name: "Taxi Barendrecht", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bergschenhoek", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
    ], 
  }, 
  {
    id: ncNanoId(),
    href: "/",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Templates",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Integrations",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Customers",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Enterprise",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Pricing",
  },
];

function Navigation() {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {NAVIGATION_DEMO.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
