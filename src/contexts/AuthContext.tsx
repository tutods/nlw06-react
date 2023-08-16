import { createContext, ReactNode, useEffect, useState } from 'react';
import { auth, firebase } from 'utils/services/firebase';

type UserType = { id: string; name: string; avatar: string };

export type AuthContextProps = {
  user: UserType | undefined;
  signInWithGoogle: () => Promise<void>;
};

type AuthproviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthContextProvider = ({ children }: AuthproviderProps) => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user;

        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account');
        }

        setUser({ id: uid, name: displayName, avatar: photoURL });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signInWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);

    if (result.user) {
      const { displayName, photoURL, uid } = result.user;

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account');
      }

      setUser({ id: uid, name: displayName, avatar: photoURL });
    }
  };

  return <AuthContext.Provider value={{ user, signInWithGoogle }}>{children}</AuthContext.Provider>;
};
