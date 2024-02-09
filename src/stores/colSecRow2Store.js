import { defineStore } from 'pinia'
import { useColStore } from '@/stores/colStore';
import { ref } from 'vue'

const colStore = useColStore()


export const useColSecRow2Store = defineStore('colSecRow2Store', () => {
  const dialog = ref(false)
  // console.log("dail ",dialog.value)  
  
  const changeToFalseDialog = () => {
    dialog.value = false;
  }
  const changeDialog = () => {
    dialog.value = !dialog.value;

    if (dialog.value) {
        colStore.resetAllSelectedArrayFilters();
    }
  }

  // watch(() => dialog, (newDialogValue) => {
  //   if (newDialogValue) {
  //     // Clear the array when 'dialog' is true:
  //     colStore.allselectedArray.value = []
  //   }
  // })
  return { dialog, changeDialog , changeToFalseDialog}
})



// watch(dialog, (newVal, oldVal) => {
//   console.log(`dialog changed from ${oldVal} to ${newVal}`);
// });

// const changeDialog = () => {
//   console.log("Before update, dialog: ", dialog.value);

// // Ждем, пока реактивные обновления будут завершены
// nextTick(() => {
//   console.log("After update, dialog: ", dialog.value);
// });
//   dialog.value = !dialog.value
// }