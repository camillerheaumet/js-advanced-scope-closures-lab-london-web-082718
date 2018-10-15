function produceDrivingRange(range){
    return function (starting, ending) {
        let blockRange = (parseInt(ending, 10) - parseInt(starting, 10))
        if (blockRange <= range){
            return `within range by ${(range - blockRange)}`
        } else {
            return `${(blockRange - range)} blocks out of range`
        }
    }
}

function produceTipCalculator(tipPercent){
    return function (amount) {
        return tipPercent * amount
    }
}

function createDriver(){
    let driverId = 0
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++driverId
        }
    }
}
let Driver = createDriver()