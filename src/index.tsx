import React from "react";
import ReactDOM from "react-dom";
import {Button, Dropdown, Input, Row} from 'sezy-design'
// import Block from '../src/block'
import IndexPage from "~pages/index";

const App = (): React.ReactElement => {
    return (
        <>
        {/* <Row>
        <a>asdfdsf</a>
        <a>asdfdsf</a>
        <a>asdfdsf</a>
          </Row> */}
      {/* <Testcom /> */}

      {/* <Dropdown
          caretIconName='caret'
          label='label'
          type='flat'
          classes='margin-20'
          placement='rt'
        >
          <div>aaaa s fse fdsf</div>
          <div>aaaa</div>
          <div>aaaa</div>
          <a href="google.com">aaaa</a>
        </Dropdown>
        <Input placeholder="aaaa" errorText='Hasdasd'/>
        <Button label='Hoang' classes="radius-2 border solid"/> */}
        
        <IndexPage />
      </>
    )
  }

ReactDOM.render(<App />, document.getElementById("root"));
