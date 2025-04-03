export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  type: "route" | "anchor" | "dropdown";
  submenu?: Menu[];
};