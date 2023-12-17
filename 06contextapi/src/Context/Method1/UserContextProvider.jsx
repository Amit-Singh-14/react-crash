// method 1
import { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const { user, setUser } = useState(null);
  <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;

/* we just need to wrap the app with userCOntextProvider to pass all the data to all the compoents */

/* 
    const {user} = useContext(UserContext);
    this is how we aceess the value provided 
*/
