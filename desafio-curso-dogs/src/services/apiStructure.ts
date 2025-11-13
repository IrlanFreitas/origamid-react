export const apiUrl = import.meta.env.VITE_API_URL;

const PHOTO_POST = (token: string, formData: FormData) => {
  return {
    url: apiUrl + "/api/photo",
    options: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    },
  };
};

export { PHOTO_POST };
