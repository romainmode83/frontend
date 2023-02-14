import client from '@/client'
import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

export function PostComponent({ props }) {
  const { title, _createdAt, mainImage, author, slug } = props
  return (
    <div className="w-max overflow-hidden rounded-lg bg-gray-100 shadow-lg hover:bg-gray-200">
      <div className="relative h-64 w-96">
        <Link href={`/post/${encodeURIComponent(slug.current)}`}>
          <Image
            fill
            className="overflow-hidden object-cover"
            src={urlFor(mainImage).width(400).url()}
            alt="main image"
          />
        </Link>
      </div>
      <div className=" p-6 ">
        <Link href={`/post/${encodeURIComponent(slug.current)}`}>
          <h2 className="text-xl font-semibold">{title}</h2>
        </Link>
        <div className=" text-sm text-gray-600">
          {new Date(_createdAt).toLocaleDateString('fr-fr', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </div>

        <div className="mt-2 text-sm  "> {author.name}</div>
      </div>
    </div>
  )
}
