import Link from 'next/link'
import { Container } from '../components/Container'

export function Header() {
  return (
    <Container>
      <header>
        <ul className="flex items-center justify-start gap-x-2 border-b-2 border-gray-100 py-6  md:space-x-10">
          <li className="font-medium text-gray-500 hover:text-green-900">
            <Link href="/">Accueil</Link>
          </li>
          <li className="text-base font-medium text-gray-500 hover:text-green-900">
            <Link href="/about">A propos</Link>
          </li>
          <li className="text-base font-medium text-gray-500 hover:text-green-900">
            <Link href="/posts">Le blog</Link>
          </li>
        </ul>
      </header>
    </Container>
  )
}
