import React, { useEffect } from 'react';
import FormBuilder from './components/FormBuilder/FormBuilder';
import formJson from './formJson.json';

const App = () => {
  useEffect(() => {
    const setViewportMetaTag = () => {
      const viewportMetaTag = document.querySelector('meta[name="viewport"]');
      if (viewportMetaTag) {
        viewportMetaTag.content = 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0';
      }
    };
    setViewportMetaTag();
  }, []);

  return (
    <div className="w-full">
      <FormBuilder formJson={formJson} />
    </div>
  );
};

export default App;
