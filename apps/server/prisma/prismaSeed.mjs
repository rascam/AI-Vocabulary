import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice98765@example.com",
      hashedPassword: "3nren5ehsa",
      userSrcLang: "en",
      userTargetLang: "pt-br",
      // userLevel: "beginner",
      // learningDirection: "srcToTarget",
      // slowSpeech: false,
      // words: [],
      // score: 0,
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
