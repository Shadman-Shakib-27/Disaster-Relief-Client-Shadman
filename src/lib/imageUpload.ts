import { auth } from "@/Provider/AuthProvider";

export const uploadImage = async (file: File): Promise<string> => {
  const uploadUrl = import.meta.env.VITE_UPLOAD_URL;

  if (!uploadUrl) {
    throw new Error("Image upload service is not configured.");
  }

  const token = await auth.currentUser?.getIdToken();
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(uploadUrl, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    body: formData,
  });
  const result = await response.json();
  const imageUrl =
    result?.url ?? result?.data?.url ?? result?.data?.display_url;

  if (!response.ok || !imageUrl) {
    throw new Error(result?.message ?? "Image upload failed.");
  }

  return imageUrl;
};
