import { Flex, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { ComapnyForm } from "../../components/CompanyForm";
import { TalentForm } from "../../components/TalentForm";

const SignUp = () => {
  const [companyForm, setCompanyForm] = useState(false);

  return (
    <AuthWrapper
      heading="Create An Account"
      redirectText="Owned an accoun?"
      redirectHolder="Sign In"
      redirectURL="/auth/signin"
    >
      <Flex
        justifyContent={["space-around", "space-between"]}
        mb="1.5em"
        mx="auto"
        w={["70%", "55%"]}
      >
        <Button
          size="xs"
          p={["16px", "1.5em"]}
          borderRadius="4px"
          _hover={{ color: "blue.600", bgColor: "gray.300" }}
          bgColor={companyForm ? "gray.200" : "gray.300"}
          color={companyForm ? "gray.400" : "blue.600"}
          onClick={() => setCompanyForm(false)}
        >
          Talent
        </Button>
        <Button
          size="xs"
          p={["16px", "1.5em"]}
          borderRadius="4px"
          _hover={{ color: "blue.600", bgColor: "gray.300" }}
          bgColor={companyForm ? "gray.300" : "gray.200"}
          color={companyForm ? "blue.600" : "gray.400"}
          onClick={() => setCompanyForm(true)}
        >
          Company
        </Button>
      </Flex>

      <VStack align="center" w="100%" my="0.5em">
        {companyForm ? <ComapnyForm /> : <TalentForm />}
      </VStack>
    </AuthWrapper>
  );
};

export default SignUp;
