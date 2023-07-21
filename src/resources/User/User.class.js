import { EnterpriseModel } from "@resources/Enterprise/_exports";

class UserModel {
  constructor({
    id,
    name,
    last_name,
    role,
    email,
    profile_photo,
    personal_phone,
    enterprise,
  }) {
    this.name = name;
    this.last_name = last_name;
    this.role = role;
    this.email = email;
    this.profile_photo = profile_photo;
    this.personal_phone = personal_phone;
    this.enterprise = new EnterpriseModel(enterprise || {});
    this.id = id;
  }

  setEnterprise = (enterprise_data = {}) => {
    this.enterprise = new EnterpriseModel(enterprise_data);
  };

  isExecutive = () => this.enterprise.isExecutive();
}

export default UserModel;