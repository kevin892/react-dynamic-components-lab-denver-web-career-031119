// add Comment component here
import React from "react"
import {BlogPost} from "./BlogPost"
class Comment extends React.Component {
  render (){
    return (
      <div className = "comment">
        {this.props.commentText}
      </div>
    )
  }
}
export default Comment;
