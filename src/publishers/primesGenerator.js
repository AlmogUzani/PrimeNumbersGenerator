import MyEvent from "../common/myEvent.js"
import chalk from "chalk"

class Prime extends MyEvent {
    constructor(limitNumber) {
        super()
        this._firstNumber = 2
        this._limitNumber = limitNumber
    }
    generator() {
        let flag = false
        if (this._firstNumber === this._limitNumber) return
        if (this.isPrime(this._firstNumber)){
            this.emit("start",this._firstNumber)
            console.log(chalk.white(this._firstNumber))
            flag = true
        }
        this._firstNumber++
        if(flag) {setTimeout(() => this.generator(), 1000)}
        else {this.generator()}
    }
    isPrime(num) {
        for (let i = 2, numSqrt = Math.floor(Math.sqrt(num)) ; i <= numSqrt ; i++){
            if (num % i === 0) {return false}
        }
        return num > 1
    }
}
export default Prime