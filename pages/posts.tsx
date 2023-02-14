import { Container } from '@/components/Container'
import groq from 'groq'
import client from '../client'
import { PostComponent } from '@/components/PostComponent'

const Posts = ({ posts }) => {
  return (
    <Container>
      <header className="flex h-32 flex-col items-center justify-center pt-6">
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-800">
          {' '}
          Nos derniers articles{' '}
        </h1>
        <p className="mx-12 mt-4 text-xl">
          {' '}
          Nos derniers articles, sur le développement web, HTML, CSS,
          Javascript, PHP... Et notre apprentissage.
        </p>
      </header>
      <div className="max-w-large mx-auto mt-12 grid gap-5 lg:max-w-none lg:grid-cols-3">
        {posts.length > 0 &&
          posts.map((post) => {
            return <PostComponent props={post} key={posts._id}></PostComponent>
          })}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
        *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
          title, _createdAt, mainImage, author->{name}, slug, author->{image->{asset}}
        }
      `)
  return {
    props: {
      posts,
    },
  }
}

export default Posts
