'use strict'

import firebase from 'firebase'
import { auth as Config } from '../config'
import apiInterface from './apiInterface'

const firebaseApp = firebase.initializeApp(Config.firebase)
const firebaseAuth = firebaseApp.auth()

export default class Firebase extends apiInterface {
  initAuth() {
    return new Promise((resolve, reject) => {
      const unsub = firebase.auth().onAuthStateChanged(
        user => {
          unsub()
          resolve(user)
        },
        error => reject(error)
      )
    })
  }

  getProvider(provider) {
    switch (provider) {
      case 'facebook':
        return firebase.auth.FacebookAuthProvider
      case 'google':
        return firebase.auth.GoogleAuthProvider
    }
  }

  fblogin(token) {
    const credential = this.getProvider('facebook').credential(token)
    return firebaseAuth.signInWithCredential(credential)
  }

  signup({ email, password }) {
    return firebaseAuth.createUserWithEmailAndPassword(email, password)
  }

  login({ email, password }) {
    return firebaseAuth.signInWithEmailAndPassword(email, password)
  }

  logout() {
    return firebaseAuth.signOut()
  }

  updateProfile(updateData) {
    if (firebaseAuth.currentUser) {
      const user = firebaseAuth.currentUser
      return user.updateProfile({
        name: user.name,
        avatar: '',
        //...etc
      })
    }
  }

  resetPassword(newPassword) {
    return firebaseAuth.currentUser.updatePassword(newPassword)
  }

  writeDataBase(path, value) {
    return firebase.database().ref(path).set(value)
  }

  updateDataBase(path, value) {
    return firebase.database().ref(path).update(value)
  }

  readDataBaseOnce(path) {
    return firebase.database().ref(path).once('value').then(res => res.val())
  }
}
