import axios from "axios";

interface BrokerValidationResponse {
  success: boolean;
  message?: string;
}

const validateBrokerToken = async (
  token: string,
  broker: string
): Promise<BrokerValidationResponse> => {
  try {
    const response = await axios.post<BrokerValidationResponse>(
      `/api/validatebrokertoken`,
      { token, broker }
    );
    return response.data;
  } catch (error) {
    console.error("Error validating broker token:", error);
    throw new Error("Validation failed");
  }
};

export default validateBrokerToken;
