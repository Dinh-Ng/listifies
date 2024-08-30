export type linkType =
  | '/'
  | '/blogs'
  | '/home-for-sale'
  | '/home-for-lease'
  | '/update'
  | '/[slug]'
  | '/loan-solution'

export const LinkMapping = new Map<linkType, string>()

LinkMapping.set('/', 'Home')
LinkMapping.set('/blogs', 'Blogs')
LinkMapping.set('/home-for-sale', 'Home for Sale')
LinkMapping.set('/home-for-lease', 'Home for Lease')
LinkMapping.set('/update', 'Update')
LinkMapping.set('/loan-solution', 'Loan Solution')
