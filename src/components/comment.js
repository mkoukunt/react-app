import Avatar from "./avatar";
function formatDate(date) {
    return date.toLocaleDateString();
  }
function Comment(props){
return(<div>
    <Avatar user={props.author} />
   
    <di>
        {props.text}
    </di>
    <div>
        {formatDate(props.date)}
    </div>
</div>);
}

export default Comment;