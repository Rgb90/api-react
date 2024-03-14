import { useLoaderData } from "react-router-dom";
import { UserType, PostType, Comment } from "../types/index";
import User from "../components/User";
import Post from "../components/Post";

const PostPage = () => {
  const pageData = useLoaderData() as {
    user: UserType;
    post: PostType;
    comments: Comment[];
  };
  return (
    <div>
      <User user={pageData.user} />
      <Post post={pageData.post} />
    </div>
  );
};

export default PostPage;
