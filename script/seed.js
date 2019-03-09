'use strict'

const db = require('../server/db')
const {User, Emotion} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const entries = await Promise.all([
    Emotion.create({
      color: 'blue',
      day: 'Monday',
      number: 5,
      journalEntry:
        'Lorem ipsum dolor sit amet, vix no eloquentiam consectetuer, est fabellas explicari ne. Dicam homero cetero ea vis, cu omnium accusam cum, quo ne pertinacia mediocritatem. Quo in liber mundi oblique, eripuit abhorreant sea ne. Vel hinc iisque petentium et',
      imageUrl: '',
      lifeStressors: ['Married', 'Divorced'],
      userId: 1
    }),
    Emotion.create({
      color: 'yellow',
      day: 'Tuesday',
      number: 2,
      journalEntry:
        'Sed id agam quidam. Aliquid omittam ei nec, ea cum stet veri reque, nec ne nostro aliquando. Ne mea omnis complectitur. Assum persecuti argumentum quo ei, ne nec vero meis appellantur, mel purto mundi ad',
      imageUrl: '',
      userId: 2
    }),
    Emotion.create({
      color: 'red',
      day: 'Monday',
      number: 3,
      journalEntry:
        'Ut has nobis dolore fierent. Facete tractatos explicari te vim. Pri id aliquip nominavi, velit noster molestiae est ut. Cu indoctum tincidunt dissentiet qui, no tempor repudiare his. Elitr eligendi ad vim, inani pertinacia an vel',
      imageUrl: '',
      userId: 1
    }),
    Emotion.create({
      color: 'orange',
      day: 'Monday',
      number: 4,
      journalEntry:
        'Nec lucilius pertinax vituperata ne. At vis vocibus deterruisset. Sit prodesset forensibus adversarium ne. His cibo elitr offendit ut, dicat vitae vis in. Utamur prompta imperdiet nec id, ut eos omittam voluptatibus, mel te quem forensibus',
      imageUrl: '',
      userId: 2
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${entries.length} emotions`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
