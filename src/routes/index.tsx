import type { JSX } from 'react'
import type { TuonoRouteProps } from 'tuono'
import Welcome from '../components/Welcome'
import ConverterContainer from '../components/ConverterContainer'

interface IndexProps {
  views: Int32Array
}

export default function IndexPage({
  data,
  isLoading,
}: TuonoRouteProps<IndexProps>): JSX.Element {
  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className='flex flex-col h-screen'>
        <Welcome />
        <ConverterContainer />
      </div>
    </>
  )
}
