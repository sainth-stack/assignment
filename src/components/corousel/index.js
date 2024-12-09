import "./index.css";
import { useState, useEffect } from "react";
const CorouselComponent = ({ data, count, interval = 1000 }) => {
  const [result, setResult] = useState(data);
  const [page, setPage] = useState(0);
  const totPage = Math.ceil(data.length / count);

  useEffect(() => {
    const startIndex = page * count;
    const endIndex = page * count + count;
    const finalData = data.filter(
      (item, index) => index > startIndex - 1 && index < endIndex
    );
    setResult(finalData);
  }, [count, page]);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totPage);
  };

  const handlePrev = () => {
    const prevPage = page == 0 ? totPage - 1 : page - 1;
    setPage(prevPage);
  };

  //   (function () {
  //     const timer = setInterval(() => {
  //       setPage((prev) => (prev + 1) % totPage);
  //     }, interval);
  //   })();

  return (
    <>
      <div className="corousel__container">
        {result.map((item, index) => {
          return (
            <div
              key={index}
              className="corousel__card"
              style={{ backgroundColor: item.color }}
            >
              {item.id}
            </div>
          );
        })}
      </div>
      <div className="button__container">
        <button className="prev" onClick={() => handlePrev()}>
          Prev
        </button>
        <button className="next" onClick={() => handleNext()}>
          Next
        </button>
      </div>
    </>
  );
};

export default CorouselComponent;
