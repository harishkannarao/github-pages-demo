// These styles apply to every route in the application
import '../styles/scss/global.scss';
import { Title } from '../components/title/title';
import { TitleContextProvider } from '../components/title/title_context';
import { CustomThemeProviders } from '../components/theme/custom_theme_provider';
import { ThemeChanger } from '../components/theme/theme_changer';
import { CustomNav } from '../components/nav/nav';
import { BasketContextProvider } from '../components/basket/basket_context';
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Demo site for showcasing github pages with next js and react',
  keywords: ['next js', 'react'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <TitleContextProvider>
      <BasketContextProvider>
        <html lang="en" suppressHydrationWarning>
          <head>
            <Title />
          </head>
          <body className="container">
            <CustomThemeProviders>
              <CustomNav />
              {children}
              <div>
                <ThemeChanger />
              </div>
            </CustomThemeProviders>
          </body>
        </html>
      </BasketContextProvider>
    </TitleContextProvider>
  )
}