import  {init} from 'next-firebase-auth';

const initAuth = () => {
    init({
        authPageURL: '/login',
        appPageURL: '/uptaeb-virtual',
        loginAPIEndpoint: '/api/auth/login',
        logoutAPIEndpoint: '/api/auth/logout',
        firebaseAdminInitConfig: {
            credential : {
                projectId: 'uptaeb-website',
                clientEmail: 'firebase-adminsdk-vu1jd@uptaeb-website.iam.gserviceaccount.com',
                privateKey: process.env.FIREBASE_PRIVATE_KEY  ?? '',
            }
        },
        firebaseClientInitConfig: {
            apiKey: 'AIzaSyDeFgQhJ0SAbLPLxhrkWgH2ZR5xaeFXthY',
            projectId: "uptaeb-website",
            appId: "1:92508463660:web:9a6f5fc6cf47de2e76a789",
            authDomain: "uptaeb-website.firebaseapp.com",
            storageBucket: "uptaeb-website.appspot.com",
            messagingSenderId: "92508463660",
            measurementId: "G-MRL0S2JQ6L"
        },
        cookies: {
            name: 'uptaeb-cookies',
            keys: [
                process.env.COOKIE_SECRET_CURRENT,
                process.env.COOKIE_SECRET_PREVIOUS,
            ],
            httpOnly: true,
            maxAge: 12 * 60 * 60 * 24 * 1000,
            overwrite: true,
            path: '/',
            sameSite: 'strict',
            secure: true,
            signed: true
            },
    })
};

export default initAuth;