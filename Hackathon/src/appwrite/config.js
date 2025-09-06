const config={
    appwriteurl:String(import.meta.env.VITE_APPWRITE_URL),
    appwriteprojectid:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollectionid:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    appwritebucketidresume:String(import.meta.env.VITE_APPWRITE_BUCKET_ID_RESUME),
    appwritebucketidimages:String(import.meta.env.VITE_APPWRITE_BUCKET_ID_IMAGES)
}
function printConfig() {
    console.log(config);
}
export default config;
export { printConfig };
