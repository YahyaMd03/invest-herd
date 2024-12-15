import { withAuth } from "next-auth/middleware";

// Protected routes: Add paths that require authentication
export default withAuth({
  pages: {
    signIn: "/login", // Redirect to sign-in page for unauthenticated users
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/accounts/:path*", "/analytics/:path*"], // Specify routes to protect
};
