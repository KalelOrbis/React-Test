import { useState } from "react";
import { Tweet } from "./components/Tweet";

import "./App.css";

function App() {
  const [tweets, setTweets] = useState<string[]>([
    "Tweet1",
    "Tweet2",
    "Tweet3",
  ]);

  function createTweet() {
    setTweets([...tweets, "Tweet 5"]);
  }
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet text={tweet} />;
      })}

      <button
        onClick={createTweet}
        style={{
          backgroundColor: "deepskyblue",
        }}
      >
        Add tweet
      </button>
    </div>
  );
}

export default App;
