import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyCWfWBz3XerWofEkL_Nj7YcMQhQEtYmFs0',
  authDomain: 'crwn-db-98f79.firebaseapp.com',
  projectId: 'crwn-db-98f79',
  storageBucket: 'crwn-db-98f79.appspot.com',
  messagingSenderId: '15064653945',
  appId: '1:15064653945:web:51685ad9a374f98d7c74a8',
  measurementId: 'G-W7VBT3ZMWG',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('Error creating user ', error.message)
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
