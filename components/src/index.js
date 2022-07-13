import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import "./style/App.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <h4>Warning</h4>
        <div>Are you sure you want to do this</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          postText="Nice blog post!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          postText="So Cool!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          imageAvatar={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          postText="Awesome"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
