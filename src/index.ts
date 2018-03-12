export default function importPackage(packageName: string) {
  packageName = getPackageName(packageName);
  const meteorPackage = global.Package[packageName];
  if (meteorPackage === undefined) {
    throw new Error(`The Meteor package ${packageName} could not be found to import. Please check the spelling any verify that the package is installed.`);
  }

  return meteorPackage;
}

function getPackageName(packageName: string) {
  const packageSeparatorIndex = packageName.indexOf('/');
  if (packageSeparatorIndex === -1) {
    return packageName;
  }

  return packageName.substring(packageSeparatorIndex + 1);
}
