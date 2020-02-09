import React from 'react';

function PostHeader(props) {
  return (
    <div className='post-header'>
      <img className='avatar' src={props.author.avatar} />
      <div className='details'>
        <span>{props.author.name}</span>
        <span>{props.date}</span>
      </div>
    </div>
  );
}

function Comments({ comments }) {
  return (
    <div className='post-comments'>
      <div className='divider' />
      {comments.map(comment => (
        <div key={comment.id} className='comment'>
          <img className='avatar' src={comment.author.avatar} />
          <p>
            <span>{comment.author.name}</span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  );
}

class PostItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='post'>
        <PostHeader {...this.props} />
        <p className='post-content'>{this.props.content}</p>
        <Comments comments={this.props.comments} />
      </div>
    );
  }
}

export default PostItem;
