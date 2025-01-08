import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

const TextInputsScreen = () => {

  const [form, setform] = useState({
    name: '',
    email: '',
    phone: ''
  })

  const isIOS = Platform.OS === 'ios'

  return (
    <KeyboardAvoidingView
      behavior={isIOS ? 'height' : undefined}
    >

      <ScrollView>
        <ThemedView margin>
          <ThemedCard className='mb-5'>
            <ThemedTextInput
              placeholder='Nombre completo'
              autoCapitalize='words'
              autoCorrect={false}
              onChangeText={(text) => setform({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder='Correo electrónico'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => setform({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setform({ ...form, email: text })}
            />

          </ThemedCard>

          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>
          <ThemedCard className='my-2'>
            <ThemedText>{JSON.stringify(form, null, 2)}</ThemedText>
          </ThemedCard>

          <ThemedCard 
            // style={{
            //   marginBottom: isIOS ? 100 : 10
            // }}
          >
            <ThemedTextInput
              placeholder='Teléfono'
              autoCorrect={false}
              keyboardType='phone-pad'
              onChangeText={(text) => setform({ ...form, email: text })}
            />
          </ThemedCard>

        </ThemedView>
        {
          isIOS && <View style={{ marginBottom: 100 }}></View>
        }
      </ScrollView>
    </KeyboardAvoidingView>

  );
};
export default TextInputsScreen;
