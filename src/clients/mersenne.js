import chalk from "chalk"
class Merssene {

    ifMerssene(primeNumber){
        if (primeNumber > 2){
            let pow = 0
            let n = 0
            while (pow <= primeNumber + 1){
                pow = parseInt(Math.pow(2, n))
                if (pow === primeNumber + 1) {
                    console.log(chalk.blue(primeNumber))
                    return true
                }
                n++
            }
        }
        return false
    }
}

export default Merssene