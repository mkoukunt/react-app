import Avatar from "./avatar";

function UserInfo(props){
return(<div>
    <Avatar user={props.user} />
    <div>{props.user.name}</div>
</div>)
    

}
export default UserInfo;