import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;

  //this is how you hook up context to a class based comp
  //it HAS TO BE CALLED contextype

  render() {
    const text = this.context === "english" ? "Submit" : "Invia";
    return <button className="ui button primary">{text}</button>;
  }
}
export default Button;
