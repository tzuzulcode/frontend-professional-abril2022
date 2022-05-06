import React from 'react'
import { auth } from '../../config/firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import {GoogleAuthProvider,EmailAuthProvider} from 'firebase/auth'

const config = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
    ],
}

export default function login() {
  return (
    <div>
        <StyledFirebaseAuth uiConfig={config} firebaseAuth={auth}/>
    </div>
  )
}
