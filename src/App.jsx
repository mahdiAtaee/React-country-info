import React, { useState, useEffect } from "react";
import wiki from "wikipedia";
import "./App.css";
import LoadingGif from "./Loading.gif";
import Info from "./Components/info";
import Map from "./Components/Map";
import Summary from "./Components/summary";

function App() {
  const [selectedCountry, setselectedCountry] = useState("iran");
  const [summary, setSummary] = useState("");
  const [info, setInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [flag, setFlag] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const page = await wiki.page(selectedCountry);

        const [intro, info, sum] = await Promise.all([
          page.intro(),
          page.infobox(),
          page.summary(),
        ]);

        const flag = info.imageFlag.replace(/\s/g, "_");

        if (sum.originalimage.source.includes(flag)) {
          setFlag(sum.originalimage.source);
        }

        setSummary(intro);
        setInfo(info);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedCountry]);

  function handleClick(name) {
    setselectedCountry(name);
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col col-md-12 d-flex align-items-center justify-content-center">
          <Map handleClick={handleClick} />
        </div>
      </div>
      <div className="row mt-3">
        {!isLoading ? (
          <>
            <div className="col-12 col-md-9">
              <Summary summary={summary} />
            </div>
            <div className="col-12 col-md-3">
              <Info info={info} flag={flag} />
            </div>
          </>
        ) : (
          <>
            <div className="overlay"></div>
            <img src={LoadingGif} className="loading" alt="Loading ..." />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
