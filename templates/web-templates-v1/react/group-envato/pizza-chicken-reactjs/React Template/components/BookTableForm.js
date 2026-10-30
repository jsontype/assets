const BookTableForm = () => {
  return (
    <div
      className="booking-table-form mb-0"
      style={{
        backgroundImage: "url(assets/images/background/form-bg.png)",
      }}
    >
      <div className="section-title">
        <h2>book a table</h2>
      </div>
      <p>Enjoy your food to book your table</p>
      <form
        id="booking-form"
        className="booking-form mt-25"
        name="booking-form"
        method="post"
      >
        <div className="row gap-20">
          <div className="col-md-12 mb-20">
            <div className="form-group">
              <select name="person" id="person">
                <option value="option2">2 Person</option>
                <option value="option3">3 Person</option>
                <option value="option4">4 Person</option>
              </select>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="date">
                <i className="far fa-calendar-alt" />
              </label>
              <input
                type="text"
                id="date"
                name="date"
                className="form-control"
                defaultValue=""
                placeholder="Date"
                required=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="time">
                <i className="far fa-clock" />
              </label>
              <input
                type="text"
                id="time"
                name="time"
                className="form-control"
                defaultValue=""
                placeholder="Time"
                required=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-0">
              <button type="submit" className="theme-btn">
                book your table <i className="far fa-arrow-alt-right" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default BookTableForm;

export const BookTableForm2 = () => {
  return (
    <div
      className="booking-table-form rmt-50"
      style={{
        backgroundImage: "url(assets/images/background/form-bg.png)",
      }}
    >
      <div className="section-title">
        <h2>book a table</h2>
      </div>
      <p>Enjoy your food to book your table</p>
      <form
        id="booking-form"
        className="booking-form mt-25"
        name="booking-form"
        method="post"
      >
        <div className="row gap-20">
          <div className="col-md-6 mb-20">
            <div className="form-group">
              <select name="person" id="person">
                <option value="option1">Person</option>
                <option value="option2">Person 2</option>
                <option value="option3">Person 3</option>
                <option value="option4">Person 4</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="date">
                <i className="far fa-calendar-alt" />
              </label>
              <input
                type="text"
                id="date"
                name="date"
                className="form-control"
                defaultValue=""
                placeholder="Date"
                required=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="time">
                <i className="far fa-clock" />
              </label>
              <input
                type="text"
                id="time"
                name="time"
                className="form-control"
                defaultValue=""
                placeholder="Time"
                required=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <label htmlFor="number">
                <i className="far fa-phone" />
              </label>
              <input
                type="text"
                id="number"
                name="number"
                className="form-control"
                defaultValue=""
                placeholder="Phone"
                required=""
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group mb-0">
              <button type="submit" className="theme-btn">
                book your table <i className="far fa-arrow-alt-right" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
