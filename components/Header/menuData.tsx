// ✅ Atualização: menuData.tsx
import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "AI Workers",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Leon",
        newTab: false,
        path: "/agents/leon",
      },
      {
        id: 22,
        title: "Linda",
        newTab: false,
        path: "/agents/linda",
      },
      {
        id: 23,
        title: "Ana",
        newTab: false,
        path: "/agents/ana",
      },
      {
        id: 24,
        title: "Javi",
        newTab: false,
        path: "/agents/javi",
      },
    ],
  },
  {
    id: 3,
    title: "Company",
    newTab: false,
    path: "/#about",
  },
  {
    id: 4,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/#contact",
  },
];

export default menuData;