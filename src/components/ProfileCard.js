import { Card } from "antd";
import "./ProfileCard.css";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";
import ProfileFooter from "./ProfileFooter";
import { useState } from "react";
import EditProfileModal from "./EditProflieModal";

const ProfileCard = (props) => {
  const {
    name,
    email,
    phone,
    website,
    handleUserDelete,
    handleUserEdit
  } = props;
  const [isEditModal, setIsEditModal] = useState(false);

  const editModalProps = {
    formData: {
      name,
      email,
      phone,
      website
    },
    handleUserEdit
  };

  return (
    <Card className="profileCard" bordered={false}>
      <div className="card-detail">
        <div className="card-avatar">
          <img
            src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
            alt="Avatar"
            width="200"
          />
        </div>
        <div className="avatar-detail">
          <h3>{name}</h3>
          <div>
            <MailOutlined className="icon Profile-icon" />
            {email}
          </div>
          <div>
            <PhoneOutlined className="icon Profile-icon" />
            {phone}
          </div>
          <div>
            <GlobalOutlined className="icon Profile-icon" />
            {website}
          </div>
        </div>
        <ProfileFooter
          handleUserDelete={handleUserDelete}
          setIsEditModal={setIsEditModal}
        />
        {isEditModal && (
          <EditProfileModal
            {...editModalProps}
            isModalVisible={isEditModal}
            setIsModalVisible={setIsEditModal}
          />
        )}
      </div>
    </Card>
  );
};

export default ProfileCard;
