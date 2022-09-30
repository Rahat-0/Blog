import postSchema from "../db/models/postSchema";

const postResolver = {
  // post find resolver start from here
  async post({ _id, owner, title }: any) {
    const findData: object = _id
      ? { _id }
      : owner
      ? { owner }
      : title
      ? { title }
      : {};
    try {
      const post = await postSchema.find(findData).populate("comment.comUser");
      return post;
    } catch (error: any) {
      return error?.message;
    }
  },

  // post find resolver start from here
  async postCreate({ owner, title, description, image }: any) {
    try {
      const postSave = new postSchema({
        owner,
        title,
        description,
        image,
      });
      return await postSave.save();
    } catch (error: any) {
      return error?.message;
    }
  },

  // post update resolver start from here
  async postUpdate({ _id, title, description, image }: any) {
    try {
      const postUpdate = await postSchema.findByIdAndUpdate(
        { _id },
        {
          $set: {
            title,
            description,
            image,
          },
        }
      );
      console.log(postUpdate);
      return postUpdate;
    } catch (error: any) {
      return error?.message;
    }
  },

  // post find resolver start from here
  async postDelete({ _id }: any) {
    try {
      const postDelete = await postSchema.findByIdAndDelete({ _id });
      console.log(postDelete);
      return postDelete;
    } catch (error: any) {
      return error?.message;
    }
  },
};

export default postResolver;
