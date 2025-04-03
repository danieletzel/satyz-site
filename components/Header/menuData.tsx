import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
    type: "route",
  },
  {
    id: 2,
    title: "AI Workers",
    newTab: false,
    type: "dropdown",
    submenu: [
      {
        id: 21,
        title: "Leon",
        newTab: false,
        path: "/agents/leon",
        type: "route",
      },
      {
        id: 22,
        title: "Linda",
        newTab: false,
        path: "/agents/linda",
        type: "route",
      },
      {
        id: 23,
        title: "Ana",
        newTab: false,
        path: "/agents/ana",
        type: "route",
      },
      {
        id: 24,
        title: "Javi",
        newTab: false,
        path: "/agents/javi",
        type: "route",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    newTab: false,
    path: "about",
    type: "anchor", // <- scroll suave para id="about"
  },
  {
    id: 4,
    title: "Blog",
    newTab: false,
    path: "/blog",
    type: "route",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "contact",
    type: "anchor", // <- scroll suave para id="contact"
  },
];

export default menuData;