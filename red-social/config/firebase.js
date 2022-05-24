import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_APIKEY,
    authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:process.env.NEXT_PUBLIC_PROJECTID,
    storageBucket:process.env.STORAGEBUCKET,
    messagingSenderId:process.env.MESSAGESENDERID,
    appId:process.env.APPID,
    measurementId:process.env.MEASUREMENTID
}

const app = initializeApp(firebaseConfig);

export const database = getFirestore(app)
export const auth = getAuth(app)