import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    // Ensure the router is ready and query parameters are accessible
    if (router.isReady) {
      const { code, state } = router.query;

      // Proceed only if the code exists
      if (code) {
        fetch('/api/exchange-token', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              code, // Use the actual authorization code received from the query
              state // Optionally pass the state if your backend needs to validate it
          }),
        })
        .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          // Handle success, e.g., redirecting the user or showing a success message
          // router.push('/success-page'); // Example redirect on success
        })
        .catch(error => {
          console.error('Error:', error);
          // Handle error, e.g., showing an error message to the user
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
