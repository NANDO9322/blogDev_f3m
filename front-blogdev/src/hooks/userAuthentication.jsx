import { db } from '../firebase/config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { useState, useEffect } from 'react';

export const userAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  async function creatUser(data) {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.error(error.message);
      console.table(typeof error.message);

      let systemErrorMesssage;

      if (error.message.includes("Password")) {
        systemErrorMessage =
          "A senha precisa conter pelo menos 6 caracteres, Baaaaka!";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "O e-mail já está cadastrado, Baaaaka!";
      } else {
        systemErrorMesssage =
          "Ocorreu um erro, tente novamente mais tarde, Baaaaka!";
      }

      setLoading(false);
      setError(systemErrorMesssage);
    }
  }

  useEffect(() => {
    return () => setCancelled(true); 
  }, []);

    return {
        auth,
        creatUser,
        error,
        loading,
    }
}
