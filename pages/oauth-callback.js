import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OAuthCallback() {
  const router = useRouter();

 useEffect(() => {
  if (router.isReady) {
    const { code, state } = router.query;
    if (code) {
      // Send the authorization code to the backend
      fetch('/api/exchange-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code, state }),
      })
      .then(response => response.json())
      .then(data => {
        // Handle response data, e.g., access token, error messages
        console.log(data);
        // Redirect or update UI based on the response
        router.push('/dashboard');
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  }
}, [router.isReady, router.query]);

  return (
    <div>
      <h1>OAuth Callback</h1>
      <p>Processing...</p>
      {/* Display any relevant information or further instructions */}
    </div>
  );
}
