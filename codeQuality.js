// level {3}

  const new_users = async(users)=>
  users.map(
    (user,index)=>
    {
      return {...user,id:index}
    }
  )
 