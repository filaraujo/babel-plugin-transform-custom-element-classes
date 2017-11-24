function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

let _CustomElement = HTMLElement;

if (window.Reflect && window.Reflect.construct) {
  _CustomElement = function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
  };

  Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
  Object.setPrototypeOf(_CustomElement, HTMLElement);
}

suite("FlagIcon", function () {
  let FlagIcon = function (_CustomElement2) {
    _inherits(FlagIcon, _CustomElement2);

    function FlagIcon() {
      _classCallCheck(this, FlagIcon);

      var _this = _possibleConstructorReturn(this, (FlagIcon.__proto__ || Object.getPrototypeOf(FlagIcon)).call(this));

      _this._constructorDidRun = true;
      return _this;
    }

    return FlagIcon;
  }(_CustomElement);

  customElements.define("flag-icon", FlagIcon);

  test("createElement", function () {
    var icon = document.createElement("flag-icon");
    chai.assert(icon instanceof HTMLElement);
    chai.assert(icon instanceof FlagIcon);
    chai.assert.equal(icon.tagName, "FLAG-ICON");
    chai.assert.equal(icon._constructorDidRun, true);
  });

  test("constructor", function () {
    var icon = new FlagIcon();
    chai.assert(icon instanceof HTMLElement);
    chai.assert(icon instanceof FlagIcon);
    chai.assert.equal(icon.tagName, "FLAG-ICON");
    chai.assert.equal(icon._constructorDidRun, true);
  });

  test("innerHTML", function () {
    var div = document.createElement("div");
    div.innerHTML = "<flag-icon></flag-icon>";
    var icon = div.querySelector("flag-icon");

    chai.assert(icon instanceof HTMLElement);
    chai.assert(icon instanceof FlagIcon);
    chai.assert.equal(icon.tagName, "FLAG-ICON");
    chai.assert.equal(icon._constructorDidRun, true);
  });
});