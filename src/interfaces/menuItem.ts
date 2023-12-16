// define interface for menu item here
export type TMenuItem = {
	id: number;
	name: string;
	description: string;
	price: number;
	category: "drink" | "food";
};
