import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
  // Ensure the router is ready and query parameters are populated
  if (router.isReady) {
    const { code, state } = router.query;
    
    if (!code) {
      console.log("OAuth authorization code is missing");
      return;
    }

    console.log('OAuth Code:', code);
    console.log('State:', state);

    // Proceed with your OAuth flow, typically by sending 'code' to your backend
  }
}, [router.isReady, router.query]); // Depend on router.isReady

  return (
    <div>
      <h1>OAuth Callback</h1>
      <p>Processing...</p>
      {/* Display any relevant information or further instructions */}
    </div>
  );
}
