import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'
import Image from 'next/image'
import { Container } from '@/components/Container'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <Image
          className="mx-auto py-6"
          src={urlFor(value)
            .width(800)
            .height(400)
            .fit('max')
            .auto('format')
            .url()}
          width={600}
          height={300}
          alt={value.alt || ' '}
        />
      )
    },
  },
}

const Post = ({ post }) => {
  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    body = [],
  } = post
  return (
    <Container>
      <div className="mt-10">
        <article>
          <h1 className="pb-8 text-3xl font-semibold tracking-wide">{title}</h1>
          <PortableText value={body} components={ptComponents} />
          <div className="flex justify-between">
            {categories && (
              <ul className="mt-4">
                <div className="italic">Article posted in :</div>
                {categories.map((category) => (
                  <li key={category}>{category}</li>
                ))}
              </ul>
            )}
            <div className="flex w-64 items-center justify-start gap-x-4 rounded-full py-2 px-4 hover:cursor-pointer hover:border-2 hover:bg-gray-100 hover:shadow-md">
              {authorImage && (
                <div className="relative h-12 w-12">
                  <Image
                    fill
                    className="overflow-hidden rounded-full object-cover"
                    src={urlFor(authorImage).width(50).url()}
                    alt="picture of the author"
                  />
                </div>
              )}
              <div className=" font-semibold">{name}</div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`
export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post,
    },
  }
}
export default Post
