import { BACKEND_URL, Method } from '../const.ts'
import { Photo, Post, PostData, PostUpdateData, UsePostItem } from '../types/post.ts'
import { toast } from 'react-hot-toast'
import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { createPostAPI, deletePostAPI, updatePostAPI } from '../service/post-crud.ts'

export const usePostItem = create<UsePostItem>()(
  immer((set, get) => ({
    post: null,
    photo: null,
    currentId: null,
    setCurrentId: (id) =>
      set(() => ({
        currentId: id
      })),
    loading: false,
    getPost: async () => {
      set((state) => {
        state.loading = true
      })

      const id = get().currentId;

      const url = new URL(`${BACKEND_URL}/posts/${id}`)
      try {
        const response = await fetch(url)
        const json = (await response.json()) as Post
        set((state) => {
          state.post = json
          state.loading = false
        })
      } catch (error) {
        toast.error('Ошибка загрузки поста')
      } finally {
        set((state) => {
          state.loading = false
        })
      }
    },
    getPhoto: async () => {
      set((state) => {
        state.loading = true
      })

      const id = get().currentId;

      const url = new URL(`${BACKEND_URL}/photos/${id}`)
      try {
        const response = await fetch(url)
        const json = (await response.json()) as Photo
        set((state) => {
          state.photo = json
          state.loading = false
        })
      } catch (error) {
        toast.error('Ошибка загрузки изображения')
      } finally {
        set((state) => {
          state.loading = false
        })
      }
    },
    dropData: () =>
      set(() => ({
        photo: null,
        post: null,
        currentId: null,
        method: Method.Read,
        updateData: null,
      })),
    createPost: async (data: PostData) => {
      set({ loading: true })
      try {
        const response = await createPostAPI(data)
        return response
      } catch (error) {
        console.error('Ошибка отправки данных:', error)
        throw error
      } finally {
        set({ loading: false })
      }
    },
    updatePost: async (data: Post) => {
      set({ loading: true })
      try {
        const response = await updatePostAPI(data)
        return response
      } catch (error) {
        console.error('Ошибка обновления данных:', error)
        throw error
      } finally {
        set({ loading: false })
      }
    },
    deletePost: async (id: string) => {
      set({ loading: true })
      try {
        const response = await deletePostAPI(id)
        return response
      } catch (error) {
        console.error('Ошибка удаления данных:', error)
        throw error
      } finally {
        set({ loading: false })
      }
    },
    method: Method.Read,
    setMethod: (arg: string) => set(() => ({
      method: arg,
    })),
    updateData: null,
    setUpdateData: (data: PostUpdateData) => set(() => ({
      updateData: data,
    })),
    isModalActive: false,
    setIsModalActive: (arg: boolean) => set(() => ({
      isModalActive: arg,
    })),
    createData: null,
    setCreateData: (data: PostUpdateData) => set(() => ({
      createData: data,
    })),
  }))
)
