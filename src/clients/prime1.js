import chalk from "chalk"
class EndWithOne {
    ifEndWithOne(primeNumber){
        if (primeNumber % 10 === 1) console.log(chalk.red(primeNumber), '(End with 1)')
    }
}

export default EndWithOne