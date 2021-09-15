import { connect } from 'mongoose';

export const mongoose = async (): Promise<void> => {
	try {
		await connect(
			'mongodb://127.0.0.1:27017'
		);
		console.log('Conectado a base de datos');
	} catch (error) {
		console.log(error);
	}
};