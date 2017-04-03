class MathCalcs{
    static power (a, b) {
        if (isNaN(a) || isNaN(b))
          return NaN
        let result = a
        for (let i = 1; i < b; i++) {
          result *= a
        }
        return result
    }

    static abs (a) {
        if (isNaN(a))
          return NaN
        if (a >= 0)
          return a
        else
          return -a
    }

    static max (a, b) {
        if (isNaN(a) || isNaN(b))
          return NaN
        if (a > b)
          return a
        else
          return b
    }
}

console.log("power('apple', 'orange') = " + MathCalcs.power('apple', 'orange')) //power('apple', 'orange') = NaN
console.log("power(3,2) = " + MathCalcs.power(3,2)) //power(3,2) = 9
console.log("abs(5) = " + MathCalcs.abs(5)) //
console.log("abs(-5) = " + MathCalcs.abs(-5)) //
console.log("max(4,7) = " + MathCalcs.max(4,7)) //
