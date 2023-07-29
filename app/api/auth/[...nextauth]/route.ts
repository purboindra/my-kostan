import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        name: {
          label: "name",
          type: "text",
        },
        password: {
          label: "password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.name || !credentials.password || !credentials.email) {
          throw new Error("Invalid Credentials Username or Password");
        }
        const user = {
          id: "1",
          email: credentials.email,
          name: credentials.name,
          password: credentials.password,
        };
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  debug: process.env.NODE_ENV === "development",

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
