export default defineEventHandler(async (event) => {
    // const body = await readBody(event)
    const body = await readMultipartFormData(event)
    const { public: { apiBase } } = useRuntimeConfig();
    

    // return body
    try {
        const data = await $fetch(`${apiBase}/resume/store`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        });

        // return data.data;
        return data;
    } catch (error) {
        return error
    }
})



// file: server/api/resume/store.post.js
// export default defineEventHandler(async (event) => {
//     const body = await readMultipartFormData (event)
//     // در این مثال ما مستقیماً کل body را دریافت نمی‌کنیم.
//     // زیرا کل درخواست به صورت FormData ارسال شده و ما می‌خواهیم آن را به لاراول پروکسی کنیم.
//     const { public: { apiBase } } = useRuntimeConfig()
  
//     try {
//       // از fetch استفاده می‌کنیم تا درخواست را به لاراول ارسال کنیم.
//       // توجه داشته باشید که نیازی به تغییر یا خواندن body در این مرحله ندارید.
//       const data = await $fetch(`${apiBase}/resume/store`, {
//         method: 'POST',
//         body: body, // ارسال مستقیم request (یا به صورت stream) ممکن است نیازمند پردازش ویژه باشد.
//         // در بسیاری از موارد بهتر است از یک کتابخانه مانند form-data استفاده کنید.
//         // در اینجا فرض می‌کنیم که درخواست به صورت یک پروکسی ساده ارسال می‌شود.
//         headers: {
//           'Accept': 'application/json',
//           // مهم: ارسال FormData باعث می‌شود که Content-Type به طور خودکار تنظیم شود؛ از تنظیم دستی آن خودداری کنید.
//         }
//       })
//       return data
//     } catch (error) {
//       return error
//     }
//   })
  