const express = require('express');
const verifyProof = require('../utils/verifyProof');
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const port = 3000;

const app = express();
app.use(express.json());

const merkleTree = new MerkleTree(niceList)
const root = merkleTree.getRoot()

const MERKLE_ROOT = root;

app.post('/gift', (req,res) => {
    const body = req.body;
    const {name, proof} = body

    const isInTheList = verifyProof(proof,name,MERKLE_ROOT);
    console.log(isInTheList)
    if(isInTheList) {
        res.send("You goy a toy robot!!");
    }
    else {
        res.send("You are not on the list :/");
    }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});