module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("users", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ 'Nom' est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Nom est un champ obligatoire !" }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Email est un champ obligatoire !" }
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Votre champ est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Password est un champ obligatoire !" }
            }
        },
        role: {
            type: DataTypes.STRING
        }
    })

    return User
}