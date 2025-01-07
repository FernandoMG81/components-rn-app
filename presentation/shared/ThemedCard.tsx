import { View, ViewProps } from 'react-native'


interface Props extends ViewProps {
  className?: string
}

const ThemedCard = ({className, children}: Props) => {
  return (
    <View className={`bg-white dark:bg-black/10 rounded-xl p-2 shadow shadow/5 ${className}`}>
      {children}
    </View>
  )
}

export default ThemedCard