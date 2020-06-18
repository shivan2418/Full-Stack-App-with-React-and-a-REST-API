const Sequelize = require("sequelize");

module.exports = (sequelize) => {
  class User extends Sequelize.Model {}
  User.init(
    {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: '"firstName" is required' } },
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: '"lastName" is required' } },
      },
      emailAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: '"emailAddress" is required' } },
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: { msg: '"password" is required' } },
      },
    },
    { sequelize }
  );
  User.associate = (models) => {
    User.hasMany(models.Course, {foreignKey:{fieldName:"userId",allowNull:false}});
  }

  return User;
};
