// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Liber Mineralum',
  description: 'a book of gems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
