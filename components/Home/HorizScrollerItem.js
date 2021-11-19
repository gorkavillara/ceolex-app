const HorizScrollerItem = ({ img, title, desc }) => (
  <div className="horiz-scroller-item">
    <div className="horiz-scroller-img">
      <img src={img} alt="horiz-scroller-img" />
    </div>
    <div className="horiz-scroller-text">
      <span className="horiz-scroller-title">{title}</span>
      <span className="horiz-scroller-desc">{desc}</span>
    </div>
  </div>
);

export default HorizScrollerItem;
