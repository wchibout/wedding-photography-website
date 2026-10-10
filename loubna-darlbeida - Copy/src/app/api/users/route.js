import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// GET /api/users  → list all users
export async function GET() {
  const users = await prisma.user.findMany()
  return Response.json(users)
}

// POST /api/users  → add a user
export async function POST(request) {
  const data = await request.json()
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  })
  return Response.json(newUser)
}
