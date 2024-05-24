## SFormUI

SFormUI is a React project aimed at dynamically creating a form UI wizard from JSON data. It's currently under development and designed to facilitate the creation of interactive and customizable forms in React applications.

### Features

- **Dynamic Form Generation**: SFormUI allows you to define form structures and validation rules using JSON data, enabling the dynamic creation of form UIs without the need for hardcoding.
- **Wizard-like Interface**: The project implements a wizard-like interface, guiding users through multiple steps of form input, enhancing user experience and organization.
- **Customizable**: You can customize various aspects of the form UI, including input fields, labels, validation rules, and styling, to suit your specific application requirements.
- **Validation Support**: SFormUI supports validation of form inputs based on user-defined rules, ensuring data integrity and accuracy.
- **Responsive Design**: The form UI components are designed to be responsive, providing a seamless user experience across different devices and screen sizes.

### Demo

Check out the live demo [here](https://sfromui-sudhi001s-projects.vercel.app).

### Installation

To install and use SFormUI in your React project, follow these steps:

1. Clone the SFormUI repository.
2. Install dependencies using npm or yarn.
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```
3. Start the development server.
   ```
   npm start
   ```
   or
   ```
   yarn start
   ```

### Usage

To integrate SFormUI into your React application, import the necessary components and define your form structure using JSON data. Then, render the form UI components within your application, passing the form data and any additional configuration props as needed.

```jsx
import React from 'react';
import SFormUI from 'sformui';

const formData = {
  "forms": [
    {
      "id": "demo",
      "steps": [
        {
          "meta": {
            "id": "step1",
            "title": "Demo Application"
          },
          "onNext": {
            "id": "step2"
          },
          "form": [
            {
              "type": "text",
              "text": "App test form"
            }
          ]
        },
        {
          "meta": {
            "id": "step2",
            "title": "Step One"
          },
          "onNext": {
            "id": "step3"
          },
          "form": [
            {
              "key": "name",
              "type": "input",
              "keyboard": "text",
              "hint": "Name",
              "label": "Name",
              "validations": [
                {
                  "expression": "isEmpty",
                  "message": "Name should not be empty"
                }
              ]
            }
            
          ]
        },
        {
          "meta": {
            "id": "step3",
            "title": "Step Two"
          },
          "onBack": {
            "id": "step2"
          },
          "onNext": {
            "action": "step4"
          },
          "form": [
            {
              "key": "age",
              "type": "input",
              "keyboard": "integer",
              "hint": "Age Of User",
              "label": "Age Of ${name}",
              "validations": [
                {
                  "expression": "isLessThan 18",
                  "message": "Age should be greater than 18"
                },
                {
                  "expression": "isEmpty",
                  "message": "Age is required"
                }
              ]
            }
          ]
        },
        {
          "meta": {
            "id": "step4",
            "title": "Final Step"
          },
          "onBack": {
            "id": "step3"
          },
          "onNext": {
            "action": "finish"
          },
          "form": [
            {
              "type": "label",
              "text": "Name is ${name}",
              "width":"100%"
            },
            {
              "type": "label",
              "text": "Age is ${age}",
              "width":"100%"
            }
          ]
        }
      ]
    }
  ]
};

const MyFormComponent = () => {
  return (
    <div>
      <SFormUI formData={formData} />
    </div>
  );
};

export default MyFormComponent;
```

### Contributing

Contributions to SFormUI are welcome! If you have any suggestions, bug reports, or feature requests, please feel free to open an issue or submit a pull request on the GitHub repository.

### License

SFormUI is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### About

SFormUI is developed and maintained by Sudhi S. It was created as a solution for simplifying form UI development in React applications. For any inquiries or support requests, please contact devsudhi@icloud.com.
