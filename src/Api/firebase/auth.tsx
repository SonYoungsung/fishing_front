import { auth } from "./config";
import { toast } from "react-toastify";
import firebase from "firebase";

export const currentUser = (setLogin: any) => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      return setLogin(true);
    }
    return false;
  });
};

export const signOut = () => {
  return auth.signOut();
};

export const signIn = (args: any = {}) => {
  const { email, password } = args;
  // const promise = auth
  //   .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //   .then(() => auth.signInWithEmailAndPassword(email, password));

  const promise = auth.signInWithEmailAndPassword(email, password);

  promise
    .catch((err) => {
      if (err.code === "auth/user-not-found") {
        toast.error("존재하지 않는 이메일입니다. 가입 여부를 확인해주세요");
      } else if (err.code === "auth/invalid-email") {
        toast.error("이메일을 올바른 형식으로 입력해주세요");
      } else if (err.code === "auth/wrong-password") {
        toast.error("비밀번호가 일치하지 않습니다. 다시 입력해주세요");
      }
    })
    .then(() => {
      console.log("go");
      auth.onAuthStateChanged((user) => {
        console.log(user);
        if (user !== null) {
          console.log(auth.currentUser);
        }
      });
    });
};
