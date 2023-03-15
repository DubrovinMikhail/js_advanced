export default function healtSorted(personList) {
  return personList.sort((prev, next) => next.health - prev.health);
}
