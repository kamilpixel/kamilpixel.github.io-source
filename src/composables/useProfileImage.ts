import { ref } from 'vue';

export function useProfileImage() {
  const profileImage = ref('/assets/profile.jpg');
  return { profileImage };
}
