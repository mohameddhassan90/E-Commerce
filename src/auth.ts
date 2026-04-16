import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

export const nextAuthConfig: NextAuthOptions = {
    providers: [
        Credentials({
            name: `Credentials`,
            credentials: {
                email: { label: `Email`, type: `email`, placeholder: `Enter Your Email` },
                password: { label: `Password`, type: `password`, placeholder: `Enter Your Password` },
            },
            authorize: async (credentials) => {
                const data = await fetch(`${process.env.API}auth/signin`, {
                    method: `POST`,
                    body: JSON.stringify({
                        email: credentials?.email,
                        password: credentials?.password,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (!data.ok) {
                    throw new Error(data?.statusText || `Failed to sign in`);
                }
                const response = await data.json();
                const { name, email } = response?.user
                const tokenData = jwtDecode<{ id: string }>(response?.token)

                return {
                    email: email,
                    name: name,
                    id: tokenData?.id,
                    token: response?.token
                }
            }
        })],


    callbacks: {
        jwt({ token, user }) {

            if (user) {
                token.id = user.id!
                token.name = user.name!
                token.email = user.email!
                token.token = user.token!
            }

            return token

        },

        session: ({ session, token }) => {

            if (token) {
                session.user.id = token.id!
                session.user.name = token.name!
                session.user.email = token.email!
            }
            
            return session
        }
    },

    pages: {
        signIn: `/signin`
    }
};