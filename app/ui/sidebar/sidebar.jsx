import Image from "next/image";
import React from "react";
import styles from "./sidebar.module.css";
import {
  MdAttachMoney,
  MdDashboard,
  MdOutlineSupervisedUserCircle,
  MdShoppingBag,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";

const menuItems = [
  {
    title: "Users",
    list: [
      {
        id: 1,
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        id: 2,
        title: "Users",
        path: "/dashboard/users",
        icon: <MdOutlineSupervisedUserCircle />,
      },
      {
        id: 3,
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        id: 4,
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
];
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/avatar.svg"
          alt="avatar"
          width={50}
          height={50}
          className={styles.userImage}
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>Hello</span>
          <span className={styles.userTitle}>World</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems?.map((item) => (
          <li key={item.id}>
            <span className={styles.item}>{item.title}</span>
            {item.list.map((i) => (
              <MenuLink key={i.title} item={i} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
