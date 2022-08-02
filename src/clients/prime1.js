import chalk from "chalk"
class EndWithOne {
    ifEndWithOne(primeNumber){
        if (primeNumber % 10 === 1) console.log(chalk.red(primeNumber))
    }
}

export default EndWithOne