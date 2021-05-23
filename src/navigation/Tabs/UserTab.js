export default UserTab = (listIcon, selectedIconColor) => {
  return {
    stack: {
      id: 'User',
      children: [
        {
          component: {
            name: 'User',
            options: {
              topBar: {
                visible: false,
              },
              bottomTab: {
                text: 'User',
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
