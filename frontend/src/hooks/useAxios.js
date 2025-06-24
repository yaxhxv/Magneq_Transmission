import axiosInstance from '../api/axiosInstance';

/**
 * Custom hook to get the configured Axios instance.
 * @returns {import('axios').AxiosInstance} The configured Axios instance.
 */
const useAxios = () => {
  return axiosInstance;
};

export default useAxios; 