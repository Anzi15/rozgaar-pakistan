const uploadImage = async (previewUrl ) => {
  const imgbbApiKey = process.env.NEXT_PUBLIC_IMGBB_APIKEY; // Ensure this environment variable is set correctly.

  if (!imgbbApiKey) {
    throw new Error("ImgBB API key is missing. Check your environment variables.");
  }

  try {
    console.log("Fetching the file from preview URL:", previewUrl);

    // Fetch the file from the preview URL
    const response = await fetch(previewUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image. Status: ${response.status}`);
    }

    const fileBlob = await response.blob();

    console.log("Converting file blob to base64");
    const base64Promise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Content = reader.result.split(",")[1]; // Extract base64 data
        resolve(base64Content);
      };
      reader.onerror = reject;
      reader.readAsDataURL(fileBlob);
    });

    const base64File = await base64Promise;

    console.log("Uploading image to ImgBB");
    const formData = new FormData();
    formData.append("image", base64File);

    const uploadResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
      method: "POST",
      body: formData,
    });

    if (!uploadResponse.ok) {
      const errorText = await uploadResponse.text();
      throw new Error(`ImgBB upload failed. Status: ${uploadResponse.status}. Error: ${errorText}`);
    }

    const uploadResult = await uploadResponse.json();
    console.log("Image uploaded successfully:", uploadResult.data.url);
    return uploadResult.data.url; // Return the image URL

  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    throw error;
  }
};

export { uploadImage };
