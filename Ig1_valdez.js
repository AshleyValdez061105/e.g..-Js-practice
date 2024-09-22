

//a persona data storage

const Persona1 = {
    Name: "Maria Delos Santos Las Manas",
    Age: 25,
    Address : "Upper Session Road Baguio City Benguel"
}
const Persona2 = {
    Name: "Juan Gamoso Dela Cruz",
    Age: 29,
    Address : "San Nicolas Candon City, LLocos Sur"
}

//b rearrange name sequence

// for persona1

let persona1_name_split = Persona1.Name.split(" ");
Persona1.Name = `${persona1_name_split.pop()} ${persona1_name_split.slice(1).join(" ")} ${persona1_name_split[0]}`;
console.log(Persona1)
// for persona2

let persona2_name_split = Persona2.Name.split(" ");
Persona2.Name = `${persona2_name_split.pop()} ${persona2_name_split.slice(1).join(" ")} ${persona2_name_split[0]}`;

// b completed

// c console log out

console.log(`${Persona1.Name} ${Persona1.Age} ${Persona1.Address}`)
console.log(`${Persona2.Name} ${Persona2.Age} ${Persona2.Address}`)


// c completed

// d variable manipulation

const persona1_name_length = Persona1.Name.length
const persona1_address_length = Persona1.Address.length
const persona2_name_length = Persona2.Name.length
const persona2_address_length = Persona2.Name.length

// d completed 


// e operations
// 1 sum all numeric values

const sum_of_all_numeric = persona1_name_length 
                         + persona1_address_length 
                         + persona2_name_length
                         + persona2_address_length

// 2 adding ages

let persona_ages = Persona1.Age + Persona2.Age
persona_ages = (persona_ages - persona1_name_length) * persona2_name_length

// 3 raise length

let raised_address = Math.pow(persona1_address_length,persona2_address_length)

// e completed
  
