import { AuthWrapper } from "../../components/AuthWrapper";
import { LoginForm } from "../../components/LoginForm";

const SignIn = () => {
  return (
    <AuthWrapper
      heading="Sign In"
      redirectText="New here?"
      redirectHolder="Sign Up"
      redirectURL="/auth/signup"
    >
      <LoginForm />
    </AuthWrapper>
  );
};

export default SignIn;
