import { Roboto } from 'next/font/google';
import { Provider } from '@/app/provider';
import { Header, Title, Flex, Text, NavLink, Container } from '@/components/Mantine';
import { ROUTES } from '@/utils/constants/routes';
import Link from 'next/link';
import './globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>The Rick and Morty</title>
        <meta name="description" content="Encyclopedia of the universe Rick and Morty" />
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Provider>
          <Header height="auto" py={10} mb={30}>
            <Container size="lg">
              <Flex align="center" justify="space-between">
                <Title>The Rick and Morty API</Title>
                <Flex align="center" gap="md">
                  <Link href={ROUTES.CHARACTERS.SERVER}>
                    <NavLink label={<Text fz="lg">Characters</Text>} />
                  </Link>
                  <Link href={ROUTES.LOCATIONS}>
                    <NavLink label={<Text fz="lg">Locations</Text>} />
                  </Link>
                </Flex>
              </Flex>
            </Container>
          </Header>
          <main>
            <Container size="lg">{children}</Container>
          </main>
        </Provider>
      </body>
    </html>
  );
}
