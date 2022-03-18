import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  const getNewUsers = async () => {
    try {
      const res = await axios.get("users", {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMTM1OThiNWQwNzcwODg4OTAyNWY0ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjkyMjIzOCwiZXhwIjoxNjQ3MzU0MjM4fQ.1XvROshhj0CqeFAgHMmKxdEPQhrQ0CVFhzzNqbBpDzo",
        },
      });
   
      setNewUsers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNewUsers();
  }, []);
  
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem">
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
