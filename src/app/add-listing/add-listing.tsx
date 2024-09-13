import Banner from '@/components/banner'
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
              <iframe
                className="airtable-embed"
                src={embed_link}
                frameBorder="0"
                // onmousewheel=""
                width="100%"
                height="533"
                style={{ background: 'transparent', border: '1px solid #ccc' }}
              ></iframe>
            </div>

            <Banner />
          </div>
        </Transition>
      </main>
    </Layout>
  )
}

export default AddListing
