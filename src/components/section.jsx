import React from "react";

const Section = () => {
  return (
    <>
      <section>
        <div className="col-md-4 mt-2" style={{ color: "white" }}>
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-dark">
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-body-secondary">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
