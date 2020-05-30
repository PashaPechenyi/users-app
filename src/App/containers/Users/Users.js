import React from "react";
import UsersBlock from "../../components/UsersBlock";
import "./Users.scss";

export default function Users(props) {
  return (
    <section className="users">
      <a name="users"></a>
      <div className="container users_wrapper">
        <div className="users_title">
          <h1>Our cheerful users</h1>
          <p>Attention! Sorting users by registration date</p>
        </div>

        <UsersBlock
          reloadUsers={props.reloadUsers}
          isReloadUsers={props.isReloadUsers}
        />
      </div>
    </section>
  );
}
