import firebase from 'firebase'
import { firebaseConfig } from './configuration/firebaseConfig'

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

export default function writeUserData(id: number, name: string, email: string, avatar: string, attempted: boolean, score: number) {
    database.ref('leaderboard/'+id).set({
        name,
        email,
        avatar,
        attempted,
        quiz: {
            score
        }
    });
}