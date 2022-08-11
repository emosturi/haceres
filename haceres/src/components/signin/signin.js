import { useContext, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { SessionContext } from "../../contexts/SessionContext";
import {
    auth,
    createDocumentFromAuth,
    signInWithGooglePopup,
    signOutWithGoogle,
} from "../../utils/firebase/firebase.utils";
import { SignInHeader, SignInButton, Container } from "./signin-styles.js";

const SignIn = () => {
    const [user] = useAuthState(auth);
    const { userId, dispatch } = useContext(SessionContext);

    useEffect(() => {
        const id = user ? user.uid : "";
        dispatch({ type: "SET_USER_ID", userId: id });
    }, [user]);

    const logInGooglePopup = async () => {
        const authResponse = await signInWithGooglePopup();
        const userDocRef = await createDocumentFromAuth(authResponse);
    };
    const logOut = async () => {
        const authResponse = await signOutWithGoogle();
    };

    return (
        <>
            <Container>
                <SignInHeader>Have a Google Account?</SignInHeader>
                <SignInButton
                    onClick={() => {
                        user ? logOut() : logInGooglePopup();
                    }}>
                    {user ? "Sign Out" : "Google Sign In"}
                </SignInButton>
            </Container>
        </>
    );
};

export default SignIn;
