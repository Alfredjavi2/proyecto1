import Constants from "@infra/Constants";

class EnterpriseModel {
  constructor({ id, type }) {
    this.id = id;
    this.type = type;
  }

  isExecutive = () => this.type === Constants.enterpriseTypes.executive;
}

export default EnterpriseModel;
