import { NoteCreateForm, ItemCardCollection, NavBar } from "./ui-components";
import { View } from "@aws-amplify/ui-react";
import { Amplify, Hub, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(awsconfig);

// Create listener
const listener = Hub.listen("datastore", async (hubData) => {
  const { event, data } = hubData.payload;
  console.log(`User has a network connection:`, event, data);
});

function App({ otherthing, user }) {
  // {Auth.currentUserInfo().username}
  return (
    <div className="App">
      <NavBar width="100vw" />
      <View maxWidth="400px">
        Logged in as {user.username}
        <NoteCreateForm />
        <ItemCardCollection maxWidth={"400px"} />
      </View>
    </div>
  );
}

export default App;
