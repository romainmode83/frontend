import { Container } from '@/components/Container'

const About = () => {
  return (
    <Container>
      <div className="py-6 px-4 md:px-12">
        <h1 className="text-3xl font-semibold tracking-tight">
          A propos du blog
        </h1>
        <p className="mt-4 text-gray-900 md:w-3/4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
          amet a vel facere id maxime, molestias modi minima ad, quis omnis
          deserunt? Eum, dicta facilis.
        </p>
        <p className="mt-4 text-gray-900 md:w-3/4">
          Ce site a été créé avec Next.js, Typescript, Sanity et Tailwind.
        </p>
        <p className="mt-1 text-gray-900 md:w-3/4">
          Pour me contacter ou retrouver plus de mes projets, rendez-vous ici :
        </p>
        <div className="flex items-center">
          <a href="" className="w-42 flex items-center p-2 py-6 text-gray-600 ">
            <svg
              className="mr-2"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <span> Voir mon github</span>
          </a>
          <span> ou</span>
          <a
            href=""
            className="w-42 flex items-center p-2 py-6  text-gray-600 "
          >
            <svg
              class="mr-2"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
            <span> Voir mon portfolio</span>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default About
