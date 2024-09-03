'use client'

import { useParams, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

type Props = {}

const UserInfoClient = (props: Props) => {
    const params = useParams()
    const { userId } = params
    const router = useRouter()

    useEffect(() => {
        if (userId === '111') {
            router.push('/login')
        }
    }, [userId])

    return (
        <div>UserInfoClient: {userId}</div>
    )
}

export default UserInfoClient

