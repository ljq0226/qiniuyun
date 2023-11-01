'use client'
import cn from 'clsx'
import { Icon } from '@iconify/react'
import { title } from 'process'

interface GuessDataType {
  title: string
  isHot: boolean
  id: number
}
interface HotPointType {
  title: string
  id: number
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
    id: 1
  },
  {
    title: '旅行狂想',
    isHot: false,
    id: 2
  },
  {
    title: '时尚搭配',
    isHot: false,
    id: 3
  },
  {
    title: '健身健美',
    isHot: true,
    id: 4
  },
  {
    title: '音乐推荐',
    isHot: false,
    id: 5
  },
  {
    title: '电影天堂',
    isHot: false,
    id: 6
  },
  {
    title: '游戏攻略',
    isHot: true,
    id: 7
  },
  {
    title: '萌宠日常',
    isHot: false,
    id: 8
  },
]
const HotPoint: HotPointType[] = [
  {
    title: '梅西金球奖',
    id: 1
  },
  {
    title: `"七擒孟获"`,
    id: 2
  },
  {
    title: `华为注册"遥遥领先"领先商标`,
    id: 3
  },
  {
    title: '马斯克发驻中东美军基地分布图',
    id: 4
  },
  {
    title: '莫名其妙',
    id: 5
  },
  {
    title: '测试',
    id: 6
  },
]
function HotSearch() {
  return (
    <>
      <div className="flex">
        <div className="text-[var(--c-text-t0)] text-[21px] font-bold ">猜你想搜</div>
        <div className="flex-1"></div>
        <div className="flex space-x-1 text-[18px] flex-center">
          <Icon height={20} icon="twemoji:cyclone"></Icon>
          <div>换一换 </div>
        </div>
      </div>
      <div className="flex flex-wrap my-4">
        {
          GuessData.map(((item: GuessDataType) => {
            return (
              <div key={item.id} className={cn('pr-4 overflow-hidden whitespace-nowrap flex items-center justify-start pl-2 py-2 rounded-lg hover:cursor-pointer text-[21px] pb-2 hover:bg-[--c-bg-b3] hover:text-[--c-primary] w-[45%] h-[40px] ', item.isHot ? 'text-[--c-primary]' : '')}>
                <span className="truncate">
                  {item.title}
                </span>
              </div>
            )
          }))
        }

      </div>
      <h2 className="text-[var(--c-text-t0)] text-[21px] font-bold  ">热点话题</h2>
      <div>
        {
          HotPoint.map((item: HotPointType, key: number) => (
            <div key={item.id} className="flex items-center w-full hover:bg-[--c-bg-b3] p-2 rounded-lg hover:text-[--c-primary] hover:cursor-pointer text-[21px] pb-2">
              <Icon height={30} icon={RankIcon[key]}></Icon>
              <div className="flex flex-center ml-1 overflow-hidden whitespace-nowrap">
                <span className="truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))
        }
      </div>

    </>
  )
}
export default HotSearch
