import Prime from "./publishers/primesGenerator.js";
import PrimeWithFourDigits from "./clients/prime4Digits.js"; 
import EndWithOne from "./clients/prime1.js";
import Merssene from "./clients/mersenne.js";

const primeGenerator = new Prime(31)
const mersenne = new Merssene()
const prime1 = new EndWithOne()

primeGenerator.on("start", mersenne.ifMerssene)
primeGenerator.on("start", prime1.ifEndWithOne)

for (let number of primeGenerator){}