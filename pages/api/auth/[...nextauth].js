import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '', // Use environment variable or empty string
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '', // Use environment variable or empty string
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});
