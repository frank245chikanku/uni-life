import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Menu, Drawer, Button } from "antd";
import type { MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

const CareerSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);    
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "career",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/career/chapter1",
          label: (
            <Link to="/career/chapter1" onClick={closeDrawer}>
              Understanding Career Uncertainty
            </Link>
          ),
        },
        {
          key: "/career/chapter1/sub2",
          label: (
            <Link to="/career/chapter1/sub2" onClick={closeDrawer}>
              Start with What You Know
            </Link>
          ),
        },
        {
          key: "/career/chapter1/sub3",
          label: (
            <Link to="/career/chapter1/sub3" onClick={closeDrawer}>
              Define Your Values
            </Link>
          ),
        },
        {
          key: "/career/chapter1/sub4",
          label: (
            <Link to="/career/chapter1/sub4" onClick={closeDrawer}>
              Accept Responsibility
            </Link>
          ),
        },
        {
          key: "/career/chapter1/sub5",
          label: (
            <Link to="/career/chapter1/sub5" onClick={closeDrawer}>
              Build Competence
            </Link>
          ),
        },
      ],
    },
    {
      key: "career2",
      label: "Chapter 2",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/career/chapter2/sub1",
          label: (
            <Link to="/career/chapter2/sub1" onClick={closeDrawer}>
              Embrace Failure as Growth
            </Link>
          ),
        },
        {
          key: "/career/chapter2/sub2",
          label: (
            <Link to="/career/chapter2/sub2" onClick={closeDrawer}>
              Set Small Goals
            </Link>
          ),
        },
        {
          key: "/career/chapter2/sub3",
          label: (
            <Link to="/career/chapter2/sub3" onClick={closeDrawer}>
              Align Career with Character
            </Link>
          ),
        },
        {
          key: "/career/chapter2/sub4",
          label: (
            <Link to="/career/chapter2/sub4" onClick={closeDrawer}>
              Know When to Pivot
            </Link>
          ),
        },
        {
          key: "/career/chapter2/sub5",
          label: (
            <Link to="/career/chapter2/sub5" onClick={closeDrawer}>
              The Importance of Networking
            </Link>
          ),
        },
      ],
    },
    {
      key: "career3",
      label: "Chapter 3",
      icon: <SettingOutlined />,
      children: [
        {
          key: "/career/chapter3/sub1",
          label: (
            <Link to="/career/chapter3/sub1" onClick={closeDrawer}>
              Stay Grounded in Reality
            </Link>
          ),
        },
        {
          key: "/career/chapter3/sub2",
          label: (
            <Link to="/career/chapter3/sub2" onClick={closeDrawer}>
              Find Mentors, Not Idols
            </Link>
          ),
        },
        {
          key: "/career/chapter3/sub3",
          label: (
            <Link to="/career/chapter3/sub3" onClick={closeDrawer}>
              Resist Cynicism
            </Link>
          ),
        },
        {
          key: "/career/chapter3/sub4",
          label: (
            <Link to="/career/chapter3/sub4" onClick={closeDrawer}>
              Focus on Long-Term Vision
            </Link>
          ),
        },
        {
          key: "/career/chapter3/sub5",
          label: (
            <Link to="/career/chapter3/sub5" onClick={closeDrawer}>
              Define Your Legacy
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["career", "career2", "career3"]}
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

export default CareerSidebar;
