class MyEvent {
    constructor() {
        this.listeners = {}
    }
    on(type, listener) {this.listeners[type] ? this.listeners[type].push(listener) : this.listeners[type] = [listener]}
    emit(type, ...args) {for(const listener of this.listeners[type]) {listener(...args)}}
}
export default MyEvent