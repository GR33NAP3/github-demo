import { useState } from "react";

import Input from "./Components/Input";
import Display from "./Components/Display";

function App() {
  const [userData, setUserData] = useState(undefined)

  const display = userData && <Display userData={userData} />
  
  return (
    <div>
      <Input setUserData={setUserData}/>
      {display}
    </div>
  );
}

export default App;
