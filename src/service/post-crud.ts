import { Post, PostData } from "../types/post"


export async function createPostAPI(data: PostData) {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    console.log('Successfully created')
  }

  const responseData: Post = await response.json()

  return responseData
}

export async function updatePostAPI(data: Post) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  })

  if (response.ok) {
    console.log('Successfully updated')
  }

  const responseData: Post = await response.json()

  return responseData
}

export async function deletePostAPI(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  })
  if (response.ok) {
    console.log('Successfully deleted')
  }
  return response.ok;
}
