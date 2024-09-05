export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostData = {
  title: string,
  body: string,
  userId: number,
}

export type Photo = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}

export type UsePosts = {
  posts: Post[];
  photos: Photo[];
  loading: boolean;
  activePage: number;
  setActivePage: (page: number) => void;
  activePost: string | null;
  setActivePost: (id: string) => void;
  getPosts: () => Promise<void>;
  getPhotos: () => Promise<void>;
}

export type PostUpdateData = {
  title: string,
  body: string,
}

export type UsePostItem = {
  post: Post | null;
  photo: Photo | null;
  currentId: number | null;
  setCurrentId: (id: number) => void;
  loading: boolean;
  getPost: () => Promise<void>;
  getPhoto: () => Promise<void>;
  dropData: () => void;
  createPost: (data: PostData) => Promise<Post>;
  updatePost: (data: Post) => Promise<Post>;
  deletePost: (id: string) => Promise<boolean>;
  method: string;
  setMethod: (method: string) => void;
  updateData: PostUpdateData | null;
  setUpdateData: (data: PostUpdateData) => void;
  isModalActive: boolean;
  setIsModalActive: (arg: boolean) => void;
  createData: PostUpdateData | null;
  setCreateData: (data: PostUpdateData) => void;
}
