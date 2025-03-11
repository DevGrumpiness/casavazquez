export interface INewsMessage {
	id: number;
	name: string;
	content: string;
	read: boolean;
	pictureName?: string;
	expiration_day?: Date;
}
