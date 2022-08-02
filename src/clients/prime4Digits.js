import chalk from 'chalk'

class PrimeWithFourDigits {
    substractFromPrime(PrimeNumber){
        if (PrimeNumber > 999 && PrimeNumber < 10000){
            console.log(chalk.yellow(10000-PrimeNumber),'(sub of 10000)')
            return true
        }
    }
}

export default PrimeWithFourDigits