import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  const createdUser = await prisma.user.create({
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

  const userId = createdUser.id

  for (let i = 0; i < vocList.length; i++) {
    // create a new database entry Word for each i of vocList, with the userId

    await prisma.word.create({
      data: {
        userId,
        srcWord: vocList[i].srcWord,
        imgUrl: vocList[i].url,
        credits: vocList[i].credits,
        targetWord: vocList[i].targetWord,
      },
    })
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const vocList = [
  {
    srcWord: "Anxiety",
    url: "https://images.unsplash.com/photo-1542820893-f3d652b53f50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxBbnhpZXR5fGVufDF8MXx8fDE2ODc5MDk4Nzd8MA&ixlib=rb-4.0.3&q=80&w=200",
    credits: "Steve Supereye",
    targetWord: "Ansiedade",
  },
  {
    srcWord: "Relief",
    url: "https://images.unsplash.com/photo-1548624321-000bbb8e2ce4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxSZWxpZWZ8ZW58MXwxfHx8MTY4NzkwOTg3N3ww&ixlib=rb-4.0.3&q=80&w=200",
    credits: "Lara Leica",
    targetWord: "Alívio",
  },
  {
    srcWord: "Admiration",
    url: "https://images.unsplash.com/photo-1591792653970-d4a6efa2791e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxBZG1pcmF0aW9ufGVufDF8MXx8fDE2ODc5MDk4Nzd8MA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Admiração",
    credits: "Niko Nikon",
  },
  {
    srcWord: "Gratitude",
    url: "https://images.unsplash.com/photo-1609114214930-4f64ba35049f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxHcmF0aXR1ZGV8ZW58MXwxfHx8MTY4NzkwOTg3N3ww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Gratidão",
  },
  {
    srcWord: "Contentment",
    url: "https://images.unsplash.com/photo-1602300592242-ef0280b9bf16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxDb250ZW50bWVudHxlbnwxfDF8fHwxNjg3OTA5ODc3fDA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Contentamento",
  },
  {
    srcWord: "Joy",
    url: "https://images.unsplash.com/photo-1590698933947-a202b069a861?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxKb3l8ZW58MXwxfHx8MTY4NzkwOTg3N3ww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Alegria",
  },
  {
    srcWord: "Sentiment",
    url: "https://images.unsplash.com/photo-1535442015126-7f00526ce88a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxTZW50aW1lbnR8ZW58MXwxfHx8MTY4NzkxMDA5MXww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Sentimento",
  },
  {
    srcWord: "Appreciation",
    url: "https://images.unsplash.com/photo-1554830072-52d78d0d4c18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxBcHByZWNpYXRpb258ZW58MXwxfHx8MTY4NzkxMDA5MXww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Apreciação",
  },
  {
    srcWord: "Sorrow",
    url: "https://images.unsplash.com/photo-1576701617175-5fa0ce5769dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxTb3Jyb3d8ZW58MXwxfHx8MTY4NzkxMDA5MXww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Tristeza",
  },
  {
    srcWord: "Sympathy",
    url: "https://images.unsplash.com/photo-1547098842-dcdd773e3390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxTeW1wYXRoeXxlbnwxfDF8fHwxNjg3OTEwMDkxfDA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Simpatia",
  },
  {
    srcWord: "Streaming",
    url: "https://images.unsplash.com/photo-1623575435856-323b7c1481f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxDb21wYXNzaW9ufGVufDF8MXx8fDE2ODc5MTAwOTF8MA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Transmissão em fluxo contínuo",
  },
  {
    srcWord: "Anger",
    url: "https://images.unsplash.com/photo-1605595988901-3d06601c38ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxBbmdlcnxlbnwxfDF8fHwxNjg3OTEwMDkxfDA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Raiva",
  },
  {
    srcWord: "Emotion",
    url: "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxFbW90aW9ufGVufDF8MXx8fDE2ODc5MTAwOTF8MA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Emoção",
  },
  {
    srcWord: "Love",
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxMb3ZlfGVufDF8MXx8fDE2ODc5MTAwOTF8MA&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Amor",
  },
  {
    srcWord: "Affection",
    url: "https://images.unsplash.com/photo-1501472393568-6d98729ac121?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NjY3ODh8MHwxfHNlYXJjaHwxfHxBZmZlY3Rpb258ZW58MXwxfHx8MTY4NzkxMDA5MXww&ixlib=rb-4.0.3&q=80&w=200",
    targetWord: "Afeto",
  },
]
