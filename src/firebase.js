import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {

    apiKey: "AIzaSyCo8MHfLefZyii42v8vLUhlOqzr_IMbw7Q",
  
    authDomain: "windbnb-devchallenge.firebaseapp.com",
  
    projectId: "windbnb-devchallenge",
  
    storageBucket: "windbnb-devchallenge.appspot.com",
  
    messagingSenderId: "1061577323277",
  
    appId: "1:1061577323277:web:069e04826fafb9e438f644",
  
    measurementId: "G-Y993E4MMH0"
  
  };
  
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export default app