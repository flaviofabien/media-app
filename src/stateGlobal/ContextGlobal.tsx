import { createContext, useState, ReactNode , useEffect, useContext } from 'react';

interface DataContextProps {
  user?: any ;
  setUser: (role : any) => void;

}

export const DataContext = createContext<DataContextProps>(
  {
    user: {
        tokken : "",
        user :  {        }
    },
    setUser : () => {},

  }
)


export const DataProvider = ({children }: { children: ReactNode }) => {
  const [user, setUserState] = useState<any>(() => (localStorage.getItem('user'))  as any || {});

  const setUser = (newRole : any) => {
    setUserState(newRole);
    localStorage.setItem('user', `${newRole}` );
  };

  useEffect(() => {
    setUser(localStorage.getItem('user') as any );
  }, []);

  return (
    <DataContext.Provider value={{  user , setUser }}>
    {children}
  </DataContext.Provider>
  );
};

export const useContextUser = () => useContext(DataContext);
