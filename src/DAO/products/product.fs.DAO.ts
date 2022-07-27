import { date_creator } from '../../utils/date.creator';
import { IMessage } from '../interfaces';
import fs from 'fs/promises';

export class ProductFsDAO {
	private filePath: string;

	constructor(fileLocation: string) {
		this.filePath = fileLocation;
	}

	private async fileStat(): Promise<import('fs').Stats> {
		const fileStats = await fs.stat(this.filePath);
		if (fileStats.size === 0) {
			await fs.writeFile(this.filePath, JSON.stringify([]));
			const fileInitialized = await fs.stat(this.filePath);
			return fileInitialized;
		}
		return fileStats;
	}

	private async readFile(): Promise<Array<any>> {
		await this.fileStat();
		const dataStr = await fs.readFile(this.filePath, 'utf8');
		const dataObj = JSON.parse(dataStr);
		return dataObj;
	}

	private async writeFile(data: any): Promise<void> {
		await fs.writeFile(this.filePath, JSON.stringify(data, null, '\t'));
	}

	public async get() {
		try {
			await this.fileStat();

			const msg_array = await this.readFile();

			//const msg_normalized = normalizr_function.nmzr(msg_array);

			//console.log(util.inspect(msg_normalized, true, 7, true));

			return msg_array;
		} catch (err: any) {
			console.log('Error:', err.message);
		}
	}

	public async add(new_msg: IMessage) {
		const stats = await this.fileStat();
		const date = await date_creator();

		if (stats.size > 2) {
			const currentMsgArray = await this.readFile();

			const msg_to_save = {
				author: {
					_id: new_msg.email,
					name: new_msg.name,
					surname: new_msg.surname,
					age: new_msg.age,
					alias: new_msg.alias,
					avatar: new_msg.avatar,
				},
				text: new_msg.text,
				timestamp: date,
			};

			currentMsgArray.push(msg_to_save);

			await this.writeFile(currentMsgArray);
		} else {
			const initial_msg = {
				author: {
					_id: new_msg.email,
					name: new_msg.name,
					surname: new_msg.surname,
					age: new_msg.age,
					alias: new_msg.alias,
					avatar: new_msg.avatar,
				},
				text: new_msg.text,
				timestamp: date,
			};
			const initialArrayOfProducts = [initial_msg];

			await this.writeFile(initialArrayOfProducts);
		}
	}
}
