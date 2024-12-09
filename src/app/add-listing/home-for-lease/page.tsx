import dynamic from 'next/dynamic'

import AddListing from '../add-listing'

// Dynamically import the component with browser APIs
const BrowserSafeComponent = dynamic(
  () =>
    import('@/components/browser-safe').then((mod) => mod.BrowserSafeComponent),
  { ssr: false } // This ensures the component only renders on client-side
)

const AddHomeLease = () => {
  return (
    <>
      <AddListing embed_link="https://airtable.com/embed/appoSlkiXV4WhKEq1/pag3KadZGP2Wf17rf/form" />
      <BrowserSafeComponent />
    </>
  )
}

export default AddHomeLease
