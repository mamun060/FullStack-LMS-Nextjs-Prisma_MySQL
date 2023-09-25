import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({});

// permission especific route as a public route 
// export default authMiddleware({
//       publicRoutes: ["/test", "/contact"]
// });
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 