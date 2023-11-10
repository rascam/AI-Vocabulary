import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "3gsrtY1F@example.com",
    },
  })
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
