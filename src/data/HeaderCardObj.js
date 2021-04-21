import { SiCakephp } from "react-icons/si";
import { GiCupcake, GiCookie } from "react-icons/gi";
import { BiCookie } from "react-icons/bi";
import {} from "react-icons/gr";

export const headerCardObj = [
  {
    name: "CAKE",
    route: "cakes",
    image: <SiCakephp className="header-menu-icon" />,
  },
  {
    name: "COOKIE",
    route: "cookie",

    image: <BiCookie className="header-menu-icon" />,
  },
  {
    name: "BROWNIE",
    route: "brownies",

    image: <GiCookie className="header-menu-icon" />,
  },
  {
    name: "CUPCAKE",
    route: "cupcakes",

    image: <GiCupcake className="header-menu-icon" />,
  },
];
