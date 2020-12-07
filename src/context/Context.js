import React, { createContext, Component } from "react";
const Context = createContext();

const fetchedUser = {
  email: "mango@gmail.com",
  name: "Mango",
  phone: "5544661234",
  avatar:
    "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/131833819/original/a02cbadd2762acd521acff220b0cff951440b9ad/draw-your-roblox-minecraft-or-any-avatar-from-a-game.png",
  habits: [
    {
      id: 1,
      title: "Зарядка",
      comment: "не будь свиньей",
      repeat: "Каждый час",
      color: "#390093",
      remind: true,
      progress: "66%",
    },
  ],
};

class UserContext extends Component {
  static Consumer = Context.Consumer;

  handleLogin = () => {
    this.setState({ user: fetchedUser, isLogIn: true });
  };

  handleLogOut = () => {
    this.setState({ user: null, isLogIn: false });
  };

  state = {
    user: fetchedUser,
    isLogIn: false,
    handleLogin: this.handleLogin,
    handleLogOut: this.handleLogOut,
  };

  render() {
    return (
      <div>
        <Context.Provider value={this.state}>
          {this.props.children}
        </Context.Provider>
      </div>
    );
  }
}
export default UserContext;
