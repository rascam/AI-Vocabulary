import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
  const createdUser = await prisma.user.create({
    data: {
      name: "Alice",
      email: "demo@demo.com",
      hashedPassword:
        "$2b$10$CM2N9XcZl646eJJvHnDnxOCIo048zBRLh5d4D0IfIl/Bc15m71vJi",
      userSrcLang: "en",
      userTargetLang: "pt-br",
      userLevel: "beginner",
      learningDirection: "srcToTarget",
      slowSpeech: false,
      score: 53,
      userVocCount: 15,
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
        voice,
        voiceSlow: voice,
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

const voice =
  "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JDHWwg0YjjedOXcn+dChdzIkXy3Wfzr6//NExBoTWYqwAMtWlG2l0F1mnaDm3D0QBx1lj3Ckb6Q/kylCCW4Xro5w6KjOXBKfuVZ6Vix///BuQrt+77yufXW5uoKsahTwAanOfQy1CupuAwnR+TCFovmb0DzqQKPb//NExB8VKWasAMNSlFd+ayJ8xAGWCA7FQ8BQqRj4GSq58luauQhPKuUfXyoIg4DpgOniRT//MFX3/qT1rSLoQHDEcsdQSY5wnNRoDPjFI4aQW9OCMmmA6JTCWz5NkEQd//NExB0SAWqoAMHSlGt1/X/E2cXFRYPAgfmKyKKsjBqKdVOXryr+OR2MITZYedHnf//d//06SQz82EHYVhDa+Bbq7DCGDnLhvH0y8jY2rS1pOmVPQV//oZ0UwmJDxoOA//NExCgRqRakAMtKcCUTD4FBQmFAwPKFgrUocXFQ2DJO///5FjP/vvSRTHWxLxAwerLOTDXNPAaOf9AejjwgFTDVLGlHXX2vck1ZSp+noQjHhalQDOpB4dDxxAPD0e9n//NExDQRyRacAMoKcNbgEbDv//1MIqDH6/dta8k11HWq3JQLwFaT3SJWa+qXsXwy3///p2p/VX/QhTAZKUm01Uypb/8hPq789CfnV/1yejZEapJCEzurnFnOBgYGx3EE//NExD8UMqakAMCEuSKHcDdTnOLRkkScOMh6thv37rARCgoI5K9f862v6fp3NQqOcMD5ysJM8iZsxXvXzw35/7nnrPHLhHsqTpXZZ0thux3zqvtp7/c19kzJw70R1aDD//NExEEckxKoAEFSuGKIDIaVIKMmhiJmTCMWA2IQbBYVhtOJbiQ0zjMYWYQIyT23XV0vpV8ZwTfdUpBSKVqq5P/////80zn/////0//PZKa6UzUOO1VEmMqJGxx9XLT2//NExCETav68AAhOuTFkjZkRhUNwdhIKC4+NChYJiwjiMeKBHElyDlBu43HnONbmsc06rMkcWEDfJf///1//////////n//+f//54/l//SatUhLOHKQ7kqUMGvyFnySx//NExCYQYu7AAABQuR0h2wfexhIsIdSuqC2WY42O9TLfuR1OO30AVlX///8e///////XeS7/2rRus7sr3VnQjiBahs4qofFDHEiC4k7h4PkDrCIuGA4TDqgOdSAKQOnI//NExDcSmw68AABKuWIQWIdiC7IJFbETlMzlRmcaMRTq////In//1///////37/87/e+/G/3+P7zO7tvj88/Xs9c4Uq4tqq7JVo+SFiWLeirUmMTol6uEJWvXSxji1ox//NExD8R2rq8AABMuRJR7q3adziPdf///5DHl//HX//f///7//l/wzJZ51/5adhnXb5GM72azsaoV5qSN4KXMkZI0eCvLnSaQZcCzMgkofrast3bzkG7Lf9LHWwPq+3F//NExEoSYrK8AABMuUGAzABAYsEf/9P//12MwIRG2X2qRP/nON1S15SyXBT5D8s01PPXIyl1X7tujLY11zpxRICGboIYHBKEiobMlRKwCv2eKanKDBpiNQyMaOXdDLug//NExFMRclawABFGuJaQLYp920cUfVKM2TW6T3yIRAcwNyIRsyOAFgJXeiduVf91jKHiwu/4ldLSKjxX7wCZsWorDTvF9v9aqrYL1KVplLKBDSzoNejWqyD4HpbiByfD//NExGAR6XqkAMFElI3iu+e4q+o4qnnIEQlQUgQcVV6JW6IOqZFau4/vn/5/moWXGqx6QAv//1XSanVm2PcmuJkNDHBuioFFoFYKECRTe5+5NEDjEoLY7Zzfe36yqv5D//NExGsScXakAMIQlKbZGXaEYfHEYRFh44QYeooMHAI44WS3//S3ca4g7m////3p1fXVlDmJWAKiAiAkhQonofNgPLOTVnOh8wOEfTliea8XW6+uJtOtW9uE5AiSTJcu//NExHQRiXKoAMJKlJll2ua73Y0uTPNp69SnzCn////0KnRToCxB1yFSy3bcJIZjiHYssHCD2Hcqj3Pl0yuDZCy9i2miSSaixQUtHpiCA7GPvOuQWnqNW7Jd5CgPVtj3//NExIAQSP6cAHvYcP1RF////+XX///NoowDEsjHsSxMF/X9mIIh6bM8HKP0eKFrlhUClmbXsr2Xe5K5nOW3YzonCcJokmJZT3dj6zPQxZHK70KkVmcmN31HDv////tz//NExJEScQKIAMPYcELf/+vL1RPhMhSgjIiooUWnEO0onahITHMApmNhkX9Yuwxa3xh9DiwfVEZh4OZuSC0ojYatn/b8aaR7PxWgYEosPMZLTKgJH////6AMeWAWbF/7//NExJoTCQaAAMPYcHapOl4igWH9QqMYqpRJPBGQykFRdMjo+Zi1lat+szvW8Ziudxeh8nDFblFR9GtbdYL3wt1gvdYYqPowlBUZZ8sgl////+WHnQq7pcKAiZjBgFgw//NExKATsQJwAHvYcBMzUBAj6oUBQMqqUAhR8YCaqqqYUBX4GAiZmZqFEyoKiIKhoGnxEBXEirpYfUPO339rMjkevET9YalTsRRFnepMQU1FMy4xMDBVVVVVTEFNRTMu//NExKQSMQpIAGMecDEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExK4SAP3cABDGcDEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV"
