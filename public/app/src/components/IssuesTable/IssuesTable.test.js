import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import IssuesTable from './IssuesTable';

const issues =
    {
        "data": [
            {
                "id": "1",
                "type": "issue",
                "attributes": {
                    "customerName": "Ztogy Maloggy",
                    "customerEmail": "aelloyurevich0@cnn.com",
                    "description": "sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": false,
                    "openedAt": "08/09/2016",
                    "closedAt": "09/04/2016",
                    "handling-employee": "Taco Bravo"
                },
            }, {
                "id": "2",
                "type": "issue",
                "attributes": {
                    "customerName": "Sargent Guichard",
                    "customerEmail": "byurevich0@cnn.com",
                    "description": "sapiendsfdsfsdf in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget",
                    "status": false,
                    "openedAt": "06/01/2016",
                    "closedAt": "06/10/2016",
                    "handling-employee": "Betteann Yurevich"
                }
            }, {
                "id": "3",
                "type": "issue",
                "attributes": {
                    "customerName": "Leo Dio",
                    "customerEmail": "ldd@aol.com",
                    "description": "yallsuck lentesque eget",
                    "status": true,
                    "openedAt": "07/01/2016",
                    "closedAt": "07/10/2016",
                    "handling-employee": "Zach Nagatani"
                }
            }, {
                "id": "4",
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
            }, {
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
            }, {
                "id": "6",
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
            }, {
                "id": "7",
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
            }, {
                "id": "8",
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
            }, {
                "id": "9",
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
            }, {
                "id": "10",
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
            }
        ]
    };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <IssuesTable issues={issues.data}/>
    </BrowserRouter>,
    div
  );
});
