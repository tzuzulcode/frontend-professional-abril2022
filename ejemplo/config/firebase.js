import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey:process.env.APIKEY,
    authDomain:process.env.AUTHDOMAIN,
    projectId:process.env.PROJECTID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId:process.env.MESSAGESENDERID,
    appId:process.env.APPID,
    measurementId:process.env.MEASUREMENTID
}

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)