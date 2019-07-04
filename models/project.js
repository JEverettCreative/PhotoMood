module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("project", {
      title: 
      {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
              notNull: true
          }
      },
      category: 
      {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: true
        }
      },
      user: DataTypes.STRING,
      activeAccount: 
        {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    });

    Project.associate = function(models) {
        Project.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    // Project.associate = function(models) {
    //     Project.hasMany(models.SavedImages, {
    //         onDelete: "cascade"
    //     });
    // };
    
    return Project;
  };