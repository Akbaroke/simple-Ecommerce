import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import IMG_SKELETON from '../../assets/skeleton-img.svg'
import style from './style.module.scss'

function CardProductSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className={style.cardProduct}>
        <Skeleton width={150} height={100} />
        <img src={IMG_SKELETON} />
        <div className="p-3 flex flex-col gap-1">
          <Skeleton
            count={3}
            style={{ marginBottom: '10px' }}
            height={8}
            width={150}
          />
          <Skeleton height={8} width={50} />
        </div>
      </div>
    ))
}

export default CardProductSkeleton
