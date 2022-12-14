"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jobposting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jobposting.belongsTo(models.Company, {
        foreignKey: "company_id",
        onDelete: "cascade",
      });
    }
  }
  Jobposting.init(
    {
      company_id: {
        type: DataTypes.INTEGER,
      },
      position: DataTypes.STRING,
      compensation: DataTypes.INTEGER,
      content: DataTypes.STRING,
      skill: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Jobposting",
    }
  );
  return Jobposting;
};
