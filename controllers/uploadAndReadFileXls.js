
const multer = require("multer");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs-extra");
const db = require('../models');

const dataBank = db.dataBank;

const uplaodAndRead = (req, res) => {
    let Storage = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, "./public/files");
        },
        filename: (req, file, callback) => {
            callback(null, file.originalname ? file.originalname : req.body.file);
        }
    });

    const upload = multer({
        storage: Storage
    }).single('file');

    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ err })
        } else {
            try {
                if (req.file.mimetype === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                    let filePath = "./public/files/" + req.file.originalname;

                    const excelData = excelToJson({
                        sourceFile: filePath,
                        header: {
                            rows: 1,
                        },
                        columnToKey: {
                            "*": "{{columnHeader}}"
                        }
                    });

                    fs.remove(filePath);

                    excelData && excelData.Feuil1 && excelData.Feuil1.map(value => {
                        dataBank.create({
                            nom: value.nom, postnom: value.postnom, prenom: value.prenom, filiere: value.filiere,
                            sexe: value.sexe, montant: value.montant, numeroRef: value.numeroRef, motif: value.motif
                        })
                            .then(response => {
                                res.status(200).json('Données enregistrées avec succès');
                            })
                            .catch(err => {
                                return res.status(500);
                            })
                    })

                } else {
                    return res.status(400).json({ error: "Format non pris en charge" });
                }
            }
            catch (errors) {
                return res.status(500).json({ error: "Erreur interne" });
            }
        }
    });
}

const getAllDataBank = (req, res) => {
    dataBank.findAll()
        .then(response => {
            res.status(200).json({
                message: "La liste de data bank a été bien trouvée",
                data: response
            })
        })
        .catch(err => {
            return res.status(500).json(err)
        })
}

module.exports = { uplaodAndRead, getAllDataBank }