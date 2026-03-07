import Comment from '../Comment/Comment';

export default function CommentTree({ comments, storyAuthor }) {
  return (
    <div>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} storyAuthor={storyAuthor} depth={0} />
      ))}
    </div>
  );
}
