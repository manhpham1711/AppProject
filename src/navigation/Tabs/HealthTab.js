export default HealthTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'Health',
      children: [
        {
          component: {
            name: 'Health',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                titleDisplayMode: 'alwaysShow',
                text: 'Helath',
                icon: listIcon[0],
                selectedIconColor: selectedIconColor,
                animate: false,
              },
            },
          },
        },
      ],
    },
  };
};
