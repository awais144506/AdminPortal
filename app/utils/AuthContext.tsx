
import { useContext, useState, useEffect, createContext } from "react";
import { account } from "@/appwrite";
import LoadingPage from "../components/LoadingPage";
const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(true)
    const [errorMessage,setErrorMessage]= useState(null)
    useEffect(() => {

       checkUserStatus()
    }, [])
    const loginUser = async (userInfo) => {
        setLoading(true)
        setErrorMessage(null)
      
        try{
            let response = await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
        }catch (error) {
            
            setErrorMessage("Username or password is incorrect"); // Set error message
          }
        setLoading(false)
     }
    const loginOut = () => {
        account.deleteSession('current')
        setUser(null)
    }

    const checkUserStatus =async () => { 
        try{
            let accountDetails = await account.get()
            setUser(accountDetails)
        }
        catch{

        }
        setLoading(false)
    }
    const contextData = {
        user,
        loginUser,
        loginOut,
        errorMessage,
        checkUserStatus
    }
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <LoadingPage /> : children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => { return useContext(AuthContext) }
export default AuthContext