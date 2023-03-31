import type { NextPage } from 'next'
import { useContext } from 'react'
import { Fade } from 'react-awesome-reveal'
import { ThemeContext } from '../components/Theme'
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'

const Home: NextPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <>
      <Meta
        title="Lotus Boilerplate"
        desc="A boilerplate framework for Lotus apps."
      />
      <div className="bg-white">
        <Header />
        <div className="flex items-center justify-center h-[calc(100vh-346px)] pb-32 mx-auto pt-36 max-w-screen-lily-container">
          <Fade duration={500} delay={400} fraction={0}>
            <div className="text-center">
              <h1 className="mb-4 font-sans font-bold text-7xl">
                Lotus Boilerplate
              </h1>
              <p className="mb-8 text-large">
                A boilerplate framework for Lotus apps.
              </p>
              <Button>Click me!</Button>
            </div>
          </Fade>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home
