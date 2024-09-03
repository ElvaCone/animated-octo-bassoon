'use client'

import { useParams } from 'next/navigation'
import React from 'react'

type Props = {}

const NewsInfoPage = (props: Props) => {
    const params = useParams()
    const { userId, newsId } = params
    
  return (
    <div>NewsInfoPage: {userId} - {newsId}</div>
  )
}

export default NewsInfoPage

