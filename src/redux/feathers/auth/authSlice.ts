import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "sonner";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { auth, email, password, name } = action.payload;
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);

          updatedUserData(loggedUser, name);

          if (loggedUser?.email) {
            toast.success("user Create Successfully");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});

const updatedUserData = (user, name) => {
  updateProfile(user, { displayName: name })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const { signUp } = authSlice.actions;
export default authSlice.reducer;
