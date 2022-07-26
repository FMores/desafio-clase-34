import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
	{
		author: {
			id: {
				type: String,
				required: true,
				match: /.+\@.+\..+/,
			},
			name: { type: String, required: true, max: 50 },
			surname: { type: String, required: true, max: 50 },
			alias: { type: String, required: true, max: 50 },
			age: { type: Number, required: true },
			avatar: { type: String, required: true, max: 50 },
		},

		text: { type: String, required: true, max: 1000 },
		timestamp: { type: String, required: true },
	},
	{
		timestamps: false,
		versionKey: false,
	},
);

export default model('message', messageSchema);
