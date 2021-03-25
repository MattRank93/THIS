// import bigchaindb-orm
//import config from 'bigchaindb.config.json';
//const assetConfig = require ('asset.config.json')
// const Orm = require('bigchaindb-orm')
const API_PATH = 'http://192.168.0.106:9984/api/v1/'
import Orm from 'bigchaindb-orm'


// connect to BigchainDB
const bdbOrm = new Orm(
    API_PATH,
    {
        app_id: "Get one from testnet.bigchaindb.com",
        app_key: "Get one from testnet.bigchaindb.com"
    }
)


// define(<model name>,<additional information>)
// <model name>: represents the name of model you want to store
// <additional inf.>: any information you want to pass about the model (can be string or object)
// note: cannot be changed once set!
bdbOrm.define("myModel", "https://schema.org/v1/myModel")


// create a public and private key for Alice
const aliceKeypair = new bdbOrm.driver.Ed25519Keypair()


// from the defined models in our bdbOrm we create an asset with Alice as owner
    bdbOrm.models.model
        .create({
            keypair: aliceKeypair,
            data: { key: 'dataValue' }
        })
        .then(asset => {
            /*
                asset is an object with all our data and functions
                asset.id equals the id of the asset
                asset.data is data of the last (unspent) transaction
                asset.transactionHistory gives the full raw transaction history
                Note: Raw transaction history has different object structure then
                asset. You can find specific data change in metadata property.
            */
            console.log(asset.id)
        })






// get all objects with retrieve()
// or get a specific object with retrieve(object.id)
bdbOrm.models.model
    .retrieve()
    .then(assets => {
        // assets is an array of myModel
        console.log(assets.map(asset => asset.id))
    })
