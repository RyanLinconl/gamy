import "./reset.css";
import "./globals.css";
import { Container } from "@/components/Container";
import { Roboto } from 'next/font/google'

export const metadata = {
  title: "Gamy",
  description: "Um assistente de ia treinado e focado em Jogos!",
};

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
