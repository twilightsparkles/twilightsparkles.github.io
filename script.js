 // BMI 1

 let lHeight = 1.69 
 let lWeight = 78
 let jHeight = 1.95
 let jWeight = 92

 let jBMI = jWeight / ( jHeight * jHeight)
 let lBMI = lWeight / (lHeight * lHeight)

let cBMI = jBMI > lBMI

// TEMPERATURE

console.log(`The BMI of John is ${jBMI}.  The BMI of Lucas is ${lBMI}. It is ${cBMI} that John's BMI is higher than Lucas'.`)

const temp = prompt(`Enter Current Temperature`)
const tempvar = prompt(`Did you enter (C)elcius or (F)arignheight?`)



if (tempvar == 'F') {
    let tempc = 0.556 * (temp-32)
    console.log(`${temp} in Farenheight is ${tempc} in Celcius`)
}
else {
    let tempf = (temp*1.8) + 32
    console.log(`${temp} in Celcius is ${tempf} in Ferigheight`)
}


const temp2 = prompt(`Enter temperature between 0-600F`)

if ((temp2 > 0) && (temp2 < 600)) {
    let tempc2 = 0.556 * (temp2-32)
    console.log(`${temp2} in Farenheight is ${tempc2} in Celcius`)
}
else {
    alert(`Machine not ready to accept input that high`)
}

//BMI2

if (jBMI > lBMI){
    console.log(`Johns BMI is (${jBMI}) is higher than Lucas' (${lBMI}).`)
}
else {
    console.log(`Lucas BMI (${lBMI}) is higher than Johns' BMI (${jBMI}). `)
}