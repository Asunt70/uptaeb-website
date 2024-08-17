import {
    AuthAction,
    useUser,
    withUser,
    withUserTokenSSR,
} from "next-firebase-auth"

const demo =  () => {
    useUser()
    return (
        <div>
            <p>Your email is (authUser.email ? authUser.email : "unknown" )</p>
        </div>
    );
}

export const getServerSideProps = withUserTokenSSR()()
export default withUser(
    whenUnauthedBeforeInit:  AuthAction.REDIRECT_TO_LOGIN
)(demo)
