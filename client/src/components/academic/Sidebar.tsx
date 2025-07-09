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
          key: "1",
          label: (
            <Link to="/academics/chapter1" onClick={closeDrawer}>
              Understanding Academic Integrity
            </Link>
          ),
        },
        {
          key: "2",
          label: (
            <Link to="/academics/chapter1/sub2" onClick={closeDrawer}>
              Implementing Best Practices
            </Link>
          ),
        },
        {
          key: "3",
          label: (
            <Link to="/academics/chapter1/sub3" onClick={closeDrawer}>
              Addressing Violations
            </Link>
          ),
        },
        {
          key: "4",
          label: (
            <Link to="/academics/chapter1/sub4" onClick={closeDrawer}>
              Promoting a Culture of Integrity
            </Link>
          ),
        },
        {
          key: "5",
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
          key: "6",
          label: (
            <Link to="/academics/chapter2/sub1" onClick={closeDrawer}>
              Common Misunderstandings
            </Link>
          ),
        },
        {
          key: "7",
          label: (
            <Link to="/academics/chapter2/sub2" onClick={closeDrawer}>
              The Role of Faculty
            </Link>
          ),
        },
        {
          key: "8",
          label: (
            <Link to="/academics/chapter2/sub3" onClick={closeDrawer}>
              Student Responsibilities
            </Link>
          ),
        },
        {
          key: "9",
          label: (
            <Link to="/academics/chapter2/sub4" onClick={closeDrawer}>
              Talking About Integrity
            </Link>
          ),
        },
        {
          key: "10",
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
          key: "11",
          label: (
            <Link to="/academics/chapter3/sub1" onClick={closeDrawer}>
              Creating Integrity Pledges
            </Link>
          ),
        },
        {
          key: "12",
          label: (
            <Link to="/academics/chapter3/sub2" onClick={closeDrawer}>
              Setting the Right Tone
            </Link>
          ),
        },
        {
          key: "13",
          label: (
            <Link to="/academics/chapter3/sub3" onClick={closeDrawer}>
              Everyone's Involved
            </Link>
          ),
        },
        {
          key: "14",
          label: (
            <Link to="/academics/chapter3/sub4" onClick={closeDrawer}>
              Check-Ins for Integrity
            </Link>
          ),
        },
        {
          key: "15",
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
      defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={["academics"]}
      mode="inline"
      items={items}
      className="text-base"
    />
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden mb-4">
        <Button icon={<MenuOutlined />} onClick={() => setOpen(true)}>
          Menu
        </Button>
      </div>

      {/* Drawer for Mobile */}
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

      {/* Static Sidebar for Desktop */}
      <div className="hidden md:block">{menu}</div>
    </>
  );
};

export default AcademicsSidebar;
