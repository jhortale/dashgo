import { useQuery, UseQueryResult } from 'react-query'
import { api } from '../api'

type User = {
  id: number
  name: string
  email: string
  createdAt: string
}

export async function getUsers(userId: number): Promise<User> {
  const { data } = await api.get(`/users/${userId}`)

  const user = {
    ...data,
    createdAt: new Date(data.createdAt).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  return user
}

export function useUser(userId: number): UseQueryResult<User, unknown> {
  return useQuery(['user', userId], () => getUsers(userId), {
    staleTime: 1000 * 60 * 10
  })
}
