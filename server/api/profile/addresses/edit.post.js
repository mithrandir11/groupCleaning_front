export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')

    try {

        // console.log(body)
        const data = await $fetch(`${apiBase}/addresses/edit`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        return data.data;
    } catch (error) {
        return error
    }
})