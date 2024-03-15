import { auth } from '../firebase';
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';


const signUp = async (email: string, name: string, password: string) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    if ( methods.length > 0){
        throw new Error('auth/email-already-in-use');
    }
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(userCredential.user, { displayName: name });
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};

const signOut = async () => {
  try {
    await signOut();
  } catch (error) {
    throw error;
  }
};

export { signUp, signIn, signOut };
