'use client';

// These styles apply to every route in the application
import '../styles/scss/global.scss';
import { Title } from '../components/title/title';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <head>
          <Title />
        </head>
        <body className="container">{children}</body>
      </html>
    )
  }