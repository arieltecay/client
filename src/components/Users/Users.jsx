import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../actions/users.js";

const Users = () => {
  const users = useSelector((state) => state.userName);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      <div>
        {users.map((user, id) => (
          <div key={id}>{user.username}</div>
        ))}
      </div>
    </div>
  );
};

export default Users;
