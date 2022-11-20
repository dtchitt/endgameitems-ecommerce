import { PrismaClient } from '@prisma/client';
import express from 'express';

const app = express();
const port: number = 3001;

app.listen(port, () => {
	console.log(`Express is listening at http://localhost:${port}`);

	const prisma = new PrismaClient({ log: ['query'] });
	async function main() {
		// const users = await prisma.users.findMany();
		// console.log(users);
		// const emails = await prisma.addresses.findMany();
		// console.log(`find many ${emails}`);
	}

	try {
		main()
			.then(async () => {
				await prisma.$disconnect();
			})
			.catch(async (e) => {
				console.error(e);
				await prisma.$disconnect();
				process.exit(1);
			});
	} catch (error) {
		console.log(error);
	}
});