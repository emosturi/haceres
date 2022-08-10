import {
    createDocumentFromAuth,
    signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { SignInHeader, SignInButton, Container } from "./signin-styles.js";

const SignIn = () => {
    const logInGooglePopup = async () => {
        const authResponse = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(authResponse);
        console.log(userDocRef);
    };

    return (
        <>
            <Container>
                <SignInHeader>Have a Google Account?</SignInHeader>
                <SignInButton onClick={logInGooglePopup}>
                    Google Sign In
                </SignInButton>
            </Container>
        </>
    );
};

export default SignIn;
