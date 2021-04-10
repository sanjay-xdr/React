import react from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail"
import ApprovalCard from "./ApprovalCard"


const App = ()=>{
  return (
    <div className="ui container comments">
     <ApprovalCard>
          <CommentDetail author="Sam" time="Today 6:00PM" comment="NICE DP"/>
     </ApprovalCard>

     <ApprovalCard>
          <CommentDetail author="Sam23" time="Today 16:00PM" comment="NICE Content"/>
     </ApprovalCard>

     <ApprovalCard>
          <CommentDetail author="Sam2" time="Yesterday  5:00PM" comment="Gotcha"/>
     </ApprovalCard>
      
      {/* <CommentDetail author="Sam23" time="23456" comment="NICE DP2"/>
      <CommentDetail author="Sam2" time="245hfg3456" comment="NICE DP3"/> */}
      
    </div>
  );
};


ReactDOM.render(<App/>,document.querySelector("#root"));