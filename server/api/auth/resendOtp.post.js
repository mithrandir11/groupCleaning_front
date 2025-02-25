export default defineEventHandler(async (event) => {
    const { public: {apiBase} } = useRuntimeConfig()
    const loginToken =  getCookie(event, 'login_token')

    try {
        const data = await $fetch(`${apiBase}/auth/resend-otp`, {
            method: 'POST',
            body: {login_token:loginToken},
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
        // return data.data.user
        return 'otp resent'
    } catch (error) {
        console.log(error)
        return error
    }

})