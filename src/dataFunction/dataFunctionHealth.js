import { Colors } from '../themes/index';
import { Icon } from '../themes/index';
const listFunctionHealth = [
  {
    id: 1,
    title: 'Chế độ dinh dưỡng',
    icon: Icon.icon_fastFood,
    backgroundColor: Colors.generality,
  },
  {
    id: 2,
    title: 'Kiểm tra triệu chứng',
    icon: Icon.icon_stethoscope,
    backgroundColor: Colors.symptom,
  },
  {
    id: 3,
    title: 'Đo nhịp tim',
    icon: Icon.icon_love,
    backgroundColor: Colors.health,
  },
  {
    id: 4,
    title: 'Đếm số bước chân',
    icon: Icon.icon_walking,
    backgroundColor: Colors.step,
  },
  {
    id: 5,
    title: 'Giờ giấc đi ngủ',
    icon: Icon.icon_sleep,
    backgroundColor: Colors.sleep,
  },
];

export default listFunctionHealth;
