import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function OAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const { code, state } = router.query;
      if (code) {
        // Correctly use the code and state from the router's query parameters
        fetch('/api/exchange-token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        code: 'AUTHORIZATION_CODE_HERE', // Replace with the actual authorization code
        // Include any other required data
    }),
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
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
