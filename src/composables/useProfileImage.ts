import { ref } from 'vue'

export function useProfileImage() {
  // You can make this reactive or fetch from API if needed
  // const profileImage = ref('https://randomuser.me/api/portraits/lego/2.jpg')
  const profileImage = ref('/assets/avatar.png')
  return { profileImage }
}