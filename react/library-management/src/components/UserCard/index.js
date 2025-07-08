
const UserCard = ({user}) => {
    console.log(user);
  return (
    <div class="card" style={{width: "18rem"}}>
        <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${user.username}.svg`} class="card-img-top"></img>
        <div class="card-body">
            <h5 class="card-title"><strong> Name: </strong>{user.name}</h5>
            <h5><strong> Username: </strong>{user.username}</h5>
            <h5><strong> Email: </strong>{user.email}</h5>
            <p> <strong> Address: </strong> {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}  </p>
        </div>
    </div>
  )
}

export default UserCard
