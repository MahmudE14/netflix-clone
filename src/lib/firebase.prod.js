import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// todo : convert to modular 
//      |- ref: https://firebase.google.com/docs/web/modular-upgrade#example_1_refactoring_an_function

/**
 * database seeder
 * @note import only when seeding the database
 */
// import { seedDatabase } from '../seed'

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
}

const firebase = Firebase.initializeApp(config)

/**
 * seed database
 * @note
 * !!! WARNING: Run only once !!!
 * Or else, data duplication will occur
 * @note After seeding the database, comment it again
 *      so data duplication will not happen
 */
// seedDatabase(firebase)

export { firebase }
