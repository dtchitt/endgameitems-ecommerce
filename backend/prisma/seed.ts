import { PrismaClient } from '@prisma/client';

/**
 * This will check and populate (if its not found) the database tables against the models in the main function
 * cli: npx prisma db seed
 */
const prisma = new PrismaClient();

async function main() {
	console.log('seeding');
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
