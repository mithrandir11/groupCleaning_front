export const useStatus = () => {
    const statusMap = {
        pending: 'text-yellow-600',
        canceled: 'text-red-500',
        processing: 'text-blue-500',
        accepted: 'text-blue-500',
        completed: 'text-green-500',
    } as const
  
    const getStatusClass = (status: keyof typeof statusMap | string) => {
      return statusMap[status as keyof typeof statusMap] ?? null
    }
  
    return { getStatusClass }
}