import { createChallengeTableSQL, createSolutionTableSQL, createUserTableSQL, createResourcesTableSQL, dropChallengeTableSQL, dropSolutionTableSQL, dropUserTableSQL, dropResourceTableSQL, insertChallengeSQL, insertResourceSQL } from './sql.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const loadAndSaveData = async () => {
	try {
		/*
		 * DROP ALL TABLES
		 */
		await connection.query(dropChallengeTableSQL);
		console.log('***dropped challenge table***');

		await connection.query(dropSolutionTableSQL);
		console.log('***dropped solution table***');

		await connection.query(dropUserTableSQL);
		console.log('***dropped user table***');

		await connection.query(dropResourceTableSQL);
		console.log('***dropped resource table***');

		/*
		 * CREATE NEW TABLES
		 */
		await connection.query(createChallengeTableSQL);
		console.log('***created challenge table***');

		await connection.query(createUserTableSQL);
		console.log('***created user table***');

		await connection.query(createSolutionTableSQL);
		console.log('***created solution table***');

		await connection.query(createResourcesTableSQL);
		console.log('***created resource table***');

		/*
		 * SEED NEW TABLES
		 */
		const challenges = [
			['Hello World',
				'https://res.cloudinary.com/ratracegrad/image/upload/v1658878203/HelloWorld_ojsk4f.png',
				'Hello World Smart Contract',
				'In this challenge you will create your first smart contract. This contract will display the words Hello World.',
				'In this challenge you will create your first smart contract. This contract will display the words Hello World. You can get started using the Remix IDE that you can load into your browser. The goal of this challenge is to write your very first smart contract.',
				'Beginner',
				'Should display the text Hello World when user clicks a button;To increase difficulty allow users to input a name and then display Hello <Name>;Another option is to display Hello World unless the user inputs a name',
				'Beginner',
				''],
			['AirBnb Clone',
				'https://res.cloudinary.com/ratracegrad/image/upload/v1658878203/AirbnbClone_kyt7tp.png',
				'AirBnb Smart Contract',
				'In this challenge you will create the basic functionality provided by AirBnb by registering properties and renting them out.',
				'In this challenge you will create the basic functionality provided by AirBnb by registering properties and renting them out. You will need to provide the ability for people to register as landlords. Once registered they can list their properties. Anyone visiting website will be able to rent any property that is available for the dates specified.',
				'Advanced',
				'Allow landlords to register with your contract;Landlords can list their properties;Landlords can provide descriptions for their property;Users can view available properties;Users can rent a property',
				'Advanced',
				''],
			['Vending Machine Smart Contract',
				'https://res.cloudinary.com/ratracegrad/image/upload/v1658878203/VendingMachine_f84lic.png',
				'Vending Machine Smart Contract',
				'In this challenge you will create a vending machine smart contract that will allow users to purchase items from a vending machine.',
				'In this challenge you will create a vending machine smart contract that will allow users to purchase items from a vending machine. You will have to provide the ability for users to purchase items from the vending machine. You will also have to provide the ability for the vending machine to track the inventory of items.',
				'Intermediate',
				'Create an inventory of products;Allow users to purchase a product;Keep track of available inventory;Notify user if item is out of stock',
				'Intermediate',
				''],
		];
		await connection.query(insertChallengeSQL, [challenges]);
		console.log('***challenges saved***');

		const resources = [
			['Buildspace', 'Home to the world\'s best web3 builders. Buildspace accelerates your builder journey into web3.', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658083173/Screen_Shot_2022-07-17_at_2.39.22_PM_lw1fkr.png','Buildspace','Community','https://buildspace.so/'],
			['Learn Blockchain & Solidity', 'This course will give you a full introduction into all of the core concepts', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658082951/BlockchainSoliditySmartContracts_n4bmfi.webp', 'Learn Blockchain & Solidity','Video','https://www.youtube.com/watch?v=gyMwXuJrbJQ'],
			['Solidity in 2 Hours', 'Learn to program in Solidity in the full tutorial. Solidity is an object-oriented programming language for writing smart contracts. It is used for implementing smart contracts on various blockchain platforms, most notably, Ethereum.', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658082951/SolidityIn2Hours_mkawzt.webp', 'Solidity in 2 Hours','Video','https://www.youtube.com/watch?v=ipwxYa-F1uY'],
			['Developer DAO', 'Developer DAO exists to accelerate the education and impact of a new wave of web3 builders.', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658083577/Screen_Shot_2022-07-17_at_2.46.06_PM_suf7k6.png', 'Developer DAO','DAO','https://www.developerdao.com/'],
			['Create Your First Smart Contract', 'If you ever wanted to get into smart contract development with Solidity, then this article is for you. Well, even if you never heard of Solidity and smart contracts before, following this article might perhaps inspire you to dig a little deeper and perhaps even create your own crypto coin or DEX.', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658083715/createFirstSmartContract_bqvwhq.webp', 'Create Your First Smart Contract','Article','https://dev.to/oliverjumpertz/how-to-set-up-a-solidity-project-and-create-your-first-smart-contract-4e9d'],
			['Create Tests For Your Smart Contract', 'You have created your first smart contract, now learn how to write tests for it.', 'https://res.cloudinary.com/ratracegrad/image/upload/v1658083811/CreateTests_sa7adf.webp', 'Create Tests For Your Smart Contract','Article','https://dev.to/stermi/how-to-create-tests-for-your-solidity-smart-contract-2238'],
		];

		await connection.query(insertResourceSQL, [resources]);
		console.log('***resources saved***');

	} catch (error) {
		console.log(error);
	}
}

await loadAndSaveData();
process.exit(0);
