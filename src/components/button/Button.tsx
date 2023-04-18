const Buttons = () => {
    const handleCVDownload = () => {
      fetch("Kolya-s-CV.pdf").then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          const alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Kolya-s-CV.pdf";
          alink.click();
        });
      });
    };

    return (
      <div className="container buttons-container">
        <button className="btn pri" onClick={handleCVDownload}>
          Get my CV
        </button>
        <a href="#contact" className="btn sec">
          Get in Touch
        </a>
      </div>
    );
};

export default Buttons;