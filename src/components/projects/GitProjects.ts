import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
    appId: process.env.REACT_APP_APP_ID,
};

export async function retrieveGitProjects(username: string): Promise<any[]> {

    // Images generated from https://wepik.com/ prompt:( Type: Low Poly )software engineers writing code on desktop cute with background color #9c2c34
    
    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        return response.data;
    } catch (error) {
        console.error(`Error retrieving GitHub projects for user ${username}:`, error);
        return [];
    }
}

export async function projectImagesFromFirebase(imageNumber: String): Promise<string> {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const pathReference = ref(storage, `/mysite/Image${imageNumber}.png`);

    try {
        const downloadURL = await getDownloadURL(pathReference);
        return downloadURL;
    } catch (error) {
        console.error('Error getting download URL:', error);
        return "";
    }
}
