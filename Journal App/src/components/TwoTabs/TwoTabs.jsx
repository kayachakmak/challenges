import { useState } from "react";
import { Tab, Tabs, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EntryList from "../EntryList/EntryList";
import { entries } from "../../../lib";
import "./TwoTabs.css";

export default function TwoTabs() {
  const [key, setKey] = useState("tab1");

  return (
    <Tabs id="controlled-tabs" activeKey={key} onSelect={(k) => setKey(k)}>
      <Tab
        eventKey="tab1"
        title={
          <span>
            All Entries <Badge className="badge">{entries.length}</Badge>
          </span>
        }
      >
        <EntryList />
      </Tab>
      <Tab
        eventKey="tab2"
        title={
          <span>
            Favorites <Badge className="bg-secondary">1</Badge>
          </span>
        }
      >
        Content for Tab 2
      </Tab>
    </Tabs>
  );
}
