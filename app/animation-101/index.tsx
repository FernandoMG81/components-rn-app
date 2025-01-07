import ThemedButton from '@/presentation/shared/ThemedButton';
import ThemedView from '@/presentation/shared/ThemedView';

const Animation101Screen = () => {
  return (
    <ThemedView margin>

      <ThemedButton
        className='mb-5' 
        onPress={() => console.log('FadeIn')}>FadeIn
      </ThemedButton>

      <ThemedButton
        className='mb-5' 
        onPress={() => console.log('FadeOut')}>FadeOut
      </ThemedButton>


    </ThemedView>
  );
};
export default Animation101Screen;
