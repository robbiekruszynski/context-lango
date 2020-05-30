import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag it"
            onClick={() => this.onLanguageChange("Italian")}
          />
          <i
            className="flag pl"
            onClick={() => this.onLanguageChange("Polish")}
          />
          <i
            className="flag fr"
            onClick={() => this.onLanguageChange("French")}
          />
          <i
            className="flag jp"
            onClick={() => this.onLanguageChange("Japanese")}
          />
          <i
            className="flag mx"
            onClick={() => this.onLanguageChange("Spanish")}
          />
        </div>
        {this.state.language}
        <UserCreate />
      </div>
    );
  }
}

export default App;
