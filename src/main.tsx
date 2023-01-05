import React from 'react';
import ReactDOM from 'react-dom/client';
import Theme from './Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		{/* https://stackoverflow.com/questions/72489140/react-18-strict-mode-causing-component-to-render-twice -> https://github.com/pocketbase/js-sdk#auto-cancellation */}
		<Theme />
	</React.StrictMode>,
);
