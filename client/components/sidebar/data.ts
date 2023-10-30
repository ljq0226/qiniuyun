export interface NavLinkState {
  icon: string
  href: string
  title: string
}

export const NavLinks: NavLinkState[] = [
  {
    icon: 'emojione-v1:house',
    href: '/discover',
    title: '首页',
  },
  {
    icon: 'emojione-v1:glowing-star',
    href: '/',
    title: '推荐',
  },
  {
    icon: 'emojione:eyes',
    href: '/follow',
    title: '关注',
  },
  {
    icon: 'emojione:monkey',
    href: '/friend',
    title: '朋友',
  },
  {
    icon: 'emojione:hamster-face',
    href: '/user',
    title: '我的',
  },
  {
    icon: 'emojione:satellite-antenna',
    href: '/live',
    title: '直播',
  },
  {
    icon: 'emojione:japanese-prohibited-button',
    href: '/channel/1001',
    title: '知识',
  },
  {
    icon: 'emojione-v1:fire',
    href: '/hot',
    title: '热点',
  },
  {
    icon: 'emojione-v1:video-game',
    href: '/channel/1002',
    title: '游戏',
  },
  {
    icon: 'emojione:beach-with-umbrella',
    href: '/channel/1003',
    title: '娱乐',
  },
  {
    icon: 'noto-v1:gorilla',
    href: '/channel/1004',
    title: '二次元',
  },
  {
    icon: 'emojione-v1:music-ascend',
    href: '/channel/1005',
    title: '音乐',
  },
  {
    icon: 'emojione-v1:pot-of-food',
    href: '/channel/1006',
    title: '美食',
  },
  {
    icon: 'emojione-v1:basketball',
    href: '/channel/1007',
    title: '体育',
  },
  {
    icon: 'emojione-v1:see-no-evil-monkey',
    href: '/channel/1008',
    title: '时尚',
  },
]
