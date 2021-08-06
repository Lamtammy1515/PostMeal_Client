import React from 'react';
import { connect } from 'react-redux'
import { deleteComment } from '../actions/commentsAction';

class DeleteComment extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          id: this.props.commentId
        };
        this.handleDeleteComment = this.handleDeleteComment.bind(this)
      }
    

    handleDeleteComment = (e) => {
        e.preventDefault()  
        this.props.deleteComment(this.state, this.props.commentId);
        console.log(this.state)
    }

    render() {
        return (
        <div>
            <button onClick={this.handleDeleteComment}>DELETE</button>
        </div>
        )
    }
}
export default connect(null, { deleteComment })(DeleteComment)