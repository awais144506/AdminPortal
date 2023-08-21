import './globals.css'
export const metadata = {
  title: 'GCUF Admin Portal',
  description: 'Created By Muhammad Awais',
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
