import { Text, View, TouchableOpacity } from 'react-native';

export const CustomButton = ({title='Click Me!', onPress, borderRadius = 5, margin=0, backgroundColor='green', width="60%", height = 60, titleColor = '#FFFFF', titleStyle = {} }) => {
  return (
    <View className='flex justify-center items-center'>
        <TouchableOpacity style={{
            width: width,
            height: height,
            borderRadius: 20,
            margin: margin,
            backgroundColor:backgroundColor,
            display:'flex',
            justifyContent:'center',
            shadowColor: "black",
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 20,
            elevation: 5, 
        }} onPress={onPress}>
                <Text style={{
                  color: titleColor,
                  ...titleStyle,
                }} className='text-center color-white'>{title}</Text>
         </TouchableOpacity>
    </View>

  );
};
