module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      emailAddress: 
      {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
      hashstring: DataTypes.STRING,
      avatar: DataTypes.STRING,
      activeAccount: 
        {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    });

    User.associate = function(models) {
        User.hasMany(models.Project, {
            onDelete: "cascade"
        });
    };
    return User;
  };