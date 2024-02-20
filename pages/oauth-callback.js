import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function OAuthCallback() {
    const router = useRouter()

    useEffect(() => {
        // This code runs when the component mounts
        const { oauth_token, oauth_verifier } = router.query

        // Here you can handle the OAuth tokens, for example:
        console.log('OAuth Token:', oauth_token)
        console.log('OAuth Verifier:', oauth_verifier)

        // You might want to redirect the user or perform some action here
    }, [router.query])

    return (
        <div className="container">
            <h1>OAuth Callback Handling</h1>
            {/* Display some message or perform further actions */}
            <p>Processing...</p>
        </div>
    )
}
