import { PrismaClient } from '@prisma/client'

// Prisma 7 handles the database URL automatically from process.env.DATABASE_URL
const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seeding to TiDB...')

  // Cleanup
  await prisma.product.deleteMany({})
  await prisma.category.deleteMany({})
  await prisma.brand.deleteMany({})

  // Seed Data
  const mobilePhone = await prisma.category.create({ data: { name: 'Mobile Phone', slug: 'mobile-phone' } })
  const smartWatch = await prisma.category.create({ data: { name: 'Smart Watch', slug: 'smart-watch' } })
  const notebook = await prisma.category.create({ data: { name: 'Notebook', slug: 'notebook' } })

  const apple = await prisma.brand.create({ data: { name: 'Apple' } })
  
  await prisma.product.create({
    data: {
      name: 'iPhone 14 Plus',
      price: 2640000,
      imageUrl: 'sample-image',
      colors: 'Red',
      storage: '128GB',
      categoryId: mobilePhone.id,
      brandId: apple.id
    }
  })

  console.log('🏁 Success!')
}

main().finally(async () => await prisma.$disconnect())