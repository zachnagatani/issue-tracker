import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import SingleIssue from './SingleIssue';

const issue = {
            "id": "5",
            "type": "issue",
            "attributes": {
                "customerName": "Sargent Guichard",
                "customerEmail": "byurevich0@cnn.com",
                "description": "sapiendsfdsfsdivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                "status": true,
                "openedAt": "01/02/2017",
                "closedAt": "01/04/2017",
                "handling-employee": "Zach Nagatani"
            }
        };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SingleIssue issue={issue} />
    </BrowserRouter>,
    div
  );
});
