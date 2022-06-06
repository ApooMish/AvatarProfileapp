import Modal from "antd/lib/modal/Modal";
import ProfileForm from "./ProfileForm";

const EditProfileModal = ({
  isModalVisible,
  setIsModalVisible,
  handleUserEdit,
  formData
}) => {
  const handleOk = (values) => {
    handleUserEdit(values);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <ProfileForm
        handleOk={handleOk}
        handleCancel={handleCancel}
        {...formData}
      />
    </Modal>
  );
};

export default EditProfileModal;
