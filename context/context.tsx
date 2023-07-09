import { createContext, ReactElement, useContext, useState } from 'react';

interface IUserInfo {
  userName: string;
  userId: number;
}

interface IGlobalContext {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
}

//@ts-ignore
const GlobalContext = createContext<IGlobalContext>(null);

const ContextWrapper = ({ children }: { children: React.ReactElement }) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({
    userName: '',
    userId: 0,
  });

  return (
    <GlobalContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext<IGlobalContext>(GlobalContext);
};

const exportObj = {
  ContextWrapper,
  useGlobalContext,
};

export default exportObj;
