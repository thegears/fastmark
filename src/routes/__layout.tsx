import type { JSX } from 'react'
import { TuonoScripts } from 'tuono'
import type { TuonoLayoutProps } from 'tuono'

import '../styles/global.css'

export default function RootLayout({
  children,
}: TuonoLayoutProps): JSX.Element {
  return (
    <html>
      <head>
        <title>FastMark </title>
      </head>
      <body className='p-32 overflow-hidden h-screen'>
        <main>{children}</main>
        <TuonoScripts />
      </body>
    </html>
  )
}
