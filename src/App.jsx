import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';

function getUserByID(userId) {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getPostByID(postId) {
  return postsFromServer.find(post => post.id === postId) || null;
}

const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserByID(post.userId),
}));

const comments = commentsFromServer.map(comment => ({
  ...comment,
  post: getPostByID(comment.postId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} comments={comments} />
  </section>
);
