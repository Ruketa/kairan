import { IAuthorizeGateway } from "@/Frontend/UseCase/gateway/IAuthorizeGateway";

import firebase from "firebase/app";
import "firebase/auth";

export class FirebaseAuthorizeGateway extends IAuthorizeGateway {
  // firebaseのプロジェクト設定情報
  private readonly firebaseConfig = {
    apiKey: "AIzaSyBUWsD5Ec2KBvSYnzaN_b7TwI29BVDWIUc",
    authDomain: "fir-rtc-48c2e.firebaseapp.com",
    databaseURL: "https://fir-rtc-48c2e.firebaseio.com",
    projectId: "fir-rtc-48c2e",
    storageBucket: "fir-rtc-48c2e.appspot.com",
    messagingSenderId: "717493083453",
    appId: "1:717493083453:web:026d697224a5bc307bb954",
    measurementId: "G-1F6HJCLQ7L",
  };

  /**
   * コンストラクタ
   */
  constructor() {
    super();

    if (firebase.apps.length === 0) {
      firebase.initializeApp(this.firebaseConfig);
    }
  }

  authorize(account_name: string, password: string): Promise<boolean> {
    const auth = firebase.auth();
    const result = auth
      .signInWithEmailAndPassword(account_name, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign in success ", user);
        return true;
      })
      .catch((error) => {
        console.log("sign in is failed ", error);
        return false;
      });

    return result;
  }

  signup(account_name: string, password: string): Promise<boolean> {
    const auth = firebase.auth();
    const result = auth
      .createUserWithEmailAndPassword(account_name, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("sign up success ", user);
        return true;
      })
      .catch((error) => {
        console.log("sign up is failed ", error);
        return false;
      });

    return result;
  }
}
