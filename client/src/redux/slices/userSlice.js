import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  //intial states should be what?
  initialState: {
    name: "John Norlin",
    picture:
      "https://media.licdn.com/dms/image/D5603AQGifro26yiT9Q/profile-displayphoto-shrink_400_400/0/1704990610950?e=1710979200&v=beta&t=JutT-UbJU2s_SupnU07gScOVjADWDX_MYgbT_A96yCA",
    backgroundColor: "purple",
    bio: "I like pikachu",
    pronouns: "he/him",
    messages: ["hi john!", "i hate you john", "get rekt"],
  },
  reducers: {
    //dispatch(booleanSet(cloudInfo))
    setUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
