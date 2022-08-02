import Prime from "./publishers/primesGenerator.js";
import EndWithOne from "./clients/prime1.js";
import Merssene from "./clients/mersenne.js";
import PrimeWithFourDigits from "./clients/prime4Digits.js";

export default function PrimeNumberService(number) {

    const primeGenerator = new Prime(number)
    const mersenne = new Merssene()
    const prime1 = new EndWithOne()
    const primeWithFourDigits = new PrimeWithFourDigits()
    
    primeGenerator.on("start", mersenne.ifMerssene)
    primeGenerator.on("start", prime1.ifEndWithOne)
    primeGenerator.on("start", primeWithFourDigits.substractFromPrime)
    
    for (let number of primeGenerator.generator()){}
}
