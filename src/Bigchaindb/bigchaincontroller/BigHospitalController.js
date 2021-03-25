//import config from 'bigchaindb.config.json';
const driver = require('bigchaindb-driver')
const API_PATH = 'http://192.168.0.106:9984/api/v1/'


const conn = new driver.Connection(API_PATH)

exports.read_by_errthing = async (req, res) => {

    console.log(req.query)
    let object = {}
    object = req.query;
    console.log(object)
    console.log(object.state)
    const assets = await conn.searchAssets(object.state)
        .then(assets => res.json({assets}))
        .catch(err => console.log(err))
};

exports.read_by_id = async (req, res) => {

    console.log(req.query)
    let object = {}
    object = req.query;
    console.log(object)
    console.log(object.id)
    const assets = await conn.searchAssets(object.id)
        .then(assets => res.json({assets}))
        .catch(err => console.log(err))
};


exports.add_hospital = async (req, res) => {
    const matthew = new driver.Ed25519Keypair();
    let object = {}
    object = req.body;
    console.log(object)
    // const assetData = object.assetdata
    // const metadata = object.metadata

    const assetdata = {
        'Hospital': {
            'model': 'AR-15',
            'serial_number': '167409',
            'manufacturer': 'Korstog',
            'state': 'WI',
        }
    }
    const metadata = {'planet': 'earth'}


    const txCreateAliceSimple = driver.Transaction.makeCreateTransaction(
        assetdata,
        metadata,

        // A transaction needs an output
        [ driver.Transaction.makeOutput(
            driver.Transaction.makeEd25519Condition(matthew.publicKey))
        ],
        matthew.publicKey
    )
    const txCreateAliceSimpleSigned = driver.Transaction.signTransaction(txCreateAliceSimple, matthew.privateKey)
    conn.postTransactionCommit(txCreateAliceSimpleSigned)
        .then(retrievedTx => res.json(retrievedTx.id))
    // With the postTransactionCommit if the response is correct, then the transaction
    // is valid and commited to a block

    // const new_hospital = new Hospital(object);
    // await new_hospital.save(object)
    //     .then(res.sendStatus(200))
    //     .catch(err => console.log(err))
};

// let object = {}
// console.log(req.query)
//
// object = req.query;
//
// console.log(req.query)
//
// const hospital = await Hospital.find(object).exec()
//     .then(hospital => res.json({hospital}))
//     .catch(err => console.log(err))




















// 'use strict';
//
//
// const mongoose = require('mongoose'),
//    Hospital = mongoose.model('hospitals'),
//     User = mongoose.model('users');
//
//
//
// exports.read_by_errthing=  async (req, res) => {
//     let object = {}
//     console.log(req.query)
//
//     object = req.query;
//
//     console.log(req.query)
//
//     const hospital = await Hospital.find(object).exec()
//         .then(hospital => res.json({hospital}))
//         .catch(err => console.log(err))
// };
//
//
// exports.add_hospital = async (req, res) => {
//
//     let object = {}
//     object = req.body
//     const new_hospital = new Hospital(object);
//     await new_hospital.save(object)
//         .then(res.sendStatus(200))
//         .catch(err => console.log(err))
//
// }
