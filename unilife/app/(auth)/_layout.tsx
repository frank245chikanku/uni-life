import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index" 
        options={{ title: 'Login', headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        options={{ title: 'Sign Up', headerShown: false }}
      />
    </Stack>
  );
}
