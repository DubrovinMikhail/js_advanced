export default function orderByProps(object, propertisList) {
  const keysList = Object.keys(object);
  const firstKeysList = keysList.filter((prop) => propertisList.includes(prop));
  const secondKeysList = keysList.filter((prop) => !propertisList.includes(prop));
  const result = [...firstKeysList, ...secondKeysList.sort()].map((prop) => ({
    key: prop, value: object[prop],
  }));
  return result;
}
