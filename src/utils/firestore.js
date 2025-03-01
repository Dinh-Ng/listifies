import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

import { db } from '../app/firebase'

// Add a new blog
export const addBlog = async (userId, userName, blogData) => {
  try {
    const docRef = await addDoc(collection(db, 'blogs'), {
      userId,
      userName,
      ...blogData,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'Unpublished',
    })
    return docRef.id
  } catch (error) {
    console.error('Error adding blog: ', error)
    throw error
  }
}

// Get all blogs
export const getAllBlogs = async () => {
  try {
    const q = query(collection(db, 'blogs'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting user blogs: ', error)
    throw error
  }
}

// Get all blogs for a user
export const getUserBlogs = async (userId) => {
  try {
    const q = query(collection(db, 'blogs'), where('userId', '==', userId))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting user blogs: ', error)
    throw error
  }
}

// Get a single blog by ID
/**
 * @typedef {Object} Blog
 * @property {string} id
 * @property {string} userId
 * @property {string} [title]
 * @property {string} [content]
 */

/**
 * Get a single blog by ID
 * @param {string} blogId
 * @returns {Promise<Blog>}
 */
export const getBlogById = async (blogId) => {
  try {
    if (!blogId) {
      throw new Error('Blog ID is undefined or empty')
    }
    const docRef = doc(db, 'blogs', blogId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error('Blog not found')
    }
  } catch (error) {
    console.error('Error getting blog:', error)
    throw error
  }
}

// Update a blog
export const updateBlog = async (blogId, blogData) => {
  try {
    const docRef = doc(db, 'blogs', blogId)
    await updateDoc(docRef, {
      ...blogData,
      updatedAt: new Date(),
    })
  } catch (error) {
    console.error('Error updating blog: ', error)
    throw error
  }
}

// Delete a blog
export const deleteBlog = async (blogId) => {
  try {
    await deleteDoc(doc(db, 'blogs', blogId))
  } catch (error) {
    console.error('Error deleting blog: ', error)
    throw error
  }
}

// Get the first 3 blogs for a user
export const getFirstThreeUserBlogs = async (userId) => {
  try {
    console.log('Fetching first 3 blogs for user:', userId)
    if (!userId) {
      throw new Error('User ID is undefined or empty')
    }
    const q = query(
      collection(db, 'blogs'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc'),
      limit(3)
    )
    const querySnapshot = await getDocs(q)
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log('Fetched blogs:', blogs)
    return blogs
  } catch (error) {
    throw error
  }
}

// Add a new lead
export const addLead = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'leads'), data)
    return docRef.id
  } catch (error) {
    console.error('Error adding lead: ', error)
    throw error
  }
}

// Get all leads
export const getAllLeads = async (status) => {
  try {
    let q = query(collection(db, 'leads'))
    if (status && status.trim() !== '') {
      q = query(collection(db, 'leads'), where('status', '==', status.trim()))
    }
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting leads: ', error)
    throw error
  }
}

// Get all home for sales
export const getAllHomesForSale = async () => {
  try {
    const q = query(collection(db, 'homesForSale'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting homes for sale: ', error)
    throw error
  }
}

// Add a new home for sales
export const addHomeForSale = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'homesForSale'), data)
    return docRef.id
  } catch (error) {
    console.error('Error adding home for sale: ', error)
    throw error
  }
}

// Get a single home for sale
export const getHomeForSaleById = async (homeId) => {
  try {
    if (!homeId) {
      throw new Error('Home ID is undefined or empty')
    }
    const docRef = doc(db, 'homesForSale', homeId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error('Home not found')
    }
  } catch (error) {
    console.error('Error getting home for sale:', error)
    throw error
  }
}

// Get all home for leases
export const getAllHomesForLease = async () => {
  try {
    const q = query(collection(db, 'homesForLease'))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  } catch (error) {
    console.error('Error getting homes for lease: ', error)
    throw error
  }
}

// Add a new home for lease
export const addHomeForLease = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'homesForLease'), data)
    return docRef.id
  } catch (error) {
    console.error('Error adding home for lease: ', error)
    throw error
  }
}
