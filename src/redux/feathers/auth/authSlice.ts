import { createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { toast } from "sonner";
import { User } from "firebase/auth";

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
          console.log(state);
          updatedUserData(loggedUser, name);

          if (loggedUser?.email) {
            toast.success("User Create Successfully");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});

const updatedUserData = (user: User, name: string) => {
  updateProfile(user, { displayName: name })
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const { signUp } = authSlice.actions;
export default authSlice.reducer;
