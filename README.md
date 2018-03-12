# Installation
`meteor npm i --save meteor-package-import`

# Usage
This package is intended to be used with the babel plugin `babel-plugin-replace-require`. Together, they can enable standard Meteor-style imports for Meteor packages from npm packages.
For example, you can write this standard Meteor code:
``` js
import { Meteor } from 'meteor/meteor';

console.log(Meteor.settings);
```

Instead of this:
``` js
const Meteor = global.Package['meteor'].Meteor;

console.log(Meteor.settings);
```

Here's the required `.babelrc` configuration:
```json
{
  "plugins": [
    [
      "babel-plugin-replace-require", {
        "meteor": "require('meteor-package-import')"
      }
    ]
  ]
}
``` 

# API

`importPackage(packageName: string)`: 
Imports the specified package if available.
Throws a friendly error if the package is unavailable.

Example:
```js
import importPackage from 'meteor-package-import';

const Meteor = importPackage('meteor').Meteor;
console.log(Meteor.settings);
```

# Developing this package
This package uses typescript. You must have typescript installed (`npm i -g typescript`) then compile the project by running `tsc`.
