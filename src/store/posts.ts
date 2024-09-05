import { BACKEND_URL } from '../const.ts'
import { Photo, Post, UsePosts } from '../types/post.ts'
import { toast } from 'react-hot-toast'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export const usePosts = create<UsePosts>()(
  immer((set, get) => ({
    posts: [],
    photos: [],
    loading: false,
    activePage: 1,
    setActivePage: (page) =>
      set(() => ({
        activePage: page
      })),
    activePost: null,
    setActivePost: (post) => set(() => ({activePost: post})),
    getPosts: async () => {
      set((state) => {
        state.loading = true
      })

      const currentPage = get().activePage;
      const startIndex = currentPage === 1 ? 0 : currentPage * 10 - 10

      const url = new URL(`${BACKEND_URL}/posts?_start=${startIndex}&_limit=10`)
      try {
        const response = await fetch(url)
        const json = (await response.json()) as Post[]
        set((state) => {
          state.posts = json
          state.loading = false
        })
      } catch (error) {
        toast.error('Ошибка при получении списка публикаций')
      } finally {
        set((state) => {
          state.loading = false
        })
      }
    },
    getPhotos: async () => {
      set((state) => {
        state.loading = true
      })

      const currentPage = get().activePage;
      const startIndex = currentPage === 1 ? 0 : currentPage * 10 - 10

      const url = new URL(`${BACKEND_URL}/photos?_start=${startIndex}&_limit=10`)
      try {
        const response = await fetch(url)
        const json = (await response.json()) as Photo[]
        set((state) => {
          state.photos = json
          state.loading = false
        })
      } catch (error) {
        toast.error('Ошибка при получении списка изображений')
      } finally {
        set((state) => {
          state.loading = false
        })
      }
    }
  }))
)
