import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { firebase_config } from '../env'

// todo : convert to modular 
//      |- ref: https://firebase.google.com/docs/web/modular-upgrade#example_1_refactoring_an_function

/**
 * database seeder
 * @note import only when seeding the database
 */
// import { seedDatabase } from '../seed'

const config = {
    apiKey: firebase_config.REACT_APP_FIREBASE_API_KEY,
    authDomain: firebase_config.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: firebase_config.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: firebase_config.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: firebase_config.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: firebase_config.REACT_APP_FIREBASE_APP_ID,
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
