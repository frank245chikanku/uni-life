import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Drawer, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const FinancialSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "financial",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/financial/chapter1",
          label: (
            <Link to="/financial/chapter1" onClick={closeDrawer}>
              Understanding Financial Strain
            </Link>
          ),
        },
        {
          key: "/financial/chapter1/sub2",
          label: (
            <Link to="/financial/chapter1/sub2" onClick={closeDrawer}>
              Importance of Saving
            </Link>
          ),
        },
        {
          key: "/financial/chapter1/sub3",
          label: (
            <Link to="/financial/chapter1/sub3" onClick={closeDrawer}>
              Living Below Your Means
            </Link>
          ),
        },
        {
          key: "/financial/chapter1/sub4",
          label: (
            <Link to="/financial/chapter1/sub4" onClick={closeDrawer}>
              Avoiding Debt
            </Link>
          ),
        },
        {
          key: "/financial/chapter1/sub5",
          label: (
            <Link to="/financial/chapter1/sub5" onClick={closeDrawer}>
              Diversifying Income Streams
            </Link>
          ),
        },
      ],
    },
    {
      key: "financial2",
      label: "Chapter 2",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/financial/chapter2/sub1",
          label: (
            <Link to="/financial/chapter2/sub1" onClick={closeDrawer}>
              Financial Literacy
            </Link>
          ),
        },
        {
          key: "/financial/chapter2/sub2",
          label: (
            <Link to="/financial/chapter2/sub2" onClick={closeDrawer}>
              Tracking Your Expenses
            </Link>
          ),
        },
        {
          key: "/financial/chapter2/sub3",
          label: (
            <Link to="/financial/chapter2/sub3" onClick={closeDrawer}>
              Creating a Financial Safety Net
            </Link>
          ),
        },
        {
          key: "/financial/chapter2/sub4",
          label: (
            <Link to="/financial/chapter2/sub4" onClick={closeDrawer}>
              Assessing Your Financial Values
            </Link>
          ),
        },
        {
          key: "/financial/chapter2/sub5",
          label: (
            <Link to="/financial/chapter2/sub5" onClick={closeDrawer}>
              The Benefits of Minimalism
            </Link>
          ),
        },
      ],
    },
    {
      key: "financial3",
      label: "Chapter 3",
      icon: <SettingOutlined />,
      children: [
        {
          key: "/financial/chapter3/sub1",
          label: (
            <Link to="/financial/chapter3/sub1" onClick={closeDrawer}>
              Navigating Financial Failure
            </Link>
          ),
        },
        {
          key: "/financial/chapter3/sub2",
          label: (
            <Link to="/financial/chapter3/sub2" onClick={closeDrawer}>
              The Importance of Accountability
            </Link>
          ),
        },
        {
          key: "/financial/chapter3/sub3",
          label: (
            <Link to="/financial/chapter3/sub3" onClick={closeDrawer}>
              Confronting Your Financial Fears
            </Link>
          ),
        },
        {
          key: "/financial/chapter3/sub4",
          label: (
            <Link to="/financial/chapter3/sub4" onClick={closeDrawer}>
              The Ripple Effect of Financial Decisions
            </Link>
          ),
        },
        {
          key: "/financial/chapter3/sub5",
          label: (
            <Link to="/financial/chapter3/sub5" onClick={closeDrawer}>
              The Art of Delayed Gratification
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["financial", "financial2", "financial3"]}
      mode="inline"
      items={items}
      className="custom-menu text-base"
    />
  );

  return (
    <>
      <div className="md:hidden mb-4">
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)}>
          Menu
        </Button>
      </div>

      <Drawer
        title="Chapters"
        placement="left"
        onClose={closeDrawer}
        open={open}
        className="md:hidden"
        bodyStyle={{ padding: 0 }}
      >
        {menu}
      </Drawer>

      <div className="hidden md:block">{menu}</div>
    </>
  );
};

export default FinancialSidebar;
