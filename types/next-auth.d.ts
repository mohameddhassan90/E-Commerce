import NextAuth,{User} from "next-auth"
import { JWT } from "next-auth/jwt"
 
interface applicationUser {
  id: string
    token: string
    email:string
    name:string

}
declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface User {
    id: string
    token: string
    email:string
    name:string
  }

  interface Session {
    user:applicationUser
    token: string
  }
}


declare module "next-auth/jwt" {
  interface JWT extends applicationUser {
  }
}