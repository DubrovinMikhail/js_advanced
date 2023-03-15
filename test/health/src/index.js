export default function healtIndicator(person) {
  if (person.health > 100) {
    return 'error';
  }
  if (person.health > 50) {
    return 'healthy';
  }
  if (person.health <= 50 && person.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
