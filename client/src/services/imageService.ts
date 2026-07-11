import { supabase } from "./supabase";

export async function saveImage(imageUrl: string, imageType: string) {

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        return await supabase.from("saved_images").upsert(
            {
                user_id: user.id,
                image_url: imageUrl,
                image_type: imageType
            },
            {
                onConflict: "user_id,image_url"
            }
        )
    }
    else return;

}

export async function unsaveImage(imageUrl: string) {

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        return await supabase.from("saved_images").delete()
            .eq("user_id", user.id)
            .eq("image_url", imageUrl);
    }

    else return;

}

export async function getSavedImages(imageType: string) {

    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        const { data, error } = await supabase
            .from("saved_images")
            .select("*")
            .eq("user_id", user.id)
            .eq("image_type", imageType)

        if (error) throw error;

        return data; 
    }

    else {
        return [];
    }

}

export function getOptimizedImage(url: string) {
    return url.replace(
        "/storage/v1/object/public/",
        "/storage/v1/render/image/public/"
    ) + "?width=500&height=700&resize=contain&quality=75";
}