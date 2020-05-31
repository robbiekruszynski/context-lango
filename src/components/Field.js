import React from "react";
import LamguageContext from "../contexts/LanguageContext";
class Field extends React.Component {
  static contextType = LamguageContext;
  render() {
    const text = this.context === "English" ? "Name" : "Nome";
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}
export default Field;
