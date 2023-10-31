'use client'
import cn from 'clsx'
import { Icon } from '@iconify/react'

interface GuessDataType {
  title: string
  isHot: boolean
}
interface HotPointType {
  title: string
}
const RankIcon: string[] = [
  'twemoji:index-pointing-up',
  'fluent-emoji:1st-place-medal',
  'fluent-emoji:2nd-place-medal',
  'fluent-emoji:3rd-place-medal',
  'fluent-emoji:3rd-place-medal',
  'fluent-emoji:3rd-place-medal',
]
const GuessData: GuessDataType[] = [
  {
    title: '美食大赏',
    isHot: true,
  },
  {
    title: '旅行狂想',
    isHot: true,
  },
  {
    title: '时尚搭配',
    isHot: true,
  },
  {
    title: '健身健美',
    isHot: true,
  },
  {
    title: '音乐推荐',
    isHot: false,
  },
  {
    title: '电影天堂',
    isHot: false,
  },
  {
    title: '游戏攻略',
    isHot: false,
  },
  {
    title: '萌宠日常',
    isHot: false,
  },
]
const HotPoint: HotPointType[] = [
  {
    title: '梅西金球奖',
  },
  {
    title: `"七擒孟获"`,
  },
  {
    title: `华为注册"遥遥领先"领先商标`,
  },
  {
    title: '马斯克发驻中东美军基地分布图',
  },
  {
    title: '莫名其妙',
  },
  {
    title: '测试',
  },
]
function HotSearch() {
  return (
    <div className="absolute  p-8 w-[330px] mt-2 border border-solid border-[var(--c-secondary-default)]
    rounded-2xl  h-[var(--h-header-hotSearch)] bg-[var(--c-bg-b1)]"
    >

      <div className="flex">
        <div className='text-[var(--c-text-t0)]'>猜你想搜</div>
        <div className="flex-1"></div>
        <div className='flex space-x-1 flex-center'>
          <Icon icon="twemoji:cyclone"></Icon>
          <div>换一换 </div>
        </div>
      </div>
      <div className="flex flex-wrap my-4">
        {
          GuessData.map(((item: GuessDataType) => {
            return (
              <div className={cn('mr-4', item.isHot ? 'text-[--c-primary]' : '')}>
                {item.title}
              </div>
            )
          }))
        }

      </div>
      <h2 className='text-[var(--c-text-t0)] '>热点话题</h2>
      <div>
        {
          HotPoint.map((item:HotPointType,key:number)=>(
            <div className='flex'>
              <Icon icon={RankIcon[key]}></Icon>
              {item.title}
            </div>
          ))
        }
      </div>

    </div>
  )
}
export default HotSearch
