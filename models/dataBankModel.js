module.exports = (sequelize, DataTypes) => {
    const Bank = sequelize.define("databanks", {
        nom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ 'Nom élève' est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Nom élève est un champ obligatoire !" }
            }
        },
        postnom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ 'Postnom élève' est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Postnom élève est un champ obligatoire !" }
            }
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ 'prenom élève' est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Prenom élève est un champ obligatoire !" }
            }
        },
        sexe: {
            type: DataTypes.STRING,
        },
        filiere: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ 'Filière' est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Filière est un champ obligatoire !" }
            }
        },
        montant: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ montant est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Montant est un champ obligatoire !" }
            }
        },
        motif: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le champ motif est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "Motif est un champ obligatoire !" }
            }
        },
        numeroRef: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: { msg: "Le cham numéroRef est vide, veuillez remplir ce champ svp" },
                notNull: { msg: "numéroRef est un champ obligatoire !" }
            }
        },
        
    })

    return Bank
}