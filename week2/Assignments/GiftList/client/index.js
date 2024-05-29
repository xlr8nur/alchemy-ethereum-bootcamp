const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');
const serveUrl = 'http://localhost:3000';

async function main() {
    const name = process.argv[2] || "John Doe"

    console.log(name)
    const merkleTree = new MerkleTree(niceList)
    const proof = merkleTree = merkleTree.getProof(index)

    const {data:gift} = await axios.post(`${serverUrl}/gift`, {
        name,
        proof
    });

    console.log({gift});
}

main();