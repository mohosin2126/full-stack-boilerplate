'use strict';

const { compare, genSaltSync, hashSync } = require("bcryptjs");

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
        User.belongsTo(models.Role, {
            foreignKey: 'roleId',
            as: 'role',
            onDelete: 'CASCADE'
        });
    }

    async changePassword(oldPassword, newPassword) {
      const validPassword = await this.validatePassword(oldPassword);

      if (validPassword) {
        this.password = newPassword;
        await this.save();
      } else {
        throw new Error("Invalid password...");
      }
    }

    async validatePassword(password) {
      return await compare(password, this.password);
    }
  }

  User.init({
    roleId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    status: DataTypes.STRING,
    imHandler: DataTypes.STRING,
    imHandlerUsername: DataTypes.STRING,
    addressLineOne: DataTypes.STRING,
    addressLineTwo: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    zipCode: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeUpdate((user) => {
    if (user.changed("password")) {
      const salt = genSaltSync();
      user.password = hashSync(user.password, salt);
    }
  });

  return User;
};