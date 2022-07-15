import { useQuery, gql } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(gql`
    query Homes {
      homes {
        id
        title
        description
        price
        images
        location {
          city
          state
        }
      }
    }
  `)
  return (
    <>
      <h1>Home</h1>
      {console.log({loading, error, data})}
    </>
  )
}
