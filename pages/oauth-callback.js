import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // OAuth 2.0: Extracting the code parameter from URL
    const { code, state } = router.query;
    
    if (!code) {
      console.log("OAuth authorization code is missing");
      // Handle missing code, possibly redirect or show an error message
      return;
    }

    console.log('OAuth Code:', code);
    console.log('State:', state);

    // Here, you would typically send 'code' to your backend server
    // where you can securely exchange it for an access token.
    // Make sure to also validate 'state' to mitigate CSRF attacks.

    // Redirect the user or perform further actions as necessary
    // router.push('/some-next-step');

  }, [router.isReady, router.query]);

  return (
    <div>
      <h1>OAuth Callback</h1>
      <p>Processing...</p>
      {/* Display any relevant information or further instructions */}
    </div>
  );
}
