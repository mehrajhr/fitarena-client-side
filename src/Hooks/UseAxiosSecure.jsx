// import axios from "axios";
// import React, { useEffect } from "react";
// import UseAuth from "./UseAuth";

// const axiosInstance = axios.create({
//   baseURL: "https://fitarena-server.vercel.app/",
// });

// const UseAxiosSecure = () => {
//   const { user,setUser, logOut , idToken} = UseAuth();
//   useEffect(() => {
//     axiosInstance.interceptors.request.use(async(config) => {
//       if(user){
//         config.headers.Authorization = `Bearer ${idToken}`;
//       }
//       return config;
//     });

//     // response interceptor
//     axiosInstance.interceptors.response.use(
//       (response) => {
//         return response;
//       },
//       (error) => {
//         if (error.status === 401 || error.status === 403) {
//           logOut()
//             .then(() => {
//               console.log("logout user for 401 status code");
//               setUser(null);
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         }
//         return Promise.reject(error);
//       }
//     );
//   }, [user , logOut , idToken , setUser]);
//   return axiosInstance;
// };

// export default UseAxiosSecure;

import axios from "axios";
import React, { useEffect } from "react";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "https://fitarena-server.vercel.app/",
});

const UseAxiosSecure = () => {
  const { user, logOut , loading} = UseAuth();

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
          config.headers.Authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            logOut()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user , loading , logOut]);

  return axiosInstance;
};

export default UseAxiosSecure;
