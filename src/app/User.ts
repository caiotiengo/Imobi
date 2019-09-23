import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'
import {Storage} from '@ionic/storage';

interface user {
    email: string;
    uid: string;

}

@Injectable()
export class UserService {
    private user: user
    private firstname: any;
    private lastname: any;

    constructor(private afAuth: AngularFireAuth ,private storage: Storage) {

    }

    setUser(user: user) {
        this.user = user;


    }

    getUsername(): string {
        this.storage.set('email', this.user.email);

        return this.user.email
    }

    reAuth(email: string, password: string) {
        return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(email, password))
    }

    updatePassword(newpassword: string) {
        return this.afAuth.auth.currentUser.updatePassword(newpassword)
    }

    updateEmail(newemail: string) {
        return this.afAuth.auth.currentUser.updateEmail(newemail)
    }

    async isAuthenticated() {
        if(this.user) return true

        const user = await this.afAuth.authState.pipe(first()).toPromise()

        if(user) {
            this.setUser({
                email: user.email.split('@')[0],
                uid: user.uid
            })

            return true
        }
        return false
    }

    getUID(): string {
        return this.user.uid
    }
}
