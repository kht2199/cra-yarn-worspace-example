import React, { useEffect } from 'react';
import { log } from '@namespace/common/src';

export default function AwesomeComponent() {
  useEffect(() => {
    log('This message is from "@namespace/awesome-react-component"');
  }, []);

  return (
    <div>
      <h1>Awesome component</h1>
      <p>{'This component is from "@namespace/awesome-react-component".'}</p>
      <p>{'This component also use "log" function from "@namespace/common".'}</p>
    </div>
  );
}
