import { createClient } from "@supabase/supabase-js";
import { TMenuItemDrink } from "../interfaces/menuItem";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseApiKey = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

if (!supabaseUrl) {
	throw new Error("Missing Supabase URL");
}
if (!supabaseApiKey) {
	throw new Error("Missing Supabase API key");
}

export const supabase = createClient(supabaseUrl, supabaseApiKey, {
	db: { schema: "public" },
});

export const fetchFromSupabaseBucket = async (bucketName: string) => {
	const { data, error } = await supabase.storage.from(bucketName).list("", {
		limit: 100,
		offset: 0,
	});

	if (error) {
		console.error("Error fetching files:", error);
		return;
	}

	if (data) {
		const urls = data.map((file) => {
			const url = supabase.storage.from(bucketName).getPublicUrl(file.name);
			return url;
		});

		return urls;
	}
};

export const getImageByNameFromBucket = (bucketName: string, imageName: string | null): string | null => {
	if (!imageName) {
		return "";
	}

	const url = supabase.storage.from(bucketName).getPublicUrl(imageName).data.publicUrl ?? "";
	return url;
};

export const setDrink = async (drink: TMenuItemDrink) => {
	const { data, error } = await supabase.from("drinks").insert([drink]);

	if (error) {
		console.error("Error inserting drink: ", error);
		return null;
	}

	return data;
};

export const updateDrink = async (id: string, updatedDrink: Partial<TMenuItemDrink>) => {
	const { data, error } = await supabase.from("drinks").update(updatedDrink).eq("id", id);

	if (error) {
		console.error("Error updating drink: ", error);
		return null;
	}

	return data;
};
