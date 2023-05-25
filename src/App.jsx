import { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import "./App.css";

function App() {
  const [sum, setSum] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const res1 = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?id=4RTEu5Hbyt8&key=AIzaSyBIYQomaBsVUNbXsmO7B95_l1IXyuGDslQ&part=statistics"
      );
      const res2 = await fetch(
        "https://www.googleapis.com/youtube/v3/videos?id=ji5a3It46oI&key=AIzaSyBIYQomaBsVUNbXsmO7B95_l1IXyuGDslQ&part=statistics"
      );
      const unishield = await res1.json();
      const lame = await res2.json();
      const unishieldLikes = unishield.items[0].statistics.likeCount;
      const lameLikes = lame.items[0].statistics.likeCount;
      console.log(unishieldLikes, lameLikes);
      const likesNeeded = lameLikes - unishieldLikes;
      setSum(likesNeeded);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };
  return (
    <>
      <div style={{ direction: "rtl" }}>
        <h1>בואו להשפיע 🦄 </h1>
        <h3>זה כרגע המרחק שלנו מניצחון:</h3>{" "}
        <h1 style={{ color: sum > 0 ? "red" : "green", direction: "rtl" }}>
          {sum ? (sum > 0 ? sum + " " : -sum + " ") : "loading..."}לייקים
        </h1>
        <p>{sum > 0}</p>
        <h2>
          כנסו ל<a href="https://youtu.be/4RTEu5Hbyt8">פה</a>, תעשו לייק ותראו
          איך השפעתם
        </h2>
        <p>בבקשה תפיצו כדי שבאמת נעשה שינוי</p>
        <img src={logo} alt="" style={{ width: "120px", marginTop: "40px" }} />
      </div>
    </>
  );
}

export default App;
