import chalk from 'chalk'
class PrimeWithFourDigits {
    substractFromPrime(PrimeNumber){
        if (PrimeNumber > 999 && PrimeNumber < 10000){
            return 10000 - PrimeNumber
        }
    }
}

export default PrimeWithFourDigits