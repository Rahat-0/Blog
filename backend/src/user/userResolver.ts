import userSchema from "../db/models/userSchema";

const userResolver = {
  // user find resolver start from here
  async user({ name, email, _id }: unknown) {
    const findData: object = name
      ? { name }
      : email
      ? { email }
      : _id
      ? { _id }
      : {};

    try {
      const user = await userSchema.find(findData);
      return user;
    } catch (error: any) {
      return error?.message;
    }
  },

  // user create resolver start from here
  async userCreate({ name, email, phone, password }: any) {
    try {
      const userSave = new userSchema({
        name,
        email,
        phone,
        password,
        join: Date.now(),
      });
      console.log(userSave);

      return await userSave.save();
    } catch (error: any) {
      return error?.message;
    }
  },

  // user create resolver start from here
  async userUpdate({ _id, name, email, phone }: any) {
    try {
      const userUpdate = await userSchema.findOneAndUpdate(
        { _id },
        {
          $set: { name, email, phone },
        }
      );

      console.log(userUpdate);
      return userUpdate;
    } catch (error: any) {
      return error?.message;
    }
  },

  // user create resolver start from here
  async userDelete({ _id }: any) {
    try {
      const userUpdate = await userSchema.findByIdAndDelete({ _id });
      console.log(userUpdate);
      return userUpdate;
    } catch (error: any) {
      return error?.message;
    }
  },
};

export default userResolver;
