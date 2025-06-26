import { readFileSync } from 'fs'
import { join } from 'path'
 
export default defineEventHandler(() => {
  const data = readFileSync(join(process.cwd(), 'public/bookings.json'), 'utf-8')
  return JSON.parse(data)
}) 