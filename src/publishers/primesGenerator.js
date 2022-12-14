import EventEmitter from "events"

class Prime extends EventEmitter {
    constructor(limitNumber) {
        super()
        this._firstNumber = 2
        this._limitNumber = limitNumber
    }
    *generator() {
        for (let i = this._firstNumber ; i < this._limitNumber ; i++){
            if (this.isPrime(i)){
                yield i
                this.emit('start', i)
            }
        }
    }
    isPrime(num) {
        for (let i = 2, numSqrt = Math.floor(Math.sqrt(num)) ; i <= numSqrt ; i++){
            if (num % i === 0) {return false}
        }
        return num > 1
    }
}
export default Prime