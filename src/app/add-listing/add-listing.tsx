import { CardTitle } from '@/components/ui/card'
import Banner from '@/components/banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Layout from '@/components/layout'
import NavigationSection from '@/components/NavigationSection'
import Transition from '@/components/Transition'

type Props = {
  embed_link: string
}

const AddListing = ({ embed_link }: Props) => {
  return (
    <Layout>
      <Header href="/[slug]" />
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 bg-[#f1f5f9] md:gap-8">
        <Transition>
          <div
            className="flex w-full flex-col items-center justify-center bg-cover bg-center p-16"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            }}
          >
            <p className="text-xl text-white">
              ASKING QUESTIONS MAKE GREAT THINGS HAPPEN
            </p>
          </div>

          {/* Content */}
          <div className="mx-auto grid w-full grow items-start gap-6 p-4 md:grid-cols-1 lg:w-10/12 lg:grid-cols-[2fr_7fr_3fr]">
            <NavigationSection currentHref="/[slug]" />

            <div>
              <CardTitle className="mb-4">New Listing</CardTitle>
              <iframe
                className="airtable-embed min-h-[200vh] border border-gray-300 bg-transparent lg:min-h-screen"
                src={embed_link}
                frameBorder="0"
                // onmousewheel=""
                width="100%"
                height="533"
              ></iframe>
            </div>

            <Banner />
          </div>

          <Footer />
        </Transition>
      </main>
    </Layout>
  )
}

export default AddListing
