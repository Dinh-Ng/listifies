/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header'
import Layout from '@/components/layout'
import Transition from '@/components/Transition'

export default function Agent() {
  return (
    <Layout>
      <Header href="/[slug]" />
      <main className="bg-muted/40 flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 md:gap-8">
        <Transition>
          <div
            className="relative flex w-full flex-col bg-cover bg-center py-16"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%,rgba(0,0,0,0.3) 100%), url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914')",
            }}
          >
            <div className='absolute'>
              <p>s</p>
            </div>
          </div>
        </Transition>
      </main>
    </Layout>
  )
}
