import { Layout, Menu } from "antd";
import { useEffect, useState } from "react";

const { Header } = Layout;

const SecondPage = () => {
  const [headerColor, setHeaderColor] = useState<string>("blue");

  useEffect(() => {
    const storedColor = localStorage.getItem("headerColor");
    if (storedColor) {
      setHeaderColor(storedColor);
    }
  }, []);

  return (
    <Layout>
      <Header style={{ backgroundColor: headerColor }}>
        <Menu style={{ backgroundColor: headerColor }} mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">One</Menu.Item>
          <Menu.Item key="2">Tow</Menu.Item>
          <Menu.Item key="3">Tree</Menu.Item>
        </Menu>
      </Header>
     
    </Layout>
  );
};

export default SecondPage;