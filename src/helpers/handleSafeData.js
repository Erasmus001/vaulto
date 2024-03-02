// Extract error handling into separate functions

const handleClientError = async (response) => {
  const responseData = await response?.json();
  return responseData;
};

const handleAuthError = async (response) => {
  return await response?.json();
};

const handleServerError = async (response) => {
  return await response?.json();
};

// Simplify switch statement
export const handleResponse = async (response) => {
  if (response?.ok) {
    const responseData = await response?.json();
    const { data } = responseData;

    if (data) {
      return data;
    }

    return responseData;
  } else if (
    response?.status === 400 ||
    response?.status === 422 ||
    response?.status === 403
  ) {
    return handleClientError(response);
  } else if (response?.status === 401 || response?.status === 403) {
    return handleAuthError(response);
  } else if (response?.status === 500) {
    return handleServerError(response);
  } else {
    //! handle other errors
    return response;
  }
};
