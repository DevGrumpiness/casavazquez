// define interface for menu item here
export type MenuItem = {
	id: number;
	name: string;
	description: string;
	price: number;
	category: "drink" | "food";
};
