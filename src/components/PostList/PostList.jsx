import './PostList.scss';
import { PostInfo } from '../PostInfo/PostInfo';

export const PostList = ({ posts, comments }) => (
  <div className="PostList">
    {posts.forEach(post => {
      comments.forEach(comment => console.log(comment.postId === post.id));

      // return (
      //   <PostInfo
      //     post={post}
      //     comments={comments.filter(comment => post === comment.post)}
      //   />
      // );
    })}
  </div>
);
