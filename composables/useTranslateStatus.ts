// export const useTranslateStatus = () => {
//     const statusTranslations = {
//       pending: 'در انتظار بررسی',
//       assigned: 'ارجاع به متخصص',
//       accepted: 'قبول متخصص',
//       processing: 'در حال انجام کار',
//       completed: 'اتمام شده',
//       canceled: 'لغو شده',
//     };
  
//     const translateStatus = (status: keyof typeof statusTranslations) => {
//       return statusTranslations[status] || status; // اگر وضعیت ناشناخته بود، خود وضعیت برگردانده می‌شود
//     };
  
//     return { translateStatus };
// };