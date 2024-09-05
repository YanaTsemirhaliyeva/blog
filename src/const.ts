export const BACKEND_URL = 'https://jsonplaceholder.typicode.com';

export enum AppRoute {
  Index = '/',
  Blog = '/blog',
  Post = '/post',
}

export enum APIRoute {
  Cameras = '/cameras',
  CameraItem = '/cameras/:cameraId',
  Similar = '/cameras/:cameraId/similar',
  Promo = '/promo',
  Reviews = '/cameras/:cameraId/reviews',
  ReviewPost = '/reviews',
  Coupon = '/coupons',
  Order = '/orders',
}

export enum BtnText {
  Delete = 'Delete',
  Update = 'Update',
  CreateNew = 'Create new post',
  Create = 'Create',
  Confirm = 'Confirm update',
  Back = 'Back'
}

export enum Method {
  Read = 'Read',
  Update = 'Update',
}


export const SOCIALS = [
  {
    title: 'github',
    src: 'img/icons/github.svg',
    href: 'https://github.com/YanaTsemirhaliyeva',
  },
  {
    title: 'telegram',
    src: 'img/icons/telegram.svg',
    href: 'https://t.me/Ya_Ti3',
  },
  {
    title: 'gmail',
    src: 'img/icons/mail.svg',
    href: 'kolesiko.yana@gmail.com',
  }
]
