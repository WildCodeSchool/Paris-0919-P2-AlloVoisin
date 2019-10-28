import React, { Component } from "react";

class Skins extends Component {
  render() {
    return (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          class="cross"
          onClick={this.props.showStoreSkins}
        />
        <ul className="items-list-container">
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839013-hulkgrey.png"
              alt="Grey Hulk"
            />
            <p>Grey Hulk</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839013-hulksavage.png"
              alt="Savage Hulk"
            />
            <p>Savage Hulk</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839013-hulkviolet.png"
              alt="Purple Hulk"
            />
            <p>Purple Hulk</p>
            <button>Hire</button>
          </li>

          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839730-thor-modern.png"
              alt="Modern Thor"
            />
            <p>Modern Thor</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839730-thor-mighty.png"
              alt="Mighty Thor"
            />
            <p>Mighty Thor</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839730-thor-avendger.png"
              alt="Avenger Thor"
            />
            <p>Avenger Thor</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839928-ms-marvel2.png"
              alt="Ms Marvel 2.0"
            />
            <p>Ms.Marvel 2.0</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571839928-ms-marvel-modern.png"
              alt="Modern Ms Marvel"
            />
            <p>Modern Ms.Marvel</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840544-spider-man-white.png"
              alt="White Spider Man"
            />
            <p>White Spider Man</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840544-spider-man-original.png"
              alt="Original Spider Man"
            />
            <p>Original Spider Man</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840544-spider-man-black.png"
              alt="Black Spider Man"
            />
            <p>Black Spider Man</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840701-black-widow-avendger2.png"
              alt="Avenger Black Widow"
            />
            <p>Avenger Black Widow</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840702-black-widow-avendger.png"
              alt="Avenger 2.0 Black Widow"
            />
            <p>Avenger 2.0 Black Widow</p>
            <button>Hire</button>
          </li>
          <li className="item-container">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571840702-black-widow.png"
              alt="Original Black Widow"
            />
            <p>Original Black Widow</p>
            <button>Hire</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Skins;
