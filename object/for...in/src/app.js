export default function orderByProps(object, propertisList) {
  if (Object.keys(object).length === 0) {
    throw new Error('Передаваемый объект пуст');
  }
  if (propertisList.length === 0) {
    throw new Error('передаваемый список свойств пуст');
  }

  const copyObject = { ...object };
  const provenProperties = [];

  propertisList.forEach((prop) => {
    if (Object.keys(copyObject).includes(prop)) {
      provenProperties.push(prop);
    }
  });

  const result = [];
  provenProperties.forEach((prop) => {
    result.push({ key: prop, value: copyObject[prop] });
    delete copyObject[prop];
  });

  const otherPropertisList = [];
  Object.keys(copyObject).forEach((prop) => {
    otherPropertisList.push({ key: prop, value: copyObject[prop] });
  });
  otherPropertisList.sort((prop1, prop2) => (prop1.key > prop2.key ? 1 : -1));
  result.push(...otherPropertisList);
  return result;
}
