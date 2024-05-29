const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');
const verifyProof = require('./verifyProof');

// create the merkle tree
const merkleTree = new MerkleTree(niceList);

// root
const root = merkleTree.getRoot();

//find if alexia is on the list
const name = 'Alexia Dorman';
const index = niceList.findIndex(n => n === name);
const proof = merkleTree.getProof(index);

// verify proof
console.log(verifyProof(proof, name, root)); // alexia on hte list
