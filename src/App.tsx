import React, { useEffect, useState } from "react";
import logo from "./logo-horz.svg";
import "./App.css";
import { useGetOrgData } from "./api/get";

export default () => {
  const [url, setUrl] = useState<string | undefined>("");
  const [domain, setDomain] = useState<string>();

  useEffect(() => {
    const queryInfo = { active: true, lastFocusedWindow: true };

    chrome.tabs &&
      chrome.tabs.query(queryInfo, (tabs) => {
        const url = tabs[0].url;
        setUrl(url);
      });
  }, []);

  useEffect(() => {
    if (url) {
      setDomain(new URL(url).hostname);
    }
  }, [url]);

  const orgData = useGetOrgData(domain);

  return (
    <div className="App">
      <header className="App-header">
        <p>URL:</p>
        <p>{url}</p>
        <p>Total Contributions</p>
        <p>Total: {orgData?.response.organization["@attributes"].total}</p>
      </header>
      <footer className="App-footer">
        <p>Data provided by</p>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
};
