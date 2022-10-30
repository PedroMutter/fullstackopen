const mongoose = require('mongoose')

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@cluster0.jhahvcc.mongodb.net/phonebook?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
} else if (process.argv.length === 3) {
  mongoose
    .connect(url)
    .then((result) => {
      console.log('phonebook:')
      Person.find({}).then(result => {
        result.forEach(person => {
          console.log(person.name, person.number)
        })
        mongoose.connection.close()
      })
    })
} else if (process.argv.length === 5) {
  mongoose
    .connect(url)
    .then((result) => {
      const person = new Person({
        name: name,
        number: number,
      })

      return person.save()
    })
    .then(() => {
      console.log(`added ${name} number ${number} to phonebook`)
      return mongoose.connection.close()
    })
    .catch((err) => console.log(err))
} else {
  console.log('Incorrect arguments provided.')
  console.log('use "node mongo.js <password>" to see data added to phonebook.')
  console.log('use "node mongo.js <password> <name> <number>" to add a new entry to phonebook.')
}