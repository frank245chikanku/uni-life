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

const AcademicsSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const closeDrawer = () => setOpen(false);

  const items: MenuItem[] = [
    {
      key: "academics",
      label: "Chapter 1",
      icon: <MailOutlined />,
      children: [
        {
          key: "/academics/chapter1",
          label: (
            <Link to="/academics/chapter1" onClick={closeDrawer}>
              Understanding Academic Integrity
            </Link>
          ),
        },
        {
          key: "/academics/chapter1/sub2",
          label: (
            <Link to="/academics/chapter1/sub2" onClick={closeDrawer}>
              Implementing Best Practices
            </Link>
          ),
        },
        {
          key: "/academics/chapter1/sub3",
          label: (
            <Link to="/academics/chapter1/sub3" onClick={closeDrawer}>
              Addressing Violations
            </Link>
          ),
        },
        {
          key: "/academics/chapter1/sub4",
          label: (
            <Link to="/academics/chapter1/sub4" onClick={closeDrawer}>
              Promoting a Culture of Integrity
            </Link>
          ),
        },
        {
          key: "/academics/chapter1/sub5",
          label: (
            <Link to="/academics/chapter1/sub5" onClick={closeDrawer}>
              Continuous Improvement
            </Link>
          ),
        },
      ],
    },
    {
      key: "chapter2",
      label: "Chapter 2",
      icon: <AppstoreOutlined />,
      children: [
        {
          key: "/academics/chapter2/sub1",
          label: (
            <Link to="/academics/chapter2/sub1" onClick={closeDrawer}>
              Common Misunderstandings
            </Link>
          ),
        },
        {
          key: "/academics/chapter2/sub2",
          label: (
            <Link to="/academics/chapter2/sub2" onClick={closeDrawer}>
              The Role of Faculty
            </Link>
          ),
        },
        {
          key: "/academics/chapter2/sub3",
          label: (
            <Link to="/academics/chapter2/sub3" onClick={closeDrawer}>
              Student Responsibilities
            </Link>
          ),
        },
        {
          key: "/academics/chapter2/sub4",
          label: (
            <Link to="/academics/chapter2/sub4" onClick={closeDrawer}>
              Talking About Integrity
            </Link>
          ),
        },
        {
          key: "/academics/chapter2/sub5",
          label: (
            <Link to="/academics/chapter2/sub5" onClick={closeDrawer}>
              Understanding Plagiarism
            </Link>
          ),
        },
      ],
    },
    {
      key: "chapter3",
      label: "Chapter 3",
      icon: <SettingOutlined />,
      children: [
        {
          key: "/academics/chapter3/sub1",
          label: (
            <Link to="/academics/chapter3/sub1" onClick={closeDrawer}>
              Creating Integrity Pledges
            </Link>
          ),
        },
        {
          key: "/academics/chapter3/sub2",
          label: (
            <Link to="/academics/chapter3/sub2" onClick={closeDrawer}>
              Setting the Right Tone
            </Link>
          ),
        },
        {
          key: "/academics/chapter3/sub3",
          label: (
            <Link to="/academics/chapter3/sub3" onClick={closeDrawer}>
              Everyone's Involved
            </Link>
          ),
        },
        {
          key: "/academics/chapter3/sub4",
          label: (
            <Link to="/academics/chapter3/sub4" onClick={closeDrawer}>
              Check-Ins for Integrity
            </Link>
          ),
        },
        {
          key: "/academics/chapter3/sub5",
          label: (
            <Link to="/academics/chapter3/sub5" onClick={closeDrawer}>
              Acting on Feedback
            </Link>
          ),
        },
      ],
    },
  ];

  const menu = (
    <Menu
      selectedKeys={[location.pathname]}
      defaultOpenKeys={["academics", "chapter2", "chapter3"]}
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

export default AcademicsSidebar;
