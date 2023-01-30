import { useState } from "react";
import { Tweet } from "./components/Tweet";

import "./App.css";
import { AppRoutes } from "./AppRoutes";

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //   "Tweet1",
  //   "Tweet2",
  //   "Tweet3",
  // ]);

  // function createTweet() {
  //   setTweets([...tweets, "Tweet 5"]);
  // }
  return <AppRoutes />;
}

export default App;
