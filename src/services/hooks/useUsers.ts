import { useQuery, UseQueryResult } from 'react-query'
import { api } from '../api'

type User = {
  id: number
  name: string
  email: string
  createdAt: string
}

interface GetUsersResponse {
  users: User[]
  totalCount: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page
    }
  })

  const totalCount = Number(headers['x-total-count'])

  const users = data.users
    .map((user: User) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }))
    .sort((a: number, b: number) => a - b)

  return { users, totalCount }
}

export function useUsers(
  page: number
): UseQueryResult<GetUsersResponse, unknown> {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10
  })
}
