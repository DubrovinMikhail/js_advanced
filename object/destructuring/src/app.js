export default function getSpecialAttack(persone) {
  const specialAttackList = persone.special;
  const result = [];
  specialAttackList.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    result.push({
      id, name, icon, description,
    });
  });
  return result;
}
