import React from "react";

import TopicList from "./TopicList";
import "./Topic.css";

let topicArray = [
  {
    name: "Sports",
    nameArray: [
      "sports1",
      "sports2",
      "sports3",
      "sports4",
      "sports5",
      "sports6",
    ],
  },
  {
    name: "Technology",
    nameArray: [
      "tech1",
      "tech2",
      "tech3",
      "tech4",
      "tech5",
      "tech6",
      "tech7",
      "tech8",
    ],
  },
  {
    name: "Cinema",
    nameArray: ["bollywood", "hollywood", "tollywood", "jollywood"],
  },
  {
    name: "Country",
    nameArray: ["India", "America", "Japan", "France"],
  },
  {
    name: "Scientific Research",
    nameArray: ["sR1", "sR2", "sR3", "sR4", "sR5"],
  },
  {
    name: "Investment",
    nameArray: ["stocks", "mutual Funds", "RealEstate", "Gold"],
  },
  {
    name: "Defence",
    nameArray: ["Defence1", "Defence2", "Defence3", "Defence4", "Defence5"],
  },
];

function Topic() {
  return (
    <div className="topic-subclass">
      {topicArray.map((topic) => {
        return TopicList(topic);
      })}
    </div>
  );
}

export default Topic;
