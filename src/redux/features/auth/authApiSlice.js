import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data) => ({
        url: `/auth/login`,
        method: "POST",
        body: data,
      }),
    }),

    registerUser: builder.mutation({
      query(data) {
        return {
          url: "/auth/registration",
          method: "POST",
          body: data,
        };
      },
    }),
    verifyEmail: builder.mutation({
      query(token) {
        return {
          url: `/auth/verify/${token}`,
          method: "POST",
          body: token,
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifyEmailMutation,
} = authApi;
