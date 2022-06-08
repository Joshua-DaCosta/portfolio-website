import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { featured } from "../../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setdata] = useState(featured);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setdata(featured);
        break;
      default:
        setdata("Undergoing Maintenance");
        break;
    }
  }, [selected]);

  const listItems = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web Apps" },
    { id: "mobile", title: "Mobile Apps" },
    { id: "designs", title: "Designs" },
  ];

  return (
    <div id="portfolio" className="portfolio">
      <h1>Portfolio.</h1>
      <ul>
        {listItems.map((item) => (
          <PortfolioList
            id={item.id}
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {
        data === "Undergoing Maintenance" ? <h1>{data}</h1>: 
        data.map((data) => {
            return (
              <div className="item">
                <a href={data.href} target={"_blank"}>
                  <img src={data.img} alt={data.alt} />
                </a>
                <h3>{data.title}</h3>
                <div>
                  <p className="readMore" onClick={() => setReadMore(readMore ? false : true)}>
                    Read More
                  </p>
                  {readMore && <p className="details">{data.details}</p>}
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
