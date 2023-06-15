import { useParams, useSearchParams } from 'react-router-dom'

export function Post() {
  const params = useParams()
  const [qs] = useSearchParams()

  return (
    <div>
      <h1>
        Params: {params.id} <br />
        Query: {qs.get('page')} <br />
        Query: {qs}
      </h1>
    </div>
  )
}
