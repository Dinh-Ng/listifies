import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

import { db } from '../app/firebase'

// Add a new blog
export const addBlog = async (userId, blogData) => {
  try {
    const docRef = await addDoc(collection(db, 'blogs'), {
      userId,
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
export const getBlogById = async (blogId) => {
  try {
    const docRef = doc(db, 'blogs', blogId)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() }
    } else {
      throw new Error('Blog not found')
    }
  } catch (error) {
    console.error('Error getting blog: ', error)
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
