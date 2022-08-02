class Merssene {

    ifMerssene(primeNumber){
        if (primeNumber > 2){
            let pow = 0
            let n = 0
            while (pow <= primeNumber + 1){
                pow = parseInt(Math.pow(2, n))
                if (pow === primeNumber + 1) {return true}
                n++
            }
        }
        return false
    }
}

export default Merssene