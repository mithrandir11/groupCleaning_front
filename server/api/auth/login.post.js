export default defineEventHandler(async (event) => {

    const body = await readBody(event)
    const { public: {apiBase} } = useRuntimeConfig()
    // return body

    try {
        const data = await $fetch(`${apiBase}/auth/login`, {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json'
            }
        })

        setCookie(event, 'login_token', data.data.login_token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 *  6,
            path: '/'
        })

        // console.log(data)
        // return data.data
        return 'login success'
    } catch (error) {
        console.log(error)
        return error
    }

})