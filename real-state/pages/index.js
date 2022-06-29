import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession()
  return (
    <>
      <h1>Home</h1>
      {console.log(session)}
      {session?<div>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>:
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
      }
    </>
  )
}
