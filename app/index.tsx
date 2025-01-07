import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes'
import MenuItem from '@/presentation/menu/MenuItem'
import ThemedView from '@/presentation/shared/ThemedView'
import { View } from 'react-native'

const ComponentsApps = () => {
  return (
    <ThemedView margin>
      {
        animationMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            name={route.name}
            icon={route.icon}
            isFirst={index === 0}
            isLast={animationMenuRoutes.length - 1 === index}
          />
        ))
      }

      <View className='my-3' />

      {
        uiMenuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            name={route.name}
            icon={route.icon}
            isFirst={index === 0}
            isLast={uiMenuRoutes.length - 1 === index}
          />
        ))
      }

      <View className='my-3' />

      {
        menuRoutes.map((route, index) => (
          <MenuItem
            key={route.title}
            title={route.title}
            name={route.name}
            icon={route.icon}
            isFirst={index === 0}
            isLast={menuRoutes.length - 1 === index}
          />
        ))
      }
    </ThemedView>
  )
}

export default ComponentsApps