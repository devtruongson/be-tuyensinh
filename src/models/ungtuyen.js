'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class UngTuyen extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UngTuyen.init(
        {
            fullName: DataTypes.STRING,
            birthDay: DataTypes.STRING,
            address: DataTypes.STRING,
            keHoach: DataTypes.STRING,
            status: DataTypes.STRING,
            file: DataTypes.TEXT('long'),
            note: DataTypes.STRING,
            cccd: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'UngTuyen',
        },
    );
    return UngTuyen;
};
