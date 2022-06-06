import "./styles.css";
import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "antd";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [userData, setUserData] = useState(new Map());

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      const { data } = res;
      const userMap = new Map();
      data.forEach((item) => {
        userMap.set(item.id, item);
      });
      setUserData(userMap);
    });
  }, []);

  const handleUserEdit = (id, values) => {
    console.log("edit", id, values);
    const userMap = new Map(userData);
    userMap.set(id, { ...userData.get(id), ...values });
    setUserData(userMap);
  };

  const handleUserDelete = (id) => {
    console.log("delete", id);
    const userMap = new Map(userData);
    userMap.delete(id);
    setUserData(userMap);
  };

  return (
    <div className="site-card-wrapper">
      <Row gutter={16}>
        {[...userData.keys()].map((key) => {
          const item = userData.get(key);
          return (
            <Col xs={24} sm={24} md={8} lg={8} xl={6}>
              <ProfileCard
                id={item.id}
                name={item.name}
                email={item.email}
                phone={item.phone}
                website={item.website}
                handleUserDelete={() => handleUserDelete(item.id)}
                handleUserEdit={(values) => handleUserEdit(item.id, values)}
              ></ProfileCard>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default App;
