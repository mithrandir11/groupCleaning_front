export default defineEventHandler(async (event) => {
    const id = event.context.params.id; // استخراج ID از پارامترها
    const { public: { apiBase } } = useRuntimeConfig(); // استخراج آدرس API خارجی
    const token = getCookie(event, 'token'); // استخراج توکن از کوکی
// return id
    try {
        // ارسال درخواست به API خارجی
        const data = await $fetch(`${apiBase}/orders/${id}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}` // اضافه کردن توکن به header
            }
        });

        return data.data;
    } catch (error) {
        console.error('Error fetching order from external API:', error);
        return { error: 'Failed to fetch order' }; // برگرداندن خطای مناسب
    }
});