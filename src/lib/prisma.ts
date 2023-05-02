import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

let prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

prisma = prisma.$extends({
  client: {
    $exclude: (collection: any, keys: []) => {
      for (let key of keys) {
        delete collection[key]
      }

      return collection
    }
  }
})

export default prisma;