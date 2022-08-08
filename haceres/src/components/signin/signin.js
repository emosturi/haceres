import {
    createDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logInGooglePopup = async () => {
        const authResponse = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(authResponse);
    };

    return (
        <>
            <h1>Sign Page</h1>
            <button onClick={logInGooglePopup}>Google Sign In</button>
        </>
    );
};

export default SignIn;
